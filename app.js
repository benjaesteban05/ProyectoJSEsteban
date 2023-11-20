const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modal-container")
const cantidadCarrito = document.getElementById("cantidadCarrito")

const productos = [];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async () => {
    const response = await fetch("data.json");
    const data = await response.json();


    data.forEach((products)=> {
        let content = document.createElement("div")
        content.className = "productos"
        content.innerHTML = `
        <img src="${products.img}">
        <h3>${products.nombre}</h3>
        <p class="precio">${products.precio} $</p>
        `;
    
        shopContent.append(content);
        
        let comprar = document.createElement("button");
        comprar.innerText = "comprar"
        comprar.className = "comprar"
        
        content.append(comprar);
    
        comprar.addEventListener("click" , () =>{
        const repeat = carrito.some((repeatProducts) => repeatProducts.id === products.id) 
        
        if(repeat){
            carrito.map((prod) => {
                if (prod.id == products.id) {
                    prod.cantidad++;
                }
            });
        } else{
        carrito.push({
                id : products.id,
                img : products.img,
                nombre : products.nombre,
                precio : products.precio,
                cantidad: products.cantidad,
            });
            console.log(carrito)
            console.log(carrito.length)
            carritoCounter()
            saveLocal();
        }
        });
    });

};

getProducts();


const pintarCarrito = () => {
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
            <span class="restar"> - </span>
            <p>Cantidad: ${products.cantidad}</p>
            <span class="sumar"> + </span>
            <P>Total: ${products.cantidad * products.precio}</P>
            <span class="delete-product"> ❌ </span>
        `;

        modalContainer.append(carritoContent);

        let restar = carritoContent.querySelector(".restar")
        
        restar.addEventListener("click", () => {
            if(products.cantidad !== 1){
            products.cantidad--;
        }
            saveLocal()
            pintarCarrito()
        });

        let sumar = carritoContent.querySelector(".sumar")
        sumar.addEventListener("click", () => {
            products.cantidad++;
            saveLocal()
            pintarCarrito()
        });

        let eliminar = carritoContent.querySelector(".delete-product");

        eliminar.addEventListener("click", () => {
            eliminarProducto(products.id);
        })
    // let eliminar = document.createElement("span");
    // eliminar.innerText = "❌";
    // eliminar.className = "delete-product";
    // carritoContent.append(eliminar);

    // eliminar.addEventListener("click", eliminarProducto);
    });

const total = carrito.reduce((acc, el) => acc+ el.precio * el.cantidad, 0);

const totalCompra = document.createElement("div")
totalCompra.className = "total-content"
totalCompra.innerHTML = `Total a pagar: ${total} $`;
modalContainer. append(totalCompra)
};

verCarrito.addEventListener("click", pintarCarrito); 

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    saveLocal();
    pintarCarrito();
};

const carritoCounter = ()=> {
    cantidadCarrito.style.display = "block";

const carritoLength = carrito.length;

localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
};

carritoCounter();

const saveLocal = () => {
    localStorage.setItem("carrito",JSON.stringify (carrito));
}

