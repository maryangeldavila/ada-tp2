# ada-tp2

TRABAJO PRÁCTICO JAVASCRIPT I

LOCAL DE VENTAS DE PCS

Una empresa de venta de computadoras está desarrollando un sistema para llevar su registro de ventas. Para ello cuenta con la siguiente información:

Lista de las vendedoras de la empresa: Un array con los nombres de cada vendedora
Lista de ventas: Un array, donde cada posición tiene otro array con toda la información de la venta en el siguiente orden:
identificador de la venta
dia
mes
año
nombre vendedora
sucursal de la venta
componentes (un array Strings con el nombre de cada componente vendido)
Lista de precios de los componentes: Un array con varios elementos. Cada elemento es un array con 2 datos: nombre componente y precio.

const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
]

const precios = [
  [ 'Monitor GPRS 3000', 200 ],
  [ 'Motherboard ASUS 1500', 120 ],
  [ 'Monitor ASC 543', 250 ],
  [ 'Motherboard ASUS 1200', 100 ],
  [ 'Motherboard MZI', 30 ],
  [ 'HDD Toyiva', 90 ],
  [ 'HDD Wezter Dishital', 75 ],
  [ 'RAM Quinston', 110 ],
  [ 'RAM Quinston Fury', 230 ]
];

const sucursales = ['Centro', 'Caballito'];


Se pide desarrollar las siguientes funciones para poder brindar la información necesario a la empresa que nos pidió el desarrollo:

precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.

console.log( precioMaquina(["Monitor GPRS 3000", "Motherboard ASUS 1500"]) ); // 320 ($200 del monitor + $120 del motherboard)


cantidadVentasComponente(componente): recibe el nombre de un componente y devuelve la cantidad de veces que fue vendido. La lista de ventas no se pasa por parámetro, se asume que está identificada por la variable ventas.

console.log( cantidadVentasComponente("Monitor ASC 543") ); // 3


ventasVendedora(nombre): recibe por parámetro el nombre de una vendedora y retorna el importe total de ventas realizadas por dicha vendedora.

console.log( ventasVendedora("Grace") ); // 990


componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo históricamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

console.log( componenteMasVendido() ); // Monitor GPRS 3000


ventasSucursal(sucursal): recibe por parámetro el nombre de una sucursal y retorna el importe de las ventas totales realizadas por una sucursal sin límite de fecha.

console.log( ventasSucursal("Centro") ); // 4195


mejorVendedora(): Devuelve el nombre de la vendedora que más ingresos generó

console.log( mejorVendedora() ); // Grace


ventaPromedio(): Debe retornar el importe promedio por venta, como un número entero sin decimales redondeado siempre para abajo.

console.log( ventaPromedio() ); // 353


obtenerIdVenta(): Tiene que retornar un número aleatorio entre 100000000 y 999999999

console.log( obtenerIdVenta() ); // 386936759


agregarVenta(dia, mes, anio, vendedora, sucursal, componentes): recibe por parámetro todos los datos de una venta, y los agrega en el array de ventas. Al igual que las ventas que ya están previamente creadas, además de estos datos necesitamos agregar el primer dato que es un identificador de la venta. Para agregar este dato, tenemos que usar la función desarrollada en el punto anterior obtenerIdVenta


REQUISITOS

Se deben respetar los nombres de las funciones
Buena tabulación del código
Usar nombres claros para las variables
Utilizar solo let o const
Utilizar arrow functions
Todas las funciones deben tener test unitarios utilizando Jest, para verificar el correcto funcionamiento
