function Classroom(size) {
	if (size === null) {
		size = 0;
	}
	this.students = new Array();
	for (var i = 0; i < size; i++) {
		this.students[i] = new Student(i);
	}
}

Classroom.prototype.sayNumber = function(number) {
	if (this.students[number].isFizz()) {
		return 'Fizz';
	} else if (this.students[number].isBuzz()){
		return 'Buzz';
	} else if(this.students[number].isFizzBuzz()) {
		return 'FizzBuzz'
	} else {
		return number;
	}
};
;function Student(number){
	this.number = number;
}

Student.prototype.isFizz = function() {
	return this.number % 3 == 0 && this.number % 5 != 0;
};

Student.prototype.isBuzz = function() {
	return this.number % 5 == 0 && this.number % 3 != 0;
};

Student.prototype.isFizzBuzz = function() {
	return this.number % 5 == 0 && this.number % 3 == 0;
};
