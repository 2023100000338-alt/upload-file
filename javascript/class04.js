//Synchronous (লাইন ধরে চলে)
console.log("1");
console.log("2");
console.log("3");


console.log("1");

setTimeout(() => {
  console.log("2");
}, 2000);

console.log("3");
// another example
console.log("Start");
setTimeout(()=>{
  console.log("Loding done ");
},3000);
console.log("end");

//setInterval — Repeat Task প্রতি ১ সেকেন্ডে চলবে
setInterval(()=>{
  console.log("running....");
},1000);

///