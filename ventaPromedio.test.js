const ventaPromedio = require('./ventaPromedio').ventaPromedio;

test('Devuelve el promedio de las ventas realizadas', () => {
    expect(ventaPromedio()).toBe(353)
});