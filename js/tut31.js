console.log("ES6 Classes and Inheritance");

class Employee {
  constructor(giveNname, givenExperience, givenDivision) {
    this.name = giveNname;
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan(){
      return `I am ${this.name} and the company is good`
  }
  joiningYear(){
      return 2022-this.experience;
  }
  static add(a,b){
      return a+b;
  }
}
Aman=new Employee("Aman Yadav",12,"Software Development");
console.log(Aman);
console.log(Aman.slogan());
console.log(Aman.joiningYear());
console.log(Employee.add(12,10));

// using inheritance from class Employee

class Programmer extends Employee {
    constructor(giveNname, givenExperience, givenDivision,Language,Github){
        super(giveNname, givenExperience, givenDivision);
        this.language=Language;
        this.github=Github;

    }
     favoriteLanguage(){
        if(this.language=='python'){
            return 'python';
        }
        else{
            return 'Java Script';
        }
        
    }
    static multiply(a,b){
        return a*b;
    }
  }
  Amit=new Programmer("Amit Yadav",36,"Backend Developer","python","Aman21591");
  console.log(Amit);
  console.log(Programmer.multiply(12,2));
  console.log(Amit.favoriteLanguage());
  

