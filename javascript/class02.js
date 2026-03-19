// // arrray
// let number=[10,34,67,89,90];
// let names=["Emad","siam", "titas","Emon"]
// console.log(number[0]);
// console.log("list print of array")
// for ( let i=0; i<=number.length; i++)
// {
//     console.log(number[i]);
// }
// console.log("list print of array")

// // let i=0;
// // while(i<names.length){
// //     console.log(names[i]);
// //     i++;
// // }
// // add list using push fruits.push("Mango");    // শেষে যোগ
// //fruits.unshift("Orange"); // শুরুতে যোগ 
// names.push("monir");
// names.unshift("Emad pro")
// console.log("list print of array")

// let i1=0;
// while(i1<names.length){
//     console.log(names[i1]);
//     i1++;
// }

// // fruits.pop();    // শেষ থেকে remove
// // fruits.shift(); // শুরু থেকে remove
// names.pop();

// let i=0;
// while(i<names.length){
//     console.log(names[i]);
//     i++;
// }
// //modern way for loop
// console.log("modern way for loop ");
// number.forEach(function(m){

//     console.log(m);
// });

// console.log("most common use object in real life project");
// //
// let student={
//     name:"Emad",
//     age:22,
//     cgpa:3.36,
//     isstudent:true

// };
// console.log(student.name)
// console.log(student.cgpa);
// student.age=34;
// console.log(student.age);

// Array type object:
let students=[{name:"Emad",cgpa: 3.8},
    {name:"siam",cgpa:3.94},
    {name:"titas",cgpa:3.50}
];
//old verstion
for (let i=0; i<students.length; i++)
{
    console.log(students[i].name+" :" +students[i].cgpa);
}
// modern
students.forEach(function(m)
{
    console.log(m.name+" : "+m.cgpa);
})
//more modern
students.forEach(n=>{
    console.log(n.name+" : "+n.cgpa);
})
// more more mordarn
for (let student of students) {
    console.log(student.name + " : " + student.cgpa);
}
// condition
console.log("add condition");
students.forEach(s=>{
    if(s.cgpa>3.50)
    {
        console.log(s.name+":"+"A");
    }
    else {
    console.log(s.name + " = Pass");
  }
});
//html connection using list;
let names= ["Emad", "Rahim", "Karim"];
let u1=document.getElementById("list");
names.forEach(function(name){
    u1.innerHTML+="<li>"+name+"</li>";
});






