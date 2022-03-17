let a_1=1
let a_2=2
let a_i=0
let n=10
for (let i=3; i<n; i++){
    a_i+=(a_1+2*a_2)/3
    a_1=a_2
    a_2=a_i
    console.log(a_i)
}