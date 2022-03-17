let n=10
let p=1
let s=1
let x=4
for (let i=1; i<n; i++){
    p*=i
    s*=(1+Math.sin(i*x)/i*p)
    console.log(s)
}