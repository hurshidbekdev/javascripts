let n=8
let x=3
let s=0
for (let i=1; i<n; i+=2){
    s=(-1)**(i-1)*x**i/i
    console.log(s)
}