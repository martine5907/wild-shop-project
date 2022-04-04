const productsInformations = [
    {title :'Hoodies - Born To Be a Wildeuse',categorie :'clothes', subtitle :'Hoodie Unisexe Bio', price :29.9, description :'Molleton brossé 85% coton biologique filé et peigné, 15% polyester recyclé 280 GSM', img :'/pictures/products/sweat-born-to-be-a-wildeuse-1.png', img2 :'/pictures/products/sweat-born-to-be-a-wildeuse-2.png'},
    {title :'Tote Bag - Born To Be a Wilder',categorie :'goodies', subtitle :'Tote Bag 100% Coton', price :11.90, description :'Tote bag 100% coton - Dimensions : 38 X 42 cm', img :'/pictures/products/bag-born-to-be-a-wilder-1.png', img2 :'/pictures/products/bag-born-to-be-a-wilder-2.png'},
    {title :'T-shirt - Data',categorie :'clothes', subtitle :'Tee-shirt unisexe bio', price :14.90, description :'Jersey simple 100% coton biologique 180g/m2 Coupe normale', img :'/pictures/products/tshirt-data-1.png', img2 :'/pictures/products/tshirt-data-2.png'},
    {title :'Mug - Dev',categorie :'goodies', subtitle :'', price :12.90, description :'Mug en céramique, capacité 30 CL À laver à la main. Ne peut pas passer au lave vaisselle.', img :'/pictures/products/mug-dev-1.png', img2 :'/pictures/products/mug-dev-2.png'},
    {title :'Tshirt - Loïc',categorie :'clothes', subtitle :'Tee-shirt unisexe bio', price :14.90, description :'Jersey simple 100% coton biologique 180g/m2 Coupe normale', img :'/pictures/products/tshirt-loic-1.png', img2 :'/pictures/products/tshirt-loic-2.png'},
    {title :'Tshirt - Dev',categorie :'clothes', subtitle :'Tee-shirt unisexe bio', price :14.90, description :'Jersey simple 100% coton biologique 180g/m2 Coupe normale', img :'/pictures/products/tshirt-dev-1.png', img2 :'/pictures/products/tshirt-dev-2.png'},
    {title :'Tote Bag - Dev',categorie :'goodies', subtitle :'Tote Bag 100% Coton', price :11.90, description :'Tote bag 100% coton - Dimensions : 38 X 42 cm', img :'/pictures/products/bag-dev-1.png', img2 :'/pictures/products/bag-dev-2.png'},
    {title :'T-shirt - Cyber Security',categorie :'clothes', subtitle :'Tee-shirt unisexe bio', price :14.90, description :'Jersey simple 100% coton biologique 180g/m2 Coupe normale', img :'/pictures/products/tshirt-cyber-security-1.png', img2 :'/pictures/products/tshirt-cyber-security-2.png'},
    {title :'Mug - No Code / Product',categorie :'goodies', subtitle :'', price :12.90, description :'Mug en céramique, capacité 30 CL À laver à la main. Ne peut pas passer au lave vaisselle.', img :'/pictures/products/mug-no-code-1.png', img2 :'/pictures/products/mug-no-code-2.png'},
    {title :'Tote Bag - Loïc',categorie :'goodies', subtitle :'Tote Bag 100% Coton', price :11.90, description :'Tote bag 100% coton - Dimensions : 38 X 42 cm', img :'/pictures/products/bag-loic-1.png', img2 :'/pictures/products/bag-loic-2.png'},
    {title :'Hoodies - Born To Be a Wilder',categorie :'clothes', subtitle :'Hoodie Unisexe Bio', price :29.9, description :'Molleton brossé 85% coton biologique filé et peigné, 15% polyester recyclé 280 GSM', img :'/pictures/products/sweat-born-to-be-a-wilder-1.png', img2 :'/pictures/products/sweat-born-to-be-a-wilder-2.png'},
    {title :'Mug - Loïc',categorie :'goodies', subtitle :'', price :12.90, description :'Mug en céramique, capacité 30 CL À laver à la main. Ne peut pas passer au lave vaisselle.', img :'/pictures/products/mug-loic-1.png', img2 :'/pictures/products/mug-loic-2.png'},
    {title :'Tote Bag - Cyber Security',categorie :'goodies', subtitle :'Tote Bag 100% Coton', price :11.90, description :'Tote bag 100% coton - Dimensions : 38 X 42 cm', img :'/pictures/products/bag-cyber-security-1.png', img2 :'/pictures/products/bag-cyber-security-2.png'},
    
];

let i = document.title;


//const title = document.querySelector('title');
//title.innerHTML = productsInformations[i].title;
const h1 = document.querySelector('h1');
h1.innerHTML = productsInformations[i].title;
const h2 = document.querySelector('h2');
h2.innerHTML = productsInformations[i].subtitle;
const h3 = document.querySelector('h3');
h3.innerHTML = productsInformations[i].description;
const photo = document.querySelector('.photo'); 
photo.src = productsInformations[i].img; 
const vignette = document.querySelector('.photo1'); 
vignette.src = productsInformations[i].img2; 

const product0 = document.querySelector('.big_box'); 
product0.src = productsInformations[10].img;