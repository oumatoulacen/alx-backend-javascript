"use strict";
exports.__esModule = true;
exports.StudentClass = exports.printTeacher = void 0;
;
;
// define the function printTeacher
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
exports.printTeacher = printTeacher;
// define class StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstname, lastname) {
        this._firstName = firstname;
        this._lastName = lastname;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this._firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
