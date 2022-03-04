let cursor = document.getElementById('Mira');

document.addEventListener('mousemove', function(e){
    let elemnt = document.getElementById("Portada");
    if(elemnt.clientWidth > 800){
        let x = e.clientX;
        x -= 310;
        let y = e.clientY;
        y -= 450;
        cursor.style.transform = `translate(${x}px, ${y}px)`;
    }else{
        cursor.style.transform = `translate(0, 0)`;
    }
})

let cursor2 = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor2.style.left = x + "px";
    cursor2.style.top = y + "px";
});

let silueta = document.getElementById("Silueta");

let moverDerecha = () => {
    silueta.style.transform = "scaleX(1.1)";
}

let volver = () => {
    silueta.style.transform = "scaleX(1)";
}


setInterval(moverDerecha, 4000);
setInterval(volver, 4500);

document.querySelectorAll(".st1").forEach(item => {
    // item.addEventListener('click', event => {
    //     item.style.fill="white";
    // })
    item.addEventListener('mouseover', event => {
        item.style.fill="white";
    })
    item.addEventListener('mouseout', event => {
        item.style.fill="#130F08";
    })
})

let fondo = document.querySelector(".st0")
let cuerpo = document.querySelectorAll(".st11").forEach(item => {
    item.addEventListener('click', event => {
        fondo.style.fill="#ff3838";
    })
    item.addEventListener('dblclick', event => {
        fondo.style.fill="#EEC233";
    })
});
