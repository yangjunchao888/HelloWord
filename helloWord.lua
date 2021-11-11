People = {name = "", age = 0, weight = 0, high = 0}

function People:new(o,name,age,weight,height)
  o = o or {}
  setmetatable(o, self)
  self.__index = self
  self.name = name;
  self.age = age;
  self.weight = weight;
  self.height = height;
  return o
end

function People:introduce ()
  print(string.format("my name: %s, my age: %d hello world", self.name, self.age))
end

mePeople = People:new(nil, "yangjc", 27, 70, 166)
mePeople:introduce()

Student = People:new()
function Student:new(o, school)
  o = o or {}
  setmetatable(o, self)
  self.__index = self
  self.school = school
  return o
end

function Student:introduce()
  print(string.format("i'm a student in: %s, hello world", self.school))
end

MeStudent = Student:new(mePeople, "xxx high school")
MeStudent:introduce()
