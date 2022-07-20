console.log("Reto Dos - Máquina expendedora\n");

const coins = [5, 10, 50, 100, 200];
const products = {
    1: ["Agua", 10],
    2: ["Soda", 45],
    3: ["Gatorade", 100],
    4: ["Chocolate", 15],
    5: ["Snacks", 20],
    6: ["Pizza", 200],
    7: ["Libro", 400],
}

function Buy(money, id) {
    //Esta variable maneja el estado de las monedas.
   const yesOrNot = SearchArray(money, coins);

   if (yesOrNot === true) {
        //Tu código aquí
        let total = money.reduce((acc, ele) => acc + ele); //Suma total de monedas
        
        if(id <= 0 || id > Object.keys(products).length) return `El código del producto no existe, intente de nuevo.\nRetornando monedas [${money}]`;
        else if(total < products[id][1]) return `Dinero insuficiente, retornando monedas... [${money }]`;
    
            //Sobrante
        let arraySpare = []; 
        let spare = total - products[id][1];
        let i = coins.length - 1;

            //Si en el sobrante hay alguna moneda de 5 la elimina.
        if(spare % 2 !== 0) {
            spare = spare - coins[0];
            arraySpare.push(coins[0]);
        }

            //Agrega las monedas sobrantes al array.
        while(spare !== 0){
            if(spare >= coins[i]){
                arraySpare.push(coins[i]);
                spare = spare - coins[i];
            }else i--
        }

        return `${products[id][0]}\nPrecio: $${products[id][1]}\nMonedas ingresadas: [${money}]\nSobrante: [${arraySpare.sort((a, b) => a - b)}]`;
        // return h

   }

   return "Una(o más) de las monedas que usted ingresó es incorrecta.";

}

    //Ingrese su pedido aquí
console.log(Buy([50], 5));


/** 
    Funcion que nos servirá para poder saber si los valores ingresados por el usuario
    en este caso las monedas ingresadas por el usuario están dentro del rango estipulado.

    **La función recibe dos argumentos, uno con el array de las monedas permitidas y otro con 
    **el array de las monedas que ingreso el usuario.
**/
function SearchArray(array1, array2) {

    let controller = 0;

    array1.forEach(element => {
        array2.forEach((x) => {
            if (element === x) {
                return controller++;
            }
        })
    });
    
    if (controller === array1.length){
        return true
    } else return false;
}
