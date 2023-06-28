/**
 * 
 * @param {Array<String>} deck es un array de String
 * @returns  {String} return la carta del deck
 */
export const pedirCarta = ( deck ) => {

    if (!deck || deck.length === 0 ) {
        throw new Error ('No hay cartas en el deck');
    }
    const carta = deck.pop();
    return carta;
}