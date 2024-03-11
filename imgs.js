const fechar = document.querySelector("#fechar");
const fullimg = document.querySelector(".fullimg");
const imgn1 = document.querySelector("#imgn1");
const img_1 = document.querySelector("#img_1");
const img_2 = document.querySelector("#img_2");
const img_3 = document.querySelector("#img_3");
const setae = document.querySelector(".setae");
const setad = document.querySelector(".setad");
const mpdgf = document.querySelector("#mpdgf");
const gf = document.querySelector("#gf");

let imgsc = 1;

fechar.addEventListener("click", () => {
    fullimg.style.animationName = "imgback";
    setTimeout(() => {
    fullimg.style.display = "none";
    }, 400)
})

mpd.addEventListener("click", () => {
    fullimg.style.display = "flex";
    fullimg.style.animationName = "img";
    imgn1.src = "mapa.png";
    img_1.style.boxShadow = "0px 0px 3px 3px #009900";
    img_2.style.boxShadow = "";
    img_3.style.boxShadow = "";
    imgsc = 1;
})

mpdgf.addEventListener("click", () => {
    fullimg.style.display = "flex";
    fullimg.style.animationName = "img";
    imgn1.src = "mapagf.gif";
    img_2.style.boxShadow = "0px 0px 3px 3px #009900";
    img_3.style.boxShadow = "";
    img_1.style.boxShadow = "";
    imgsc = 2;
})

gf.addEventListener("click", () => {
    fullimg.style.display = "flex";
    fullimg.style.animationName = "img";
    imgn1.src = "grafico.jpg";
    img_3.style.boxShadow = "0px 0px 3px 3px #009900";
    img_1.style.boxShadow = "";
    img_2.style.boxShadow = "";
    imgsc = 3;
})

img_1.addEventListener("click", () => {
    imgn1.src = "mapa.png";
    img_1.style.boxShadow = "0px 0px 3px 3px #009900";
    img_2.style.boxShadow = "";
    img_3.style.boxShadow = "";
    imgsc = 1;
})

img_2.addEventListener("click", () => {
    imgn1.src = "mapagf.gif";
    img_2.style.boxShadow = "0px 0px 3px 3px #009900";
    img_1.style.boxShadow = "";
    img_3.style.boxShadow = "";
    imgsc = 2;
})

img_3.addEventListener("click", () => {
    imgn1.src = "grafico.jpg";
    img_3.style.boxShadow = "0px 0px 3px 3px #009900";
    img_2.style.boxShadow = "";
    img_1.style.boxShadow = "";
    imgsc = 3;
})

setae.addEventListener("click", () => {
    switch (true) {
        case (imgsc == 1):
            imgn1.src = "grafico.jpg";
            imgsc = 3;
            img_3.style.boxShadow = "0px 0px 3px 3px #009900";
            img_2.style.boxShadow = "";
            img_1.style.boxShadow = "";
            break;
        case (imgsc == 2):
            imgn1.src = "mapa.png";
            imgsc = 1;
            img_1.style.boxShadow = "0px 0px 3px 3px #009900";
            img_2.style.boxShadow = "";
            img_3.style.boxShadow = "";
            break;
        case (imgsc == 3):
            imgn1.src = "mapagf.gif";
            imgsc = 2;
            img_2.style.boxShadow = "0px 0px 3px 3px #009900";
            img_1.style.boxShadow = "";
            img_3.style.boxShadow = "";
        break;
    }
})

setad.addEventListener("click", () => {
    switch (true) {
        case (imgsc == 1):
            imgn1.src = "mapagf.gif";
            imgsc = 2;
            img_2.style.boxShadow = "0px 0px 3px 3px #009900";
            img_1.style.boxShadow = "";
            img_3.style.boxShadow = "";
            break;
        case (imgsc == 2):
            imgn1.src = "grafico.jpg";
            imgsc = 3;
            img_3.style.boxShadow = "0px 0px 3px 3px #009900";
            img_2.style.boxShadow = "";
            img_1.style.boxShadow = "";
            break;
        case (imgsc == 3):
            imgn1.src = "mapa.png";
            imgsc = 1;
            img_1.style.boxShadow = "0px 0px 3px 3px #009900";
            img_2.style.boxShadow = "";
            img_3.style.boxShadow = "";
        break;
    }
})