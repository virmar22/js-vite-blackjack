 // turno de la computadora
import { pedirCarta, valorCarta, crearCartaHTML} from "./";

/**
 * 
 * @param {Number} puntosMinimos 
 * @param {HTMLElement>} puntosHTML
 * @param {Array<String>} deck
 * @param {divCartasComputadora>} puntosHTML
 */
 export const turnoComputadora = ( puntosMinimos,puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos) throw new Error ('Puntos mínimos son necesarios');
    if( !puntosHTML) throw new Error ('Argumento puntoHTML son necesarios');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta ( carta );               
        puntosHTML.innerText = puntosComputadora;
        
        //TODO: crear carta
        const imgCarta = crearCartaHTML( carta);
        
        divCartasComputadora.append(imgCarta);

        if( puntosMinimos > 21){
          break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
    setTimeout(() => {
      if ( puntosComputadora === puntosMinimos){
        alert('Nadie gana: (');
      }else if(puntosMinimos > 21){
        alert('Computadora gana');
      }else if(puntosComputadora > 21){
        alert('Jugador gana');
      }else{
        alert('Computadora gana')
      }
    },100);
}
