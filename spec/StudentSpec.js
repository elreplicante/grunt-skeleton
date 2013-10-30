describe("Student", function(){
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