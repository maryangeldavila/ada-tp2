module.exports{
    cantidadVentasComponente
}

const cantidadVentasComponente=(componente)=> {
    let cantidadVentas = 0;
        for (let i = 0; i < ventas.length; i++) {
            console.log(ventas[i]);
          for (let j = 0; j < ventas[i][6].length; j++ ) {
            if (componente === ventas[i][6][j]) {
              cantidadVentas++;
            }
          }
        }
        return cantidadVentas;
      }
