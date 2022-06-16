export class EmployeeModel {
    
    fullName : String;
    gender: String;
    department :String;
    salary : Number;
    notes : String;
    profilePic : String;
    startDate: Date;
    
    constructor(
       fullName: String,
        gender : String,
        department : String,
        salary : number,
        notes: String,
        profiePic : String,
        startDate: Date
    )
    {
        this.fullName=fullName;
        this.gender=gender;
        this.department=department;
        this.salary=salary;
        this.notes=notes;
        this.profilePic=profiePic;
        this.startDate=startDate;

    }
    
}