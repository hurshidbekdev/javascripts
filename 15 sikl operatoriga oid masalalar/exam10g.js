let n=6
let s=0
for (let i=0; i<n; i++){
    s=(Math.cos(i)+Math.cos(i+1))/(Math.sin(i)+Math.sin(i+1))
    console.log(s)
}