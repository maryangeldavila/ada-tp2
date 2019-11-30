const ventas = [
  [ 100000000, 4, 2, 2019, 'Grace', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000001, 1, 1, 2019, 'Ada', 'Centro', ['Monitor GPRS 3000', 'Motherboard ASUS 1500'] ],
  [ 100000002, 2, 1, 2019, 'Grace', 'Caballito', ['Monitor ASC 543', 'Motherboard MZI', 'HDD Toyiva'] ],
  [ 100000003, 10, 1, 2019, 'Ada', 'Centro', ['Monitor ASC 543', 'Motherboard ASUS 1200'] ],
  [ 100000004, 12, 1, 2019, 'Grace', 'Caballito', ['Monitor GPRS 3000', 'Motherboard ASUS 1200'] ],
  [ 100000005, 21, 3, 2019, 'Hedy', 'Caballito', ['Monitor ASC 543', 'Motherboard ASUS 1200', 'RAM Quinston'] ]
 ]
 
 const precios = [
  [ 'Monitor GPRS 3000', 200 ],
  [ 'Motherboard ASUS 1500', 120 ],
  [ 'Monitor ASC 543', 250 ],
  [ 'Motherboard ASUS 1200', 100 ],
  [ 'Motherboard MZI', 30 ],
  [ 'HDD Toyiva', 90 ],
  [ 'HDD Wezter Dishital', 75 ],
  [ 'RAM Quinston', 110 ],
  [ 'RAM Quinston Fury', 230 ]
 ];
 

 
 
const cantidadVentasComponentes=(componente)=> {
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

      const componenteMasVendido = () => {
  let cantidad = 0;
  let masVendido= "";
  for(let precio of precios){
    const componenteVendido= cantidadVentasComponentes(precio[0]);
      if(componenteVendido>cantidad){
        cantidad = masVendido;
        masVendido = precio[0] 
      }
    }
  return masVendido
}
    
module.exports={
  cantidadVentasComponentes,
  componenteMasVendido,
    }