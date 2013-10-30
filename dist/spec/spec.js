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

});;describe("Student", function(){
	var student;

	describe("when student number is divisible by 3", function(){
		beforeEach(function(){
			student = new Student(3);
		});

		it("should be Fizz", function() {
			expect(student.isFizz()).toBe(true);
		});

		it("should not be Buzz", function() {
			expect(student.isBuzz()).toBe(false);
		});

		it("should not be FizzBuzz", function() {
			expect(student.isFizzBuzz()).toBe(false);
		});

	});

	describe("when student number is divisible by 5", function(){
		beforeEach(function(){
			student = new Student(5);
		});

		it("should be Fizz", function() {
			expect(student.isFizz()).toBe(false);
		});

		it("should not be Buzz", function() {
			expect(student.isBuzz()).toBe(true);
		});

		it("should not be FizzBuzz", function() {
			expect(student.isFizzBuzz()).toBe(false);
		});
	});

	describe("when student number is divisible by 3 and 5", function(){
		beforeEach(function() {
			student = new Student(15);
		});

		it("should not be Fizz", function() {
			expect(student.isFizz()).toBe(false);
		});

		it("should not be Buzz", function() {
			expect(student.isBuzz()).toBe(false);
		});

		it("should be FizzBuzz", function() {
			expect(student.isFizzBuzz()).toBe(true);
		});
	});

	describe("when student number is not divisible by 3 or by 5", function(){
		beforeEach(function() {
			student = new Student(14);
		});

		it("should not be Fizz", function() {
			expect(student.isFizz()).toBe(false);
		});

		it("should not be Buzz", function() {
			expect(student.isBuzz()).toBe(false);
		});

		it("should be FizzBuzz", function() {
			expect(student.isFizzBuzz()).toBe(false);
		});
	});
});