if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.getElementById("invision").style.display = "none";
    document.getElementById("error").style.display = "block";
} else {
    document.getElementById("invision").style.display = "block";
    document.getElementById("error").style.display = "none";
}