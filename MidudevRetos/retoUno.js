export const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  const contarOvejas = (ovejas) => {
    /*let ovejasFull = [];
    ovejas.map(x => {
      if(x.color === 'rojo'){
        if(x.name.includes('a' || 'A') && x.name.includes('N' || 'n')){
          ovejasFull.push(x);
        }
      }
    })*/
    
    // return ovejasFull;
    //Código Mío, este de arriba
    
    // return ovejas.filter(x => {
    //   return x.color === 'rojo' && x.name.match(/a.*n|n.*a/ig);
    // }) Código sacado de discord

    return ovejas.filter(x => {
      return x.color === 'rojo' && x.name.includes('a' || 'A') && x.name.includes('N' || 'n')
    }) //Código Mío también
  }

  export const ovejasFiltradas = contarOvejas(ovejas);

  export default contarOvejas;