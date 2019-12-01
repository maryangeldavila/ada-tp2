const cantidadVentasComponente = require('./componenteMasVendido').cantidadVentasComponentes;
const componenteMasVendido = require('./componenteMasVendido').componenteMasVendido;


test('Devuelve el componente mas vendido', () => {
    expect(componenteMasVendido()).toMatch("Motherboard ASUS 1500");
})