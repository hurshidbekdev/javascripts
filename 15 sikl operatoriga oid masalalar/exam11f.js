let n=5
let p=1
let s=1
for ( let i=1; i<n; i++){
    s*=i
    p*=(1+1/s*i)**2
}
console.log(p)