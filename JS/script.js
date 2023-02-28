let count = parseInt(document.getElementById("count").innerHTML);
incriment = () => {
    count += 1;
    document.getElementById("count").innerHTML = count;
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