interface IPeople { 
   name: string
   introduce():void
} 

class People implements IPeople { 
    name: string; 
    age: number;
	weight: number;
	height: number;
    // 构造函数 
    constructor(name: string, age: number, weight: number, height: number) { 
        this.name = name
		this.age = age
		this.weight = weight
		this.height = height
    }  
 
    // 方法 
    introduce() :void { 
        console.log("i'm "+this.name + " age: " + this.age) 
    } 
}

class Student extends People { 
    name: string
	age: number
	weight: number
	height: number
	school: string
    constructor(name: string, school: string) {
		super(name, 0, 0, 0)
		this.school = school
    }
   introduce():void { 
      console.log("i'm :  "+this.name + " in school: ", this.school) 
   } 
}

let me_people = new People("yangjc", 27, 70, 165)
me_people.introduce()

let me_student = new Student(me_people.name, "xxx high school")
me_student.introduce()