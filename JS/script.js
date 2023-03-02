let count = parseInt(document.getElementById("count").innerHTML);
sound = new Audio();
sound.src = "JS\\Assets\\100countSound.mp3";
incrSound = new Audio();
incrSound.src = "JS\\Assets\\incrSoundOriginal.mp3"
displayTime = () => {

    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleString();
}
setInterval(
    displayTime,
    1000
)
incriment = () => {
    count += 1;
    if (count % 100 === 0)
        sound.play();
    else
        incrSound.play();
    document.getElementById("count").innerHTML = count;
}
decriment = () => {
    if (count > 0) {
        count -= 1;
        document.getElementById("count").innerHTML = count;
    }
}
reset = () => {
    count = 0;
    document.getElementById("count").innerHTML = count;
}

closeMenu = () => {
    let menu = document.getElementById("menu");
    menu.style.display = "none";
    let open = document.getElementById("open");
    open.style.display = "block";
}
openMenu = () => {
    let menu = document.getElementById("menu");
    let open = document.getElementById("open");
    open.style.display = "none";
    menu.style.display = "flex";
}