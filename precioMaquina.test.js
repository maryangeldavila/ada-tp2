const localVentas = require('./localVentasPcs');

test('Se suman precios de los componentes', () => {
    let precioMaquina = localVentas.precioMaquina(
        ['Monitor GPRS 3000', 'Motherboard ASUS 1500'],
    );
    expect(precioMaquina).toBe(320);
});
