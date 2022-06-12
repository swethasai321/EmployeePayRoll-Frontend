export class EmployeeModel {
    firstName : String;
    lastName : String;
    Gender: String;
    department :String;
    salary : Number;
    notes : String;
    profilepic : String;
    date!: Date;
    Date: String;

    constructor(
        firstName: String,
        lastName: String,
        Gender : String,
        Department : String,
        salary : number,
        notes:String,
        profiepic : String,
        date:String
    )
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.Gender=Gender;
        this.department=Department;
        this.salary=salary;
        this.notes=notes;
        this.profilepic=profiepic;
        this.Date=date;

    }
    
}