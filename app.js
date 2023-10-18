const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")

const productos = [
    {
        id: 1,
        nombre: "Harina",
        precio: 460,
        img:"https://acdn.mitiendanube.com/stores/001/267/442/products/7792180139313_02-photoroom1-c91ec989b6b8ea789216894436656599-1024-1024.webp"
    },
    {
        id: 2,
        nombre: "Arroz",
        precio: 350,
        img:"https://media.f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/2/0/2020-08-14_r01_molinos_ala_doble_carolina_frente-xzhh_akzn-transformed.png"
    },
    {
        id: 3,
        nombre: "Aceite de oliva",
        precio: 890,
        img:"https://granjaselpato.com.ar/wp-content/uploads/2021/06/aceite-oliva-finca-sagrada-500ml-1.jpg"
    },
    {
        id: 4,
        nombre: "Galletitas",
        precio: 750,
        img:"https://elviejoparisvirtual.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBOU5CQ0E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--64c759bfc4707b59e889bec156b11bb4eed2fa9d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oUnlaWE5wZW1WZmRHOWZiR2x0YVhSYkIya0NXQUpwQWxnQyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--821afe8460fe07e94582d7e96e8707ec016a9675/galleta-oreo-original-fca80eea-3592-4a9d-abb6-ecac20283ce7.jpg?locale=es"
    },
    {
        id: 5,
        nombre: "Leche",
        precio: 1200,
        img:"https://acdn.mitiendanube.com/stores/093/780/products/serenisima-clasica-751-95fea92d1a27f8e9ab15710914346750-1024-1024.webp"
    },
    {
        id: 6,
        nombre: "Pan lactal",
        precio: 600,
        img:"https://www.superacasa.com.ar/3095-large_default/pan-lactal-pan-de-mesa-rf-1p-500g-bolsa-lac.jpg"
    }
];

let carrito = [];

productos.forEach((products)=> {
    let content = document.createElement("div")
    content.className = "productos"
    content.innerHTML = `
    <img src="${products.img}">
    <h3>${products.nombre}</h3>
    <p class="precio">${products.precio} $</p>
    `;

    shopContent.append(content)
    let comprar = document.createElement("button");
    comprar.innerText = "comprar"
    comprar.className = "comprar"
    
    content.append(comprar);

    comprar.addEventListener("click" , () =>{
        carrito.push({
            id : products.id,
            img : products.img,
            nombre : products.nombre,
            precio : products.precio,
        })
        console.log(carrito)
    })
});

verCarrito.addEventListener("click" , () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-tittle">Carrito</h1>
    `;
    modalContainer.append(modalHeader);

    const modalButton = document.createElement("h2");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";

    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    modalHeader.append(modalButton);

    carrito.forEach((products) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${products.img}">
            <h3>${products.nombre}</h3>
            <p>${products.precio} $</p>
        `;

        modalContainer.append(carritoContent)
    })

const total = carrito.reduce((acc, el) => acc+ el.precio, 0);

const totalCompra = document.createElement("div")
totalCompra.className = "total-content"
totalCompra.innerHTML = `Total a pagar: ${total} $`;
modalContainer. append(totalCompra)
});