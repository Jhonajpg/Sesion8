/*

function procesar(){

    let resultado = '';

    do {

        let cadena = prompt('Ingresar Datos!');
        
        if (resultado == '') {

            resultado = resultado + cadena;            
        } else {
            resultado = resultado + ' - ' + cadena;
            
        }
        
    } while (confirm('Desea continua?'));

    document.getElementById('resultado').innerHTML = resultado;
} */
function ejecutar() {

     let resultado = [];

     do {

        let cadena = prompt('Ingrese datos!');

        if (cadena == '') {

            const msg ='no hay datos!';

            document.getElementById('result').innerHTML = msg;
            
        } else {
            
            resultado.push(cadena);
        }
        
     } while (confirm('Desea continuar?'));
     
     let list = document.getElementById('result');

     let fraglista = document.createDocumentFragment();
     
     for ( let i = 0; i < resultado.length; i++){

        let li = document.createElement('li');

        li.textContent = resultado[i];        
        fraglista.appendChild(li);
     }

     list.appendChild(fraglista);

}

