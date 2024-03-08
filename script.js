const mpd = document.querySelector("#mpd");
const cons = document.querySelector("#cons");
const ongs = document.querySelector(".ongs");
const pbls = document.querySelector(".maispbls");
const btn_ong = document.querySelector("#btn_ong");
const btn_pbl = document.querySelector("#btn_pbl");

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
btn_pbl.addEventListener("click", () => {
    if(pbls.style.animationName == "pbls") {
    pbls.style.animationName = "pblsback";
    setTimeout(() => {
        pbls.style.display = "none";
    }, 400)
    }
    else {
        pbls.style.animationName = "pbls";
        pbls.style.display = "block";
    }
})