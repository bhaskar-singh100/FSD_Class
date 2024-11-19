const promise1=new Promise((resolve,reject) => {
  let a=12;
  if(a>12){
    resolve({Name:"Rahul",branch:"AIML"})
  }
  else{
    reject("rejected");
  }
});

promise1.then((msg) => console.log(msg.Name)).catch(error => {console.log(error)});