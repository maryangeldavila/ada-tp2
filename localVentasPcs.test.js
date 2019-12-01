const agregarVenta = require("./localVentasPcs").agregarVenta;
const cantidadVentasComponente = require("./localVentasPcs")
  .cantidadVentasComponentes;
const componenteMasVendido = require("./localVentasPcs").componenteMasVendido;
const mejorVendedora = require("./localVentasPcs").mejorVendedora;
const obtenerIdVenta = require("./localVentasPcs").obtenerIdVenta;
const precioMaquina = require("./localVentasPcs").precioMaquina;
const ventas = require("./localVentasPcs");
const ventaPromedio = require("./localVentasPcs").ventaPromedio;
const ventasSucursal = require("./localVentasPcs").ventasSucursal;
const ventasVendedora = require("./localVentasPcs").ventasVendedora;

test("Se suman precios de los componentes", () => {
  let precioMaquinaRes = precioMaquina([
    "Monitor GPRS 3000",
    "Motherboard ASUS 1500"
  ]);
  expect(precioMaquinaRes).toBe(320);
});

test("Devuelve la cantidad de ventas por cada  componente", () => {
  expect(cantidadVentasComponente("Monitor GPRS 3000")).toBe(4);
});

test("Recibe vendedora y retorna importe total de ventas", () => {
  let ventasDe = ventasVendedora("Grace");
  expect(ventasDe).toBe(990);
});

test("Devuelve el componente mas vendido", () => {
  expect(componenteMasVendido()).toMatch("Motherboard ASUS 1500");
});

test("Recibe sucursal y devuelve su total de ventas", () => {
  let ventasDe = ventasSucursal("Centro");
  expect(ventasDe).toBe(960);
});

test("Devuelve el nombre de la vendedora que mas ingresos genera", () => {
  expect(mejorVendedora()).toBe("Grace");
});

test("Devuelve el promedio de las ventas realizadas", () => {
  expect(ventaPromedio()).toBe(353);
});

test("comprobar que la funcion genere un id random", () => {
  const id = obtenerIdVenta();
  expect(id).toBeGreaterThanOrEqual(100000000);
  expect(id).toBeLessThan(999999999);
});

test("comprobar que la funcion agrega una nueva venta con todos sus parametros ", () => {
  let nuevaVenta = agregarVenta(4, 9, 2019, "Hedy", "Caballito", [
    "Monitor ASC 543",
    "HDD Toyiva"
  ]);
  expect(ventas[6]).toBe(nuevaVenta);
});
