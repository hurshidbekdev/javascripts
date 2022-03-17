let n=2000
if (n%400==0){
    console.log(true)
}
else if (n%4==0){
     if (n%100!=0){
         console.log(true)
     }
     else{
         console.log(false)
     }
}
else{
    console.log(false)
}