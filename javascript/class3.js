// Arrow Function

// map()

// filter()

// reduce()

// Proper Event Handling

// Real Mini Project Logic

//normal function
// function add(a, b) {
//   return a + b;
// }

//Arrow Function and Arrow Version

 const add = (a, b) => a + b;

 console.log(add(5, 3)); // 8

 const square=x=>x*x;
 console.log(square(5));
//map \
let numbers=[1 , 2, 3, 4];
let double=numbers.map(n=>n*2);
console.log(double)
double.forEach(f=>{
  console.log(f);
})

// update value using map 
let students=[{ name: "Emad", cgpa: 3.5 },
  { name: "Rahim", cgpa: 3.0 }];
  let updated=students.map(s=>{
    return{
      name:s.name,
      cgpa:s.cgpa+0.1
    };
  }
  );
  console.log(updated)

  //filter() – Condition
  let marks=[40,60,80,30];
  let pass=marks.filter(m=>m>=50);
  console.log(pass)

  // real life example
  let student=[{ name: "Emad", cgpa: 3.8 },
  { name: "Rahim", cgpa: 3.1 },
  { name: "Karim", cgpa: 2.9 }];
  let topp=student.filter(s=>s.cgpa>=3.0)
  console.log(topp);


  //reduce() Calculation করার জন্য, reduce মানে: সবকিছু মিলিয়ে ১টা result
  let num=[10,20,30];
  let total=num.reduce((sum,n)=>sum+n,0);
  console.log(total);
  // real life example

let student2 = [
  { name: "Emad", cgpa: 3.5 },
  { name: "Rahim", cgpa: 3.0 }
];
console.log("use reduce function");
let totalcgpa=student2.reduce((sum,s)=>sum+s.cgpa,0);
console.log(totalcgpa);
// use html and javascript function
//  document.getElementById("btn").addEventListener("click",()=>{
//   document.getElementById("part").innerHTML="good partice";
//  });
 //a
 document.getElementById("btnn").addEventListener("click",()=>{
  let m=Number(document.getElementById("marks").value);
if (m >= 80) {
    document.getElementById("result").innerText = "A+";
  } else if (m >= 60) {
    document.getElementById("result").innerText = "Pass";
  } else {
    document.getElementById("result").innerText = "Fail";
  }
 });

