const localVentas = require('./localVentasPcs');

test ('comprobar que la funcion genere un id random',() =>{
    const id=localVentas.obtenerIdVenta();
    expect(id).toBeGreaterThanOrEqual(100000000);
    expect(id).toBeLessThan(999999999);
});