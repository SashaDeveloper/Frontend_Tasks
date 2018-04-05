//Функція для відображення фото
function on(_src, _alt) {

    var searchedDiv = document.getElementById("overlay");
    searchedDiv.innerHTML = null;
    searchedDiv.style.display = "block";

    var divHeader = document.createElement("div");

    var imgClose = document.createElement("img");
    imgClose.setAttribute("class", "img-close");
    imgClose.setAttribute("src", "img/close-icon.png");
    imgClose.setAttribute("alt", "Close button");
    imgClose.setAttribute("onclick", "off()");

    var h1HeaderText = document.createElement("h1");
    h1HeaderText.appendChild(document.createTextNode(_alt));
    divHeader.appendChild(imgClose);
    divHeader.appendChild(h1HeaderText);
    searchedDiv.appendChild(divHeader);

    var imgShowed = document.createElement("img");
    imgShowed.setAttribute("class", "img-default");
    imgShowed.setAttribute("src", _src);
    imgShowed.setAttribute("alt", _alt);
    searchedDiv.appendChild(imgShowed);

    addUrlToHistory();
}

//Функція для додавання url адреси до історії перегляду
function addUrlToHistory() {
    history.pushState('Object', 'Title', "ShowPhoto.html");
}

//Функція для приховування фото
function off() {
    document.getElementById("overlay").style.display = "none";
    history.replaceState('Object', 'Title', "index.html");
}

//Функція для реагування на дії користувача, пов*язані з історією
window.onpopstate = function () {
    if (document.location.pathname.search("index.html") != -1) {
        /*  alert(document.location.pathname.search("index.html"))*/
        off();
    }
    else {
        /*alert("Else: " + document.location.pathname)*/
        document.getElementById("overlay").style.display = "block";
    }
}