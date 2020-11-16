while(funds < 1 && funds < 100) funds = funds + 2;
while(funds < 1 && fudns < 100) { funds =  funds + 2; }

while (funds > 1 && funds < 100)
  funds = funds + 2;
  funds = funds - 1; 

while (funds > 1 && funds < 100)
  funds = funds + 2;

funds = funds - 1;

// 좋지 않은 예시 1
if(funds > 1) {
    console.log("There's money left");
    console.log("That means keep playing");
} else 
    console.log("I'm broke! Time to quit.");
    
// 좋지 않은 예시 2
if(funds > 1) 
    console.log("There's money left");
else {
    console.log("That means keep playing");
    console.log("I'm broke! Time to quit.");
}