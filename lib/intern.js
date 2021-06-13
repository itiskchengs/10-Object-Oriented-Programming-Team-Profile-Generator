const Employee = require ('./employee');

function Intern(name, id, email, school){
    //Bring in the employee construction function data
    Employee.call(this, name, id, email);
    //setting officeNumber data
    this.school = school;
}

Intern.prototype = Object.create(Employee.prototype);
Intern.prototype.getRole = function(){
    return 'Intern';
}

module.exports = Intern;