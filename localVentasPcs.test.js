const ventasVendedora = require("./localVentasPcs").ventasVendedora;

test("Recibe vendedora y retorna importe total de ventas", () => {
  let ventasDe = ventasVendedora("Grace");
  expect(ventasDe).toBe(990);
});
