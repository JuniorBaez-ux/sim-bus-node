const Entrada1 = [];
const Entrada2 = [];
const Bus1 = [];
const Bus2 = [];

function generarPersonasParaEntrada1() {
  const cantidad = Math.floor(Math.random() * 10) + 1;
  for (let i = 0; i < cantidad; i++) {
    Entrada1.push({
      id: i,
      nombre: `Persona ${i}`,
      edad: Math.floor(Math.random() * 100),
    });
  }

  console.log("La cantidad de personas que ingresaron a la entrada 1 es: ", Entrada1.length);
  
  return Entrada1;
}

function generarPersonasParaEntrada2() {
    const cantidad = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < cantidad; i++) {
        Entrada2.push({
        id: i,
        nombre: `Persona ${i}`,
        edad: Math.floor(Math.random() * 100),
        });
    }

    console.log("La cantidad de personas que ingresaron a la entrada 2 es: ", Entrada2.length);


    return Entrada2;
}

function insertarPersonasEnBus1() {
  Bus1.push(...Entrada1);
  Entrada1.length = 0;

  console.log("La cantidad de personas que ingresaron al bus 1 es: ", Bus1.length);

  return Bus1;
}

function insertarPersonasEnBus2() {
    Bus2.push(...Entrada2);
    Entrada2.length = 0;

    console.log("La cantidad de personas que ingresaron al bus 2 es: ", Bus2.length);

    return Bus2;
}

function bajarPersonaDelBus1() {
  //Bajar una cantidad aleatoria de personas del bus 1
    const cantidad = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < cantidad; i++) {
        Bus1.pop();
    }

    console.log("La cantidad de personas que bajaron del bus 1 es: ", cantidad);

    console.log("La cantidad de personas que se quedaron en el bus 1 es: ", Bus1.length);
}

function bajarPersonaDelBus2() {
    //Bajar una cantidad aleatoria de personas del bus 2
    const cantidad = Math.floor(Math.random() * 10) + 1;
    for (let i = 0; i < cantidad; i++) {
        Bus2.pop();
    }

    console.log("La cantidad de personas que bajaron del bus 2 es: ", cantidad);

    console.log("La cantidad de personas que se quedaron en el bus 2 es: ", Bus2.length);

}

function personasEsperandoEnEntrada1() {
  return Entrada1.length;
}

function personasEsperandoEnEntrada2() {
    return Entrada2.length;
}

function imprimirLasPersonasQueEsperanEnLasEntradas() {
  console.log("Las personas que esperan en la entrada 1 son: ", personasEsperandoEnEntrada1());
  console.log("Las personas que esperan en la entrada 2 son: ", personasEsperandoEnEntrada2());
}

function realizarSimulacion(){
    //Correr el programa cada 3 segundos hasta que presione la tecla Enter
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Presione Enter para finalizar la simulación', () => {
        console.log('Simulación finalizada');
        readline.close();
        clearTimeout(simulacion);
    });

    let simulacion = setInterval(() => {
        generarPersonasParaEntrada1();
        generarPersonasParaEntrada2();
        insertarPersonasEnBus1();
        insertarPersonasEnBus2();
        imprimirLasPersonasQueEsperanEnLasEntradas();
        bajarPersonaDelBus1();
        bajarPersonaDelBus2();
    }, 3000);
}

realizarSimulacion();