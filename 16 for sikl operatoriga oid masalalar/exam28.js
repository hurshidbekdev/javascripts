let n=8
let x=3
let s=0
let p=1
for (let i=1; i<n; i+=2){
    p*=i
    s=p*(2*i-1)*x**(2*i+1)/(p+1)*2*i*(2*i+1)
    console.log(s)
}