export default function(a,b,c) {
//This calculation is roughly accurate to months,as you can see...
var d = "";

  if(b<0) {
  	a=a-1,
  	b=12-Math.abs(b)
  }
  if(c>0) {
  	b=b+1
  }
  if(b===12) {
    b=0,
    a=a+1
  }
  if (b===0 && c===0) {
    d=": Hey, Happy Birthday!!!  Thank you for your tremendous contribution to humanity."
  } else {
  	d="."
  }
  return (
    [a,b,d]
  );
};