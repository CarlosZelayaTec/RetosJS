console.log("Reto Uno");

function OrderNumber(numbers, order) {
    if (order === "Asc") {
        return numbers.sort((a, b) => a - b);
    } else if(order === "Desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        return "Comando de ordenamiento no reconocido";
    }
} //CarlosZelaya@Dev

console.log(OrderNumber([5, 1, 9, 10, 90, 2, 40, 4], "Asc"));