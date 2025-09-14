const User =  {
    username: 'hitesh',
    age : 22,

    getName : function() {
         console.log(`${this.username} and my age is ${this.age}`);

    }

}
User.username = 'raja'
User.age = 20
User.getName();