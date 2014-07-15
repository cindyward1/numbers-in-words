describe ("numbersInWords", function() {
  it("should display 'zero' for the entered value of 0", function() {
    numbersInWords("0").should.equal("zero");
  });
  it("should display 'one' for the entered value of 1", function() {
    numbersInWords("1").should.equal("one");
  });
  it("should display 'twenty nine' for the entered value of 29", function() {
    numbersInWords("29").should.equal("twenty nine");
  });
  it("should display 'three hundred' for the entered value of 300", function() {
    numbersInWords("300").should.equal("three hundred ");
  });
  it("should display 'three hundred twenty six' for the entered value of 326", function() {
    numbersInWords("326").should.equal("three hundred twenty six");
  });
  it("should display 'one thousand forty three' for the entered value of 1043", function() {
    numbersInWords("1043").should.equal("one thousand forty three");
  });
  it("should display 'one thousand one hundred forty three' for the entered value of 1143", function() {
    numbersInWords("1143").should.equal("one thousand one hundred forty three");
  });
  it("should display 'nine thousand one hundred forty three' for the entered value of 9143", function() {
    numbersInWords("9143").should.equal("nine thousand one hundred forty three");
  });
  it("should display 'eleven thousand one hundred three' for the entered value of 11103", function() {
    numbersInWords("11103").should.equal("eleven thousand one hundred three");
  });
  it("should display 'one hundred thousand three' for the entered value of 100003", function() {
    numbersInWords("100003").should.equal("one hundred thousand three");
  });
  it("should display 'one hundred forty thousand three' for the entered value of 140003", function() {
    numbersInWords("140003").should.equal("one hundred forty thousand three");
  });
  it("should display 'one billion two' for the entered value of 1000000002", function() {
    numbersInWords("1000000002").should.equal("one billion two");
  });
});

