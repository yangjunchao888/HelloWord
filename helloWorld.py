#!/usr/bin/env python
# coding=utf-8
#
# Copyright 2012 F2E.im
# Do have a faith in what you're doing.
# Make your life a story worth telling.

# cat /etc/mime.types
# application/octet-stream    crx


class People(object):
    def __init__(self, name, age, weight, height):
        self.name = name
        self.age = age
        self.weight = weight
        self.height = height

    def introduce(self):
        print("i'm{} age:{}".format(self.name, self.age))


class Student(People):
    def __init__(self, name, age, weight, height, school):
        People.__init__(self, name, age, weight, height)
        self.school = school

    def introduce(self):
        print("i'm a student in {}".format(self.school))

def main():
    me_people = People(name="yangjc", age=27, weight=70, height=165)
    me_people.introduce()

    me_student = Student(name=me_people.name, age=me_people.age, weight=me_people.weight, height=me_people.height, school="xxx high school")
    me_student.introduce()
    return


if __name__ == "__main__":
    main()
