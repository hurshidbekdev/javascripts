let c=4
let r=5
let q=5
let b=5
let d=5
let s=0
let n=8
let x_0=c
let x_1=d
let i=2
let x_i=0
do {
    i++;
     x_i=q*x_1+r*x_0+b
     x_0=x_1
     x_1=x_i
     console.log(x_i)
}
while(i<n)
