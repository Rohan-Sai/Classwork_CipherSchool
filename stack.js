class Stack{
    constructor(){
        this.items = [];
      //  this.top = 0;
    }
    push(element){  
    this.items.push(element); 
    }
    pop(){  
    if (this.items.length == 0) 
        return "Underflow"; 
    return this.items.pop(); 
    } 
}