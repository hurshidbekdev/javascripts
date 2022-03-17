let v_1=0
let v_2=0
let v_i=0
let i=4
let v_3=1.5
let n=10
do {
    i++;
    v_i=((i+1)/(i**2+1))*v_2-v_1*v_3
    v_1=v_2
    v_2=v_3
    v_3=v_i
    console.log(v_i) 
}
while (i<n) 
    
