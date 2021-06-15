
//Constructor function for employee
function Employee(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

//Employee prototypes
Employee.prototype.getName = function(){
    return this.name;
}
Employee.prototype.getId = function(){
    return this.id;
}
Employee.prototype.getEmail = function(){
    return this.email;
}
Employee.prototype.getRole = function(){
    return 'Employee'
}
Employee.prototype.specialQuestion = function(){
    return `employee `
}

module.exports = Employee;