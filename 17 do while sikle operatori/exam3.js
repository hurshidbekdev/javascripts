let a_0=1
let a_i=0
let i = 1
let n = 10
do {
    i++;
    a_i = i * a_0 + 1 / i
    a_0 = a_i
    console.log(a_i)
}
while(i < n)
