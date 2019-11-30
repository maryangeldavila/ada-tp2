const cantidadVentasComponente = require('./cantidadVentasComponentes').cantidadVentasComponentes;
const componenteMasVendido = require('./cantidadVentasComponentes').componenteMasVendido;

  test('Devuelve la cantidad de ventas por cada  componente', () => {
    expect(cantidadVentasComponente('Monitor GPRS 3000')).toBe(3);
});

test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("Motherboard ASUS 1500");
})