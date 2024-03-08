const mpd = document.querySelector("#mpd");
const cons = document.querySelector("#cons");
const ongs = document.querySelector(".ongs");
const pbls = document.querySelector(".maispbls");
const btn_ong = document.querySelector("#btn_ong");
const btn_pbl = document.querySelector("#btn_pbl");
const shadow = document.querySelector(".sha");

mpd.addEventListener("mouseover", () => {
    mpd.style.border = "3px solid #20973a"; 
})
mpd.addEventListener("mouseout", () => {
    mpd.style.border = "3px solid #39e65e"; 
})

btn_ong.addEventListener("click", () => {
    if(ongs.style.animationName == "ong") {
    ongs.style.animationName = "ongback";
    shadow.style.animationName = "shatopback";
    setTimeout(() => {
        ongs.style.display = "none";
        shadow.style.display = "none";
    }, 300)
    }
    else {
        ongs.style.animationName = "ong";
        ongs.style.display = "block";
        shadow.style.display = "block";
        shadow.style.animationName = "shatop";
        pbls.style.animationName = "pblsback";
    }
})
btn_pbl.addEventListener("click", () => {
    if(pbls.style.animationName == "pbls") {
    pbls.style.animationName = "pblsback";
    shadow.style.animationName = "shaback";
    setTimeout(() => {
        pbls.style.display = "none";
        shadow.style.display = "none";
    }, 200)
    }
    else {
        pbls.style.animationName = "pbls";
        pbls.style.display = "block";
        shadow.style.display = "block";
        shadow.style.animationName = "sha";
        ongs.style.animationName = "ongback";
    }
})