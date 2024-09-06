let listadoItem = []

document.getElementById("agregar").addEventListener('click', function() {
    let nuevoItem = document.getElementById("item").value
    if (nuevoItem){
        listadoItem.push(nuevoItem);
        localStorage.setItem("items",JSON.stringify(listadoItem));
        console.log(listadoItem)
    }
    mostrarEnPantalla();
    document.getElementById("item").value = " ";
})

function mostrarEnPantalla(){
    let mostrar = document.getElementById("contenedor");
    mostrar.innerHTML = " ";
    listadoItem.forEach((elemento)=>{
        mostrar.innerHTML += `<p>${elemento}</p>`

    })
}
