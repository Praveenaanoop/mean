
var a=8;
var b=3;
var c=2;
largest(a,b,c);
function largest(a,b,c)
{
if(a>b)
{
if(a>c)
{
  console.log(a);
}
else{
   console.log(c);
}
}
else 
{
if(b>c)
{
   console.log(b);
}

else
{
 console.log(c);
}
}
}
