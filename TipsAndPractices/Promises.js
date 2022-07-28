function Saludar(){
    console.log("Hola yo voy primero");
}

const segundaFuncionAsincrona = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Yo estoy definida de segundo pero me ejecuto cuando estoy lista.")
    }, 3000);

    setTimeout(() => {
        reject((new Error("Yo soy el error")));
    }, 4000);
});

async function terceraFuncionAsincrona(){
    setTimeout(() => {
         console.log("Yo estoy definda de tercero pero me ejecuto por último");
    }, 8000);
}


function Adios(){
    console.log("Adiós, ya me voy");
}

Saludar();

segundaFuncionAsincrona
    .then((x) => {
        console.log(x);
        console.log(typeof segundaFuncionAsincrona)
    })
    .catch((err) => {
        console.log(err);
    })

terceraFuncionAsincrona();

Adios();