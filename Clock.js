
    var clockOutput;
    Tick("13:34");
    Tick("21:00");
    Tick("11:15");
    Tick("03:03");
    Tick("14:30");
    Tick("08:55");
    Tick("00:00");
    Tick("12:00");


function Tick(time) {
    clockOutput = "";
    ProcessTick(time);
    console.log(`"${time}" "${clockOutput}"`);
}

function ProcessTick(time){
    var timeSplit = time.split(":");
    var minute = timeSplit[1];
    var hour = timeSplit[0];

    //if is divisible by 3
    var isDivisibleBy3 = minute % 3 === 0;
    var isDivisibleBy5 = minute % 5 === 0;
    var isDivisibleByBoth = (isDivisibleBy3 && isDivisibleBy5);

    var isLongCuckooTime = minute === "00";
    var isShortCuckooTime = minute === "30";
    
    if(isDivisibleByBoth){
        if(isLongCuckooTime){
            var hour12 = Get12Hour(hour);
            for(var i = 0; i < hour12; i++){
                AddToOutput("Cuckoo");
            }
            return;
        }else if (isShortCuckooTime){
            AddToOutput("Cuckoo");
            return;
    }

        AddToOutput("Fizz Buzz");
        return;
    }

    if (isDivisibleBy3){
        AddToOutput("Fizz");
        return;
    }

    if (isDivisibleBy5){
        AddToOutput("Buzz");
        return;
    }

    AddToOutput("tick");
}

function Get12Hour(hour) {
    if (hour == "00"){
        return 12;
    }

    var hour12 = hour > 12 ? hour - 12 : hour;
    return hour12;
}

function AddToOutput(word){
    if (clockOutput == ""){
        clockOutput = word;
    }else{
        clockOutput += " " + word;
    }
}
