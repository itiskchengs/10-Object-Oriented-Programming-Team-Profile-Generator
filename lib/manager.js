const Employee = require ('./employee');

function Manager(name, id, email, officeNumber){
    //Bring in the employee construction function data
    Employee.call(this, name, id, email);
    //setting officeNumber data
    this.officeNumber = officeNumber;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.getRole = function(){
    return 'Manager';
}
Manager.prototype.specialQuestion = function(){
    return `Office Number: ${this.officeNumber}`;
}

module.exports = Manager;