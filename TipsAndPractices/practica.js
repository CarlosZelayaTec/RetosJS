
    //Palindromo
// const texto = "aabbaa";
// const h = texto.split("")
// const j = h.reverse();
// const p = h.join("");

// const result = p === texto ? true : false

// console.log(result);

    //Mayor numero de un array

const inputArray = [5, 1, 2, 3, 1, 4];

// const mayor = Math.max(...array);

// console.log(mayor);

let arrayResults = []
/**
 **Revisar este código porque no funciona como debería
 */
        // inputArray.reduce((acc, element) => {
        //     let result = acc * element;
        //     console.log(acc, element);
        //     return arrayResults.push(result);
        // })

        for (let i = 0; i < inputArray.length - 1; i++) {
            let result = inputArray[i] * inputArray[i+1];
            arrayResults.push(result);
        }

        
        console.log(arrayResults);
    const mayor = Math.max(...arrayResults);
    console.log(mayor);   

    
