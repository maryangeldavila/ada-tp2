const ventasVendedora = require("./localVentasPcs").ventasVendedora;
const ventasSucursal = require("./localVentasPcs").ventasSucursal;
const mejorVendedora = require("./localVentasPcs").mejorVendedora;

test("Recibe vendedora y retorna importe total de ventas", () => {
  let ventasDe = ventasVendedora("Grace");
  expect(ventasDe).toBe(990);
});

  let ventasDe = ventasSucursal("Centro");
  expect(ventasDe).toBe(960);
});


test("Devuelve el nombre de la vendedora que mas ingresos generÃ³", () => {
  expect(mejorVendedora()).toBe("Grace");
});

