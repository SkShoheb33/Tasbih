let count = parseInt(document.getElementById("count").innerHTML);
sound = new Audio();
sound.src = "JS\\Assets\\100countSound.mp3";
incrSound = new Audio();
incrSound.src = "JS\\Assets\\incrSoundOriginal.mp3"
incriment = () => {
    count += 1;
    document.getElementById("count").innerHTML = count;
    if (count % 100 === 0)
        sound.play();
    else
        incrSound.play();
}
decriment = () => {
    if (count > 0) {
        count -= 1;
        document.getElementById("count").innerHTML = count;
    }
}
reset = () => {
    if (count > 0)
        window.alert("Do you want to reset");
    count = 0;
    document.getElementById("count").innerHTML = count;
}