let n=30
let s=0
for (let i=1;i<n;i++){
for (let j=0;j<i;j++){
if (i%j==0){
    s+=j
}
}
if (s==i){
    console.log(s)
    s=0
}
else{
    s=0
}
}
