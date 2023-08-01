function toggle(box){
    var blur = document.getElementById('popup')
    blur.classList.toggle('active')
    var blurElements = document.getElementsByClassName('blur');
        for (var i = 0; i < blurElements.length; i++) {
            blurElements[i].classList.toggle('active');
        }
    console.log('Que cojones',box)
    if(box=='box-1'){
        var blur = document.getElementById('box-1')
        console.log('111111111111')
    }
    if(box=='box-2'){
        var blur = document.getElementById('box-2')
        console.log('222222222222222')
    } 
    if(box=='box-3'){
        var blur = document.getElementById('box-3')
    }     
    blur.classList.toggle('active')

}
