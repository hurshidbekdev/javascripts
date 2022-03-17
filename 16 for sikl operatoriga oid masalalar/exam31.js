let a_0=2
let n=6
let a_i=0
for(let i=0; i<n; i++){
    a_0+=a_i
    a_i=2+1/a_0
    console.log(a_i)
}