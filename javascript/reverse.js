var a=501;
var rev=0;
var rem=0;
while(a>1)
{
var rem=a%10;
rev=rev*10+rem;
a=parseInt(a/10);

}
console.log(rev);