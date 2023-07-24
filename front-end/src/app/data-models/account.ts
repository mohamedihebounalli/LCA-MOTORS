export class Account {
  public id?: number;
  public firstName: string;
  public lastName: string;
  public dateOfBirth: string;
  public phoneNum : string;
  public email: string;
  public password: string;
  public role: string;

  constructor( firstName: string,   lastName: string, dateOfBirth: string, phoneNumber: string, email: string, password: string, role: string) {
 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.phoneNum = phoneNumber;
    this.email = email;
    this.password = password;
    this.role = "CUSTOMER";
  }
}
