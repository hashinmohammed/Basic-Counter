export class Counter {
  constructor(add, sub,text) {
    this.add = add;
    this.sub= sub;
    this.hello(text)
  }
  hello(text){
    let number=0;
    this.add.addEventListener('click',function(){
      // let text=document.querynSelector(".counterHeader");
      number++
      if(number>=0){
        console.log(number)
       text.innerText=number
  
      }
  
    })
  
    this.sub.addEventListener('click',function(){
      if (number>0) {
        number--    
      }
     
      if(number>=0){
     // let text=document.querySelector(".counterHeader");
          console.log(number)
      text.innerText=number
      
  
  
      }
      
    })
    
    
  }
  
  
}



















