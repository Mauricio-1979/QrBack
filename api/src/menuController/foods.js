
const {Menues,Tables}=require('../db')


let menu=[
    {
    name:'Para_Compartir',
    platos:[
        {name:'patatas bravas ronda',price:4.45},
        {name:'ensalada rusa clasica con atun',price:5.30},
        {name:'jamon iberico y coca con tomate',price:9.00},
        {name:'tabla de quesos machengos',price:12.00}
    ]
    },
    {
    name:'Arroces',
    platos:[
        {name:'paella de pescado y mariscos',price:19.30},
        {name:'risotto de setas con colas de gamba',price:16.50 },
        {name:'arroz integral con verduras y garbanzos',price:14.30}
    ]
    },
    {
    name:'Pastas',
    platos:[
        {name:'espaguettis carbonara',price:12.50},
        {name:'tagliattelle con mejillones y sepia',price:15.90}
    ]
    },
    {
    name:'Ensalada',
    platos:[
        {name:'de temporada',price:8.30},
        {name:'pollo tiblia con sesamo y curry',price:14.00},
        {name:'salmon marinado y esparragos verdes a la plancha',price:14.00}
    ]
    },
    {
    name:'Sopas',
    platos:[
        {name:'pescados y mariscos costa brava',price:14.00},
        {name:'del dia',price:6}
    ]
    },
    {
    name:'Pescados',
    platos:[
        {name:'merluza de costa a la plancha con ajo y limon',price:17.00},
        {name:'fish and chips de merluza con salsa tartara',price:18.00},
        {name:'salmon noruego en papillote,finas hierbas y vino blanco',price:19.00},
        {name:'tataki de atun caramelizado con soja y tronco de verduras',price:19.00},
        {name:'bacalao con alioli',price:22.00},
        {name:'lenguado a la meuniere',price:23.00}
    ]
    },
    {
    name:'Carnes',
    platos:[
        {name:'tronco de pollo relleno en su salsa',price:14.00},
        {name:'escalopa cordon bleu a la pimienta verde',price:14.00},
        {name:'hamburgueza angus con chimichurri',price:15.00},
        {name:'solomillo de cerdo con salsa de mostaza(maille)',price:16.00},
        {name:'guiso de jabali con setas de temporada',price:19.00},
        {name:'cordero asado al horno en su salsa',price:20.00},
        {name:'entrecot de ternera a la brasa',price:21.00},
        {name:'chuletas de cordero a la parrila con romero',price:21.00},
        {name:'solomillo de ternera a la parrila de carbon',price:22.00}
    ]}
]

let mesas = [
    {name:'mesa1'},
    {name:'mesa2'},
    {name:'mesa3'},
    {name:'mesa4'},
    {name:'mesa5'},
    {name:'mesa6'},
]

function cargar(){
    menu.map((e)=>{
        
      e.platos.length>0&&e.platos.map(async(i)=>{
        console.log(i,'entro')
        let r=await Menues.create({
            name:i.name,
            price:i.price,
            description:'algo'
        })
      })

    })
}

function cargarMesa(){
    mesas.map(async(el)=>{
        var nuevaMesa = await Tables.create({
            name:el.name
        })
    })
}
module.exports={cargar,cargarMesa}