const Employee = require ('./employee');

function Engineer(name, id, email, github){
    //Bring in the employee construction function data
    Employee.call(this, name, id, email);
    //setting officeNumber data
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);
Engineer.prototype.getRole = function(){
    return 'Engineer';
}

module.exports = Engineer;