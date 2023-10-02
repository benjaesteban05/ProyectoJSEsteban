const productos = [
    {nombre: "Harina", precio: 280 },
    {nombre: "Galletitas", precio: 230 },
    {nombre: "Leche", precio: 590 },
    {nombre: "Huevos", precio: 400 },
    {nombre: "Azucar", precio: 270 },
    {nombre: "Gaseosa", precio: 550 },
    {nombre: "Jabon", precio: 160 },
    {nombre: "Fideos", precio: 280 },
];

let carrito = [ ]
let edad = prompt ("Bienvenido, por favor ingrese su edad")
if (edad >= 18){
    alert("Bienvenido")
} else{
    alert("Debe ser mayor de edad para ingresar")
}

let seleccion = prompt ("Desea comprar algo?")

while(seleccion != "si" && seleccion !="no"){
    alert("Por favor ingrese si o no")
    seleccion = prompt("Desea comprar algo?")
}
if (seleccion == "si"){
    alert("A continuacion ingrese lo que desea comprar.")
}
else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let productos = prompt("Agregue un producto a su carrito")
    let precio = 0

    if(productos == "Harina" || productos == "Galletitas" || productos == "Leche" || productos == "Huevos" || productos == "Azucar" || productos == "Gaseosa" || productos == "Jabon" || productos == "Fideos"){ 
        switch(productos){
            case "Harina":
            precio = 280
            break;
            case "Galletitas":
            precio = 230
            break;
            case "Leche":
            precio = 590
            break;
            case "Huevos":
            precio = 400
            break;
            case "Azucar":
            precio = 270
            break;
            case "Gaseosa":
            precio = 550
            break;
            case "Jabon":
            precio = 160
            break;
            case "Fideos":
            precio = 280
            break;
            default:
            break;
        }
        let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))
        carrito.push({productos, unidades, precio})
        console.log(carrito)
    } else{
        alert ("No tenemos ese producto")
    }
    seleccion = prompt("Desea seguir comprando?")
    while(seleccion == "no"){
        alert("Gracias por su compra, hasta pronto!")
        break;
    }
}

