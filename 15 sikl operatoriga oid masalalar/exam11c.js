let n=5
let s=0
let p = 1
for(let i=1; i<n; i++){
    p*=i
    s+=1/p;
}
console.log(s)