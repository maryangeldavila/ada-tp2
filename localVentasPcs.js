const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [
    100000000,
    4,
    2,
    2019,
    "Grace",
    "Centro",
    ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    100000001,
    1,
    1,
    2019,
    "Ada",
    "Centro",
    ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    100000002,
    2,
    1,
    2019,
    "Grace",
    "Caballito",
    ["Monitor ASC 543", "Motherboard MZI", "HDD Toyiva"]
  ],
  [
    100000001,
    1,
    1,
    2019,
    "Ada",
    "Centro",
    ["Monitor GPRS 3000", "Motherboard ASUS 1500"]
  ],
  [
    100000004,
    12,
    1,
    2019,
    "Grace",
    "Caballito",
    ["Monitor GPRS 3000", "Motherboard ASUS 1200"]
  ],
  [
    100000005,
    21,
    3,
    2019,
    "Hedy",
    "Caballito",
    ["Monitor ASC 543", "Motherboard ASUS 1200", "RAM Quinston"]
  ]
];

const precios = [
  ["Monitor GPRS 3000", 200],
  ["Motherboard ASUS 1500", 120],
  ["Monitor ASC 543", 250],
  ["Motherboard ASUS 1200", 100],
  ["Motherboard MZI", 30],
  ["HDD Toyiva", 90],
  ["HDD Wezter Dishital", 75],
  ["RAM Quinston", 110],
  ["RAM Quinston Fury", 230]
];

const sucursales = ["Centro", "Caballito"];

const precioMaquina = componentes => {
  let precioTotal = 0;
  for (const componente of componentes) {
    let precioComponente = precios.find(precio => {
      return componente == precio[0];
    });
    precioTotal = precioTotal + precioComponente[1];
  }
  return precioTotal;
};

const cantidadVentasComponentes = componente => {
  let cantidadVentas = 0;
  for (let i = 0; i < ventas.length; i++) {
    console.log(ventas[i]);
    for (let j = 0; j < ventas[i][6].length; j++) {
      if (componente === ventas[i][6][j]) {
        cantidadVentas++;
      }
    }
  }
  return cantidadVentas;
};

const ventasVendedora = nombre => {
  let ventasVendedoraTotal = 0;
  for (let venta of ventas) {
    let precioMaquinaVendida = 0;
    let vendedora = venta[4];
    if (nombre == vendedora) {
      let maquinaVendida = venta[6];
      precioMaquinaVendida = precioMaquina(maquinaVendida);
    }
    ventasVendedoraTotal += precioMaquinaVendida;
  }
  return ventasVendedoraTotal;
};

const componenteMasVendido = () => {
  let cantidad = 0;
  let masVendido = "";
  for (let precio of precios) {
    const componenteVendido = cantidadVentasComponentes(precio[0]);
    if (componenteVendido > cantidad) {
      cantidad = masVendido;
      masVendido = precio[0];
    }
  }
  return masVendido;
};

const ventasSucursal = nombre => {
  let ventasSucursalTotal = 0;
  for (let venta of ventas) {
    let precioMaquinaVendida = 0;
    let sucursal = venta[5];
    if (nombre == sucursal) {
      let maquinaVendida = venta[6];
      precioMaquinaVendida = precioMaquina(maquinaVendida);
    }
    ventasSucursalTotal += precioMaquinaVendida;
  }
  return ventasSucursalTotal;
};

const mejorVendedora = () => {
  let comparador = 0;
  let vendedoraFinal;
  for (let vendedora of vendedoras) {
    let ventasVendedoraTotal = ventasVendedora(vendedora);
    if (comparador < ventasVendedoraTotal) {
      comparador = ventasVendedoraTotal;
      vendedoraFinal = vendedora;
    }
  }
  return vendedoraFinal;
};

const ventaPromedio = () => {
  let promedioVenta = 0;
  let cantidadVentas = 0;
  for (let venta of ventas) {
    cantidadVentas++;
    precios.forEach(precio => {
      venta[6].forEach(itVendido => {
        if (itVendido === precio[0]) {
          promedioVenta += precio[1];
        }
      });
    });
  }
  let promedio = promedioVenta / cantidadVentas;

  return Math.floor(promedio);
};

const obtenerIdVenta = () => {
  return Math.random() * (999999999 - 100000000) + 100000000;
};

const agregarVenta = (dia, mes, anio, vendedora, sucursal, componentes) => {
  let nuevaVenta = [
    obtenerIdVenta(),
    dia,
    mes,
    anio,
    vendedora,
    sucursal,
    componentes
  ];
  ventas.push(nuevaVenta);
};

module.exports = {
  agregarVenta,
  cantidadVentasComponentes,
  componenteMasVendido,
  mejorVendedora,
  obtenerIdVenta,
  precioMaquina,
  ventaPromedio,
  ventasSucursal,
  ventasVendedora
};
