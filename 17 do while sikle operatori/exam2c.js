let x=4
let n=8
let s=0
for(let i=1; i<n; i++){
    s=(x+Math.cos(i*x))/2**i
    console.log(s)
}