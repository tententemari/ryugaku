var header_title = document.getElementById('header-title');
var dist = 40;

function hideTitle() {
    if (dist < document.documentElement.scrollTop || document.body.scrollTop) {
        header_title.style.display = "none";
    } else {
        header_title.style.display = "block";
    }
}

window.onscroll = hideTitle;
