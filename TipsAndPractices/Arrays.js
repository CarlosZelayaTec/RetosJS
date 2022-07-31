const matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]];

// let ArrayIndexZero = [];
// let arraySum = [];
// let result;

//     matrix[0].forEach((element, i) => {
//         return element === 0 ? ArrayIndexZero.push(i) : arraySum.push(element);
//     })

//     for (let i = 1; i < matrix.length; i++) {
//         matrix[i].forEach((x, index) => {
//             return x === 0 ? ArrayIndexZero.push(index) : 0;
//         })
        
//         const dataArr = new Set(ArrayIndexZero);
//         result = [...dataArr];
//         result.sort((a, b) => a - b);

//         matrix[i].forEach((element, index) => {
//             if(element !== 0){
//                 return true === result.includes(index) ? 0 : arraySum.push(element);
//             }
//         })

//     }


//     const total = arraySum.reduce((acc, element) => {
//         return acc + element
//     })

//     // console.log(ArrayIndexZero);
//     console.log(result);
//     console.log(arraySum);
//     console.log(total);

    // for (let i = 0; i < matrix.length; i++) {
    //     if(i === 0){
            
    //     }else{

    //     matrix[i].forEach((element, index) => {
    //         if (element !== 0) {

    //             firstArrayIndexZero.forEach((x) => {
    //                 return index === x ? 0 : arraySum.push(element)
    //             })
   
    //         }
            
    //         return index === firstArrayIndexZero[index] ? 0 : firstArrayIndexZero.push(index)
    //     })
    //     // firstArrayIndexZero.sort((a,b) => a + b);
    // }}

    for(var r=0, j=0; j < matrix[0].length; j++){

        for(var i = 0; i < matrix.length; i++){

          if (matrix[i][j] === 0) break
          else r += matrix[i][j]

        }

    }

    console.log(r);
