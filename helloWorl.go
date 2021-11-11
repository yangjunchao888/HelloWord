package main

import (
	"fmt"
)

type People struct {
	Name string `json:"name"`
	Age int `json:"age"`
	Weight int `json:"weight"`
	Height int `json:"height"`
}

type Student struct {
	People
	School string `json:"school"`
}

func (p *People) introduce() {
	fmt.Printf("name: %s, age: %d hello world\n", p.Name, p.Age)
}

func (s *Student) introduce() {
	fmt.Printf("i'm %s in school: %s hello world\n", s.Name, s.School)
}

func main() {
	mePeople := People{
		Name: "yangjc",
		Age: 27,
		Weight: 70,
		Height: 166,
	}
	mePeople.introduce()

	meStudent := Student{
		People: mePeople,
		School: "xxx high school",
	}
	meStudent.introduce()
}
