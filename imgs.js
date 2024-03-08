const fechar = document.querySelector("#fechar");
const fullimg = document.querySelector(".fullimg");

fechar.addEventListener("click", () => {
    fullimg.style.display = "none";
})

mpd.addEventListener("click", () => {
    fullimg.style.display = "flex";
})