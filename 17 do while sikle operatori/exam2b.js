let x=4
let n=8
let s=0
let p=1
for(let i=1; i<n; i++){
    p*=i
    s=(1/i*p+Math.sqrt(Math.abs(x)))
    console.log(s)
}