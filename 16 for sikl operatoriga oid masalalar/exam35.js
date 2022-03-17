let a_1=1
let a_2=2
let a_3=3
let a_i=0
let n=10
for (let i=4; i<n; i++){
    a_i+=a_1+a_2+a_3
    a_1=a_2
    a_2=a_3
    a_3=a_i
    console.log(a_i)
}