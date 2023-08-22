//Paquete importado
require('colors');

// referencia al modulo math a traves de la constante de math
const math = require('./modules/math.js')

console.clear();
console.log(math);

const main = async() => {
    console.log('///////////////////////////////'.green);
    console.log('*   '.green,'Funciones Matematicas'.bgGreen,
                '   *'.green);
    console.log('//////////////////////////////\n'.green);
    console.log('//////////////////////////////'.cyan);
    console.log('*                           *'.cyan);

    console.log("//" + "Suma =>" + math.add(17,3) + "//");
    console.log("//" + "Substract =>" + math.substract(3,17) + "//");
    console.log("//" + "Multiplicacion =>" + math.multiply(2,11) + "//");
    console.log("//" + "Division =>" + math.divide(4,9) + "//");
}

main();
