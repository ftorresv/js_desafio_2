const img = document.querySelector("#img");
img.addEventListener("click", ()=> {
    if(img.style.border === "2px solid red") {
        img.style.border = "";
    } else {
        img.style.border = "2px solid red";
    }
});
