const mpd = document.querySelector("#mpd");
const cons = document.querySelector("#cons");
const ongs = document.querySelector(".ongs");
const btn_ong = document.querySelector("#btn_ong");

mpd.addEventListener("mouseover", () => {
    mpd.style.border = "3px solid #20973a"; 
})
mpd.addEventListener("mouseout", () => {
    mpd.style.border = "3px solid #39e65e"; 
})

btn_ong.addEventListener("click", () => {
    if(ongs.style.animationName == "ong") {
    ongs.style.animationName = "ongback";
    setTimeout(() => {
        ongs.style.display = "none";
    }, 300)
    }
    else {
        ongs.style.animationName = "ong";
        ongs.style.display = "block";
    }
})