const ventasVendedora = require("./localVentasPcs").ventasVendedora;
const ventasSucursal = require("./localVentasPcs").ventasSucursal;

test("Recibe vendedora y retorna importe total de ventas", () => {
  let ventasDe = ventasVendedora("Grace");
  expect(ventasDe).toBe(990);
});

  let ventasDe = ventasSucursal("Centro");
  expect(ventasDe).toBe(960);
});
