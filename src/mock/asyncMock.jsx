const productos = [
    //frutos secos
    {
        id: '01',
        name: 'Almendra',
        description: 'Almendras seleccionadas.',
        stock: 20,                price: 2500,
        category: 'frutos secos',
        img: 'https://i.postimg.cc/VkZt5LFX/frutos-secos.png'
    },
     {
        id: '02',
        name: 'Avellana',
        description: 'Avellanas de alta calidad.',
        stock: 20,
        price: 1900,
        category: 'frutos secos',
        img: 'https://i.postimg.cc/VkZt5LFX/frutos-secos.png'
    },
     {
        id: '03',
        name: 'Nuez',
        description: 'Nueces enteras sin cascara.',
        stock: 20,
        price: 1800,
        category: 'frutos secos',
        img: 'https://i.postimg.cc/VkZt5LFX/frutos-secos.png'
    },
     {
        id: '04',
        name: 'Mani',
        description: 'Mani pelado sin sal.',
        stock: 20,
        price: 1500,
        category: 'frutos secos',
        img: 'https://i.postimg.cc/VkZt5LFX/frutos-secos.png'
    },
    // Congelados
    {
        id: '05',
        name: 'Frutillas',
        description: 'Frutillas congeladas de alta calidad.',
        stock: 20,
        price: 4800,
        category: 'congelados',
        img: 'https://i.postimg.cc/Y9WSxQm0/congelados.png'
    },
    {
        id: '06',
        name: 'Arándanos',
        description: 'Arándanos congelados seleccionados.',
        stock: 20,
        price: 2200,
        category: 'congelados',
        img: 'https://i.postimg.cc/Y9WSxQm0/congelados.png'
    },
    {
        id: '07',
        name: 'Frambuesas',
        description: 'Frambuesas congeladas premium.',
        stock: 20,
        price: 5400,
        category: 'congelados',
        img: 'https://i.postimg.cc/Y9WSxQm0/congelados.png'
    },
    {
        id: '08',
        name: 'Moras',
        description: 'Frambuesas congeladas premium.',
        stock: 20,
        price: 4400,
        category: 'congelados',
        img: 'https://i.postimg.cc/Y9WSxQm0/congelados.png'
    },

    // 🍵 INFUSIONES
    {
        id: '09',
        name: 'Té Verde',
        description: 'Té verde natural, ideal para infusiones.',
        stock: 20,
        price: 1500,
        category: 'infusiones',
        img: 'https://i.postimg.cc/J0r9hLm5/infusiones.png'
    },
    {
        id: '10',
        name: 'Té Negro',
        description: 'Té negro intenso de aroma profundo.',
        stock: 20,
        price: 1500,
        category: 'infusiones',
        img: 'https://i.postimg.cc/J0r9hLm5/infusiones.png'
    },
    {
        id: '11',
        name: 'Café',
        description: 'Café tostado premium.',
        stock: 20,
        price: 3500,
        category: 'infusiones',
        img: 'https://i.postimg.cc/J0r9hLm5/infusiones.png'
    },
    {
        id: '12',
        name: 'Manzanilla',
        description: 'Manzanilla natural para relajación.',
        stock: 20,
        price: 1300,
        category: 'infusiones',
        img: 'https://i.postimg.cc/J0r9hLm5/infusiones.png'
    },

    // 🌱 SEMILLAS
    {
        id: '13',
        name: 'Chía',
        description: 'Semillas de chía ricas en omega 3.',
        stock: 20,
        price: 1100,
        category: 'semillas',
        img: 'https://i.postimg.cc/2y0gbK8T/semillas.png'
    },
    {
        id: '14',
        name: 'Amapola',
        description: 'Semillas de amapola premium.',
        stock: 20,
        price: 1200,
        category: 'semillas',
        img: 'https://i.postimg.cc/2y0gbK8T/semillas.png'
    },
    {
        id: '15',
        name: 'Lino',
        description: 'Semillas de lino de alta calidad.',
        stock: 20,
        price: 1000,
        category: 'semillas',
        img: 'https://i.postimg.cc/2y0gbK8T/semillas.png'
    },
    {
        id: '16',
        name: 'Girasol',
        description: 'Semillas de girasol naturales.',
        stock: 20,
        price: 900,
        category: 'semillas',
        img: 'https://i.postimg.cc/2y0gbK8T/semillas.png'
    }
    
]

//mathrandom error

let error = false
export const getProducts = ()=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('⚠️ Hubo un error, intente más tarde ⚠️')
            }else{
                resolve(productos)
            }
        },1500)
    })
}


export const getOneProduct = (id)=> {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if(error){
                reject('El producto no existe')
            }else{
                // resolve(productos[1])//harcodeado
                let product = productos.find((prod)=> prod.id === id)
                resolve(product)
            }
        },1500)
    })
}