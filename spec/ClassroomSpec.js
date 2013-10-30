describe("Classroom", function() {
  var classroom;

  describe("when a classroom is built with no students", function() {

    it("should have 0 students", function() {
		classroom = new Classroom();
      	expect(classroom.students.length).toEqual(0);
    });
  });

  describe("when a classroom is built", function() {
 
    it("should have the right number of students", function() {
    	classroom = new Classroom(100);
  		expect(classroom.students.length).toEqual(100);
  	});
  });

  describe("when a student is asked for his/her number", function() {

    it("should say 'Fizz' if is a Fizz number", function() {
    	var fizzNumber = 3;
      	expect(classroom.sayNumber(fizzNumber)).toEqual('Fizz');
    });

    it("should say 'Buzz' if is a Buzz number", function() {
    	var buzzNumber = 5;
      	expect(classroom.sayNumber(buzzNumber)).toEqual('Buzz');
    });

    it("should say 'FizzBuzz' if is a FizzBuzz number" , function() {
    	var fizzBuzzNumber = 15;
      	expect(classroom.sayNumber(fizzBuzzNumber)).toEqual('FizzBuzz');
    });

    it("should say his/her number otherwise" , function() {
    	var number = 4;
      	expect(classroom.sayNumber(number)).toEqual(number);
    });
  });

});