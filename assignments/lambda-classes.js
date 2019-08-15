// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}.`;
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listsSubjects() {
    let str = "";

    this.favSubjects.forEach((favSubject, index, array) => {
      if (index !== array.length - 1) {
        str += `${favSubject}, `;
      } else {
        str += `${favSubject}`;
      }
    });

    return str;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}.`;
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to #${channel}, @channel stand up times!`;
  }

  debugsCode(student, subject) {
    return `${this.name} debugs ${student.name}'s code on ${subject}.`;
  }
}

const adam = new Instructor({
  name: "Adam",
  age: 37,
  location: "New York",
  specialty: "Front-End",
  favLanguage: "CSS",
  catchPhrase: "Let's get ready to rumble!"
});

console.log(adam.name);

console.log(adam.catchPhrase);

console.log(adam.speak());

console.log(adam.demo("HTML"));

const carlos = new Student({
  name: "Carlos",
  age: 28,
  location: "Chicago",
  previousBackground: "Marketer",
  className: "WEB PT 9",
  favSubjects: ["React, HTML, GraphQL"]
});

console.log(carlos.name);

console.log(carlos.previousBackground);

console.log(carlos.listsSubjects());

console.log(carlos.PRAssignment("React"));

const bob = new Instructor({
  name: "Bob",
  age: 33,
  location: "San Francisco",
  specialty: "React",
  favLanguage: "JavaScript",
  catchPhrase: "Boom Shakalah!"
});

console.log(bob.grade(carlos, "React"));

const david = new Student({
  name: "David",
  age: 22,
  location: "Seattle",
  previousBackground: "Teacher",
  className: "WEB PT 9",
  favSubjects: ["CSS, JavaScript, React"]
});

console.log(david.sprintChallenge("CSS"));

const edgar = new ProjectManager({
  name: "Edgar",
  age: 44,
  location: "Houston",
  specialty: "Back-End",
  favLanguage: "PHP",
  catchPhrase: "That's straight fire!",
  gradClassName: "WEB PT 9",
  favInstructor: "Bob"
});

console.log(edgar.age);

console.log(edgar.favLanguage);

console.log(edgar.favInstructor);

console.log(edgar.grade(david, "PHP"));

console.log(edgar.standUp("webpt9"));

const frank = new ProjectManager({
  name: "Frank",
  age: 52,
  location: "Los Angeles",
  specialty: "Back-End",
  favLanguage: "GraphQL",
  catchPhrase: "No pain, no gain!",
  gradClassName: "WEB PT 9",
  favInstructor: "Bob"
});

console.log(frank.debugsCode(adam, "GraphQL"));
