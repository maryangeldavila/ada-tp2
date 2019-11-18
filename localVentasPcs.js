const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [
  [100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
  [100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500']],
  [100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva']],
  [100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200']],
  [100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200']],
  [100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston']]
]

const precios = [
  ['Monitor GPRS 3000', 200],
  ['Motherboard ASUS 1500', 120],
  ['Monitor ASC 543', 250],
  ['Motherboard ASUS 1200', 100],
  ['Motherboard MZI', 30],
  ['HDD Toyiva', 90],
  ['HDD Wezter Dishital', 75],
  ['RAM Quinston', 110],
  ['RAM Quinston Fury', 230]
];

const sucursales = ['Centro', 'Caballito'];

const precioMaquina = (componentes) => {
  let precioTotal = 0;
  for (const componente of componentes) {
    let precioComponente = precios.find((precio) => {
      return componente == precio[0];
    });
    precioTotal = precioTotal + precioComponente[1];
  };
  return precioTotal;
};

const obtenerIdVenta =()=>{
  return Math.random() * (999999999 - 100000000) + 100000000;
}

module.exports = {
  precioMaquina,
  obtenerIdVenta,
};

