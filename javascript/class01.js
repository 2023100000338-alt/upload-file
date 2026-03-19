//print input
let num=25;
console.log(num);
//connection html with fucntion button click
function demo()
{
    document.getElementById("getting").innerHTML="good partice"
}
// take input then chek marks;
let marks=Number(prompt('Enter Number'));
if(marks>=80)
{
    console.log("A+");
}
else if(marks>=60)
{
    console.log("pass");
}
else 
{
    console.log("fail");
}
//for and while loop 
console.log("print 0 to 5");
for ( let i=0; i<=5; i++)
{
    console.log(i);
}

// while
console.log("print 0 to 5");
let i=0; 
while(i<=5)
{
    console.log(i);
    i++;
}
//function 
console.log("sum two number using function");
function add(a, b)
{
    return a+b;
}
let result=add(4, 5);
console.log(result);

//