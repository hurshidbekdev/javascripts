let n=30
for (let a=1; a<n; a++){
    for (let b=1; b<n; b++){
        for (let c=1; c<n; c++){
            if (c**2==a**2+b**2){
                console.log(`${a},${b},${c}`)
            }

        }
    }
}