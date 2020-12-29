
function cargarVehiculos() {
    //cargo los vehiculos en un array de objetos que será reutilizado por todos los métodos.
    let vehiculos = [];
    vehiculos.push({
        marca: "Peugeot",
        modelo: 206,
        puertas: 4,
        precio: 200000
    });
    vehiculos.push({
        marca: "Honda",
        modelo: "Titan",
        cilindrada: "125cc",
        precio: 60000
    });
    vehiculos.push({
        marca: "Peugeot",
        modelo: 208,
        puertas: 5,
        precio: 250000
    });
    vehiculos.push({
        marca: "Yamaha",
        modelo: "YBR",
        cilindrada: "160cc",
        precio: 80500.50
    });
    return vehiculos
}

function imprimirVehiculos(vehiculos) {
    vehiculos.forEach((vehiculo) => {
        //uso el operador ternario para ver si el vehiculo tiene puertas (auto) o cilindrado (moto)                                                                                             para conservar el formato se usa este metodo.
        console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // ${ vehiculo.puertas ? `Puertas: ${vehiculo.puertas} // ` : `Cilindrada: ${vehiculo.cilindrada} // `}Precio: $${new Intl.NumberFormat('es-ES').format(vehiculo.precio)}` );
    })
}

//los siguientes dos metodos son comparaciones simples para encontrar el menor y mayor
function vehiculoMasCaro(vehiculos) {
    let masCaro = 0;
    let resultado;
    vehiculos.forEach((vehiculo) => {
        if (vehiculo.precio > masCaro) {
            masCaro = vehiculo.precio;
            resultado = vehiculo.marca + ' ' + vehiculo.modelo;
        }
    });
    console.log(`Vehículo más caro: ${resultado}`);
}

function vehiculoMasBarato(vehiculos) {
    let masBarato = vehiculos[0].precio;
    let resultado;
    vehiculos.forEach((vehiculo) => {
        if (vehiculo.precio < masBarato) {
            masBarato = vehiculo.precio;
            resultado = vehiculo.marca + ' ' + vehiculo.modelo;
        }
    });
    console.log(`Vehículo más barato: ${resultado}`);
}
//recorre el array e identifica que vehiculo tiene 'Y' en el modelo
function modeloLetraY (vehiculos) {
    let resultado;
    vehiculos.forEach((vehiculo) => {
        if (vehiculo.modelo.toString().includes('Y'))
            resultado = 'Vehículo que contiene en el modelo la letra ‘Y’: ' + vehiculo.marca + ' ' + vehiculo.modelo + ' $' + new Intl.NumberFormat('es-ES').format(vehiculo.precio);
        else
            resultado = 'No hay vehiculos que tengan "y" en el modelo...'
    })
    console.log(resultado);
}

function ordenarPorPrecioDesc (vehiculos) {
    let resultado = [];
    //uso la función sort junto con una función de comparación
    resultado = vehiculos.sort((a, b) => {
        return b.precio - a.precio
    })
    console.log('Vehículos ordenados por precio de mayor a menor:');
    resultado.forEach((vehiculo) => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
    });
}

//ejecución del codigo
let vehiculos = cargarVehiculos();
imprimirVehiculos(vehiculos);
console.log('=============================');
vehiculoMasCaro(vehiculos);
vehiculoMasBarato(vehiculos);
modeloLetraY(vehiculos);
console.log('=============================');
ordenarPorPrecioDesc(vehiculos);
