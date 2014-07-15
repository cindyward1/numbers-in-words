var numbersInWords = function(inputNumberString) {
  var inputNumber = 0;
  var inputNumberArr = inputNumberString.split("");
  var outputNumber = "";
  var tempNumber = "";
  var calcNumber = "";
  var numbers = {0:"zero",1:"one",2:"two",3:"three",4:"four",5:"five",6:"six",7:"seven",8:"eight",
                 9:"nine",10:"ten",11:"eleven",12:"twelve",13:"thirteen",14:"fourteen",
                 15:"fifteen",16:"sixteen",17:"seventeen",18:"eighteen",19:"nineteen",
                 20:"twenty",30:"thirty",40:"forty",50:"fifty",60:"sixty",70:"seventy",
                 80:"eighty",90:"ninety",100:"hundred",1000:"thousand", 1000000:"million",
                 1000000000:"billion",1000000000000:"trillion"};

  if (inputNumberArr[0] === "0" && inputNumberArr.length === 1) { // special case: 0 input
      inputNumber = parseInt(inputNumberArr[0]);
      outputNumber = numbers[inputNumber];
  } else if (inputNumberArr.length > 15) { // array is too long for program to handle
      alert("Number is too long");
  } else {
    for (var i = 0; i < inputNumberArr.length; i++) {
      tempNumber = inputNumberArr[i];
      calcNumber = tempNumber;
      for (var i2 = i; i2 < inputNumberArr.length-1; i2++) {
        if (i2 === 0 && inputNumberArr.length > 2 && tempNumber !== "0") { // first time through with number > 100
          inputNumber = parseInt(tempNumber);
          outputNumber = outputNumber + numbers[inputNumber] + " ";
          calcNumber = 1;
        };
        calcNumber = calcNumber + "0";
      };

      if (tempNumber !== "0") {
        tempNumber = calcNumber;
        inputNumber = parseInt(tempNumber);
        if (i === inputNumberArr.length - 1) {
         outputNumber = outputNumber + numbers[inputNumber]
        } else {
         outputNumber = outputNumber + numbers[inputNumber] + " ";
       };
      };
    };
  };

  return outputNumber;
};

$(document).ready(function() {

  $("form#input-form").submit(function(event) {

    var userInput = $("input#input").val();

    var outputNumber = numbersInWords(userInput);
    $(".output").text(outputNumber);
    alert("userInput = " + userInput + " outputNumber = " + outputNumber);
    $("#result").show();

    event.preventDefault();
  });
});
