let n=1
let s=1

for (let i=0; i<n; i+=0.1 ){
    s*=(1+Math.sin(i))
}
console.log(s)