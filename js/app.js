let user={
    id:12, name:'ali',age:21,fname:'pirasbaghi',fullName:function(){
        return `Hello ${this.name} ${this.fname} `
    }
}
let user1={
    id:11,name:'hossein',fname:'bagheri',age:22,hello(){
      return  console.log(this)
    }
}
function sayHello(type) {
    alert(`Hello ${this.name}! You're ${type}!`);
  }
  
  const mario = { name: "Mario" }
  
  const hiMarioAwesome = sayHello.bind(mario);
  
   hiMarioAwesome("Funny");
  