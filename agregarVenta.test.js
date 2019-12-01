const localVentas = require('./localVentasPcs');

test('comprobar que la funcion agrega una nueva venta con todos sus parametros ', () => {
    const totalVentas = localVentas.ventas.length;
    localVentas.agregarVenta(4, 9, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'HDD Toyiva']);
    expect(localVentas.ventas.length).toBe(totalVentas + 1);
    // compruebo que el dia de la venta que agregué sea 4.
    expect(localVentas.ventas[localVentas.ventas.length - 1][1]).toBe(4);

});
