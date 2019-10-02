module.exports = function zeros(expression) {
  let intStr;
let zeroCount=0;
let num='';
let factFlag=0;




for(let i=0; i<intStr;i++){
  if(intStr.charCodeAt(i)>=48&&intStr.charCodeAt(i)<=57){
    num=num+intStr[i];
    }
  else if(intStr[i]=='!'){
    factFlag++;
    }
  
  if(instStr[i+1]=="*"||!instStr[i+1]){
    zeroCount+=getZerosCount(num,factFlag);
    
    }
  
  }





function getZerosCount(number,flag) {
  
  let base=10
  var primeNumbers;
  
  if(flag==2){
  primeNumbers=[10];
  }else{primeNumbers=[5];}
  
  
  
  var degrees=[];
  var primeFactors=[];
  var indexOfPrimeFactors=0;
  for(var i = 0; i<=primeNumbers.length; i++)
  {
    var degree=0
    while((base/primeNumbers[i]^0)===(base/primeNumbers[i]))
    {
      base=base/primeNumbers[i];
      degree++;
    }
    if(degree>0)
    {  
      primeFactors[indexOfPrimeFactors]=primeNumbers[i];
      degrees[indexOfPrimeFactors]=degree;
      indexOfPrimeFactors++;
    }
  }
  var preTotal;
  var arrOfSumms=[];
  var totalSum=0;
  
  
  for(i=0; i<degrees.length; i++){
  preTotal=0;
  for(j=1; number/Math.pow(primeFactors[i], j)>=1 ; j++){
    preTotal=preTotal+Math.floor(number/Math.pow(primeFactors[i], j));
  }
  totalSum=Math.floor(preTotal/degrees[i])
  arrOfSumms[i]=totalSum;
  }
  
  var total=Math.min.apply(null, arrOfSumms)
  return total; 
}



}
