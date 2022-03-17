let n=5
let s=0
let p=1
let x=2
for (let i=1; i<n; i++){
    p*=i
    s+=(-1)**i*(x**2*i+1)
    console.log(s)
}