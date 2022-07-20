const carta = 'bici coche balón _playstation bici coche peluche'

function listGifts(letter) {
    // ¡Tú puedes!

    // const objectLetter = {}
    let filteredList = letter.split(" ")
    // filteredList

    // filteredList.forEach(present => objectLetter[present] = 0)
    // filteredList.forEach(present => objectLetter[present]++)

    return filteredList.indexOf('_playstation');

}

console.log(listGifts(carta))