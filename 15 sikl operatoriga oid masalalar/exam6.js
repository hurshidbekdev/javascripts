let n=8
let temp=true
for (let i=2;i<n;i++){
    if (n%i==0){
        temp=false
    }
}
if (temp==true){
    console.log(true)
}
else{
    console.log(false)
}