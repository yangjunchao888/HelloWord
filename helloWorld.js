var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    // 构造函数 
    function People(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }
    // 方法 
    People.prototype.introduce = function () {
        console.log("i'm " + this.name + " age: " + this.age);
    };
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, school) {
        var _this = _super.call(this, name, 0, 0, 0) || this;
        _this.school = school;
        return _this;
    }
    Student.prototype.introduce = function () {
        console.log("i'm :  " + this.name + " in school: ", this.school);
    };
    return Student;
}(People));
var me_people = new People("yangjc", 27, 70, 165);
me_people.introduce();
var me_student = new Student(me_people.name, "xxx high school");
me_student.introduce();
