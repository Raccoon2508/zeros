module.exports = function zeros(expression){


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
    
    let total=zerosAloneFact(number,factFlag);
    totalCounterTwoFive[0]+=total[0];
    totalCounterTwoFive[1]+=total[1];
    factFlag=0;
    number='';
    
    }
}

function zerosAloneFact(number,factFlag){
  let counter=[0,0]
  counter[0]+=intakes(number,2,factFlag);
  counter[1]+=intakes(number,5,factFlag);
  
  
  
function intakes(number,intake,factFlag){

let count=0;

for(let i=number;i>0;i=i-factFlag){
 
  if((i/intake^0)===i/intake){
    let num=i;
   
    do{
      num=num/intake;
      count++;
    }while((num/intake^0)==num/intake)
    
}}
return count;
}  
    
return counter; 
}

console.log(totalCounterTwoFive);

if(totalCounterTwoFive[0]<totalCounterTwoFive[1]){
return totalCounterTwoFive[0];
}else{
return totalCounterTwoFive[1];
}
}


