//Array.prototype.lipton = "green icetea";

function init(){

    var user = {
        firstName: "Henk",
        lastName: "Brouwer",
        age: 48,
        getName: function(){return this.firstName+" "+this.lastName}
    };
    
    console.log(user.getName());

    var users = ["quenten","joel","henk","zalig"];
    

    Array.prototype.removeAll = function(){
        this.splice(0,this.length);
    }
    
    Object.prototype.createUser = function(){
        var user = {
            
        }
    }
    
    
    users.removeAll();
    console.log(users.length);
    

}

init();