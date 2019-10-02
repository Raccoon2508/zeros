module.exports = function function zeros(expression){


let intStr=expression;
let totalCounterTwoFive=[0,0];
let number='';
let factFlag=0;

for(let i=0; i<intStr.length;i++){
  if(intStr.charCodeAt(i)>=48&&intStr.charCodeAt(i)<=57){
    number=number+intStr[i];
  
    }else if(intStr[i]=='!'){
    factFlag++;
    }
  
  if(intStr[i+1]=="*"||!intStr[i+1]){
    
    let total=getZerosCount(number,factFlag);
  
   
    totalCounterTwoFive[0]+=total[0];
    totalCounterTwoFive[1]+=total[1];
    console.log(totalCounterTwoFive)
    factFlag=0;
    number='';
    
    }
}

function getZerosCount(number,factFlag){ 

let prime;
let counter=[0,0];
let intakes;

if(number%2==0&&factFlag==2){
  counter[0]=inputs(number,2);
    counter[1]=inputs(number,5);
}else{counter[1]=inputs(number,5);}



function inputs(number,input){
    
    let intakes=1;
    let counter=0;
    while(intakes!=0){
  intakes=Math.floor(number/input);
  input*=input;
  counter+=intakes;
  }
  return counter;
  }    

return counter;
}



if(totalCounterTwoFive[0]<=totalCounterTwoFive[1]){
  return totalCounterTwoFive[0];
  }else{
  return totalCounterTwoFive[1];  
  }
}


zeros('9!!*10!!*7!!')

