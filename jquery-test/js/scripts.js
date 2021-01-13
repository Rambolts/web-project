var s = 0;
cont = 0;
setInterval(function () {
    $(".j_time").text(s);
    console.log(s);
    s++;
    if (s > 4) {
        s = 0;
        cont++;
    }
    if (cont === 3) {
        cont = 0;
        console.clear();
    }
}, 1000);