const cantidadVentasComponente = require('./ada-tp2');


  test('Devuelve la cantidad de ventas por componente', () => {
    expect(cantidadVentasComponente('Monitor GPRS 3000')).toBe(3);
});