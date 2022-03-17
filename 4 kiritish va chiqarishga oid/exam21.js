let x1=6
let x2=4
let x3=9
let y1=8
let y2=3
let y3=7
let a=(Math.sqrt((x1-y1)**2))
let b=(Math.sqrt((x2-y2)**2))
let c=(Math.sqrt((x3-y3)**2))
let p=2*(a+b+c)
let s=Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log(s,p)