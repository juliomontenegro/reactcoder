 export const PRODUCTS=[
{    
    id:1,
    numerocard:"1",
    datoproducto1: 20,
    datoproducto2: "propiedad1",
    datoproducto3: "propiedad2",
    datoproducto4:"propiedad3",
},

{
    id:2,
    numerocard:"2",
    datoproducto1:30,
    datoproducto2:"propiedad4",
    datoproducto3:"propiedad5",
    datoproducto4:"propiedad6",
},
{
    id:3,
    numerocard:"3",
    datoproducto1:40,
    datoproducto2:"propiedad7",
    datoproducto3:"propiedad8",
    datoproducto4:"propiedad9",
},
{
    id:4,
    numerocard:"4",
    datoproducto1:50,
    datoproducto2:"propiedad10",
    datoproducto3:"propiedad11",
    datoproducto4:"propiedad12",
}

];

export function getProductos() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(PRODUCTS), 2000);
    });
  }
