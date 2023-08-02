function toggle(text){
    var blur = document.getElementById('popup')
    blur.classList.toggle('active')
    var blur = document.getElementById(text)
    blur.classList.toggle('active')
    var blurElements = document.getElementsByClassName('blur');
        for (var i = 0; i < blurElements.length; i++) {
            blurElements[i].classList.toggle('active');
        }
    
}
