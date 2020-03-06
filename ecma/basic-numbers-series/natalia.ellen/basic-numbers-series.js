let result = "";
let result2= "";
let result3= "";

for (let flag = 0; flag < 100; flag ++) {
    if (flag < 10){
     result += "0" + flag;
    }
    else{
     result += flag
    }
    if (flag % 10 === 9){
     result += "\n";
    }
     else{
    result += " ";
    }  

}

console.log(result);

for (let flag = 99; flag >- 1; flag --){
    if(flag < 10){
        result2 += "0" + flag;
    }
    else{
        result2 += flag;
    }
    if (flag % 10 === 0){
        result2 += "\n";
    }
    else{
        result2 += " ";
    }
}

console.log(result2);


for (let flag = 99; flag >= 1; flag-=2){
    if(flag < 10){
        result3 += "0" + flag;
    }
    else{
        result3 += flag;
    }
    if (flag % 10 === 1){
        result3 = "\n"
    }
    else {
        result3 += " ";
    }
}
console.log(result3)
