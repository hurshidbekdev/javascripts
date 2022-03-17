let x_i=0
let x_0=1
let x_1=1
let n=8
let i=2
do {
    i++;
    x_i=x_0*x_1
    x_0=x_1
    x_1=x_i
    console.log(x_i)
}
while(i<n)