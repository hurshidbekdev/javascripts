let f_1=1
let f_2=1
let n=10
let f_i=0
for(let i=3; i<n; i++){
    f_i+=f_1+f_2
    f_1=f_2
    f_2=f_i
    console.log(f_i)
}