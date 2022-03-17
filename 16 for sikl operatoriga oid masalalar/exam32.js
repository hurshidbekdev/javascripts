let a_0=1
let n=6
let a_i=0
for(let i=1; i<n; i++){
    a_0+=a_i
    a_i=(a_0+1)/i
    console.log(a_i)
}