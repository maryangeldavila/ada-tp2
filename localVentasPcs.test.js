const localVentas = require("./localVentasPcs");
const ventasVendedora = require("./localVentasPcs").ventasVendedora;
const ventasSucursal = require("./localVentasPcs").ventasSucursal;
const mejorVendedora = require("./localVentasPcs").mejorVendedora;
const cantidadVentasComponente = require("./localVentasPcs")
  .cantidadVentasComponentes;
const componenteMasVendido = require("./localVentasPcs").componenteMasVendido;
const ventaPromedio = require("./localVentasPcs").ventaPromedio;

test("Se suman precios de los componentes", () => {
  let precioMaquina = localVentas.precioMaquina([
    "Monitor GPRS 3000",
    "Motherboard ASUS 1500"
  ]);
  expect(precioMaquina).toBe(320);
});

test("Devuelve la cantidad de ventas por cada  componente", () => {
  expect(cantidadVentasComponente("Monitor GPRS 3000")).toBe(3);
});

test("Devuelve el componente mas vendido", () => {
  expect(componenteMasVendido()).toMatch("Motherboard ASUS 1500");
});

test("comprobar que la funcion agrega una nueva venta con todos sus parametros ", () => {
  const totalVentas = localVentas.ventas.length;
  localVentas.agregarVenta(4, 9, 2019, "Hedy", "Caballito", [
    "Monitor ASC 543",
    "HDD Toyiva"
  ]);
  expect(localVentas.ventas.length).toBe(totalVentas + 1);
  // compruebo que el dia de la venta que agregué sea 4.
  expect(localVentas.ventas[localVentas.ventas.length - 1][1]).toBe(4);
});

test("Devuelve el promedio de las ventas realizadas", () => {
  expect(ventaPromedio()).toBe(353);
});

test("comprobar que la funcion genere un id random", () => {
  const id = localVentas.obtenerIdVenta();
  expect(id).toBeGreaterThanOrEqual(100000000);
  expect(id).toBeLessThan(999999999);
});

test("Recibe vendedora y retorna importe total de ventas", () => {
  let ventasDe = ventasVendedora("Grace");
  expect(ventasDe).toBe(990);
});

test("Recibe sucursal y devuelve su total de ventas", () => {
  let ventasDe = ventasSucursal("Centro");
  expect(ventasDe).toBe(960);
});

test("Devuelve el nombre de la vendedora que mas ingresos generÃ³", () => {
  expect(mejorVendedora()).toBe("Grace");
});

test("Se suman precios de los componentes", () => {
  let precioMaquinaRes = precioMaquina([
    "Monitor GPRS 3000",
    "Motherboard ASUS 1500"
  ]);
  expect(precioMaquinaRes).toBe(320);
});
