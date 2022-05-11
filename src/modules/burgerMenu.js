const burgerMenu = () => {
    const menu = document.querySelector('#navbar-collapse')

    document.addEventListener('click',(e) =>{
        if (e.target.closest('.navbar-toggle') && (menu.classList.contains('collapse'))){
            menu.classList.remove('collapse')
            menu.classList.add('opened')
        }else if(e.target.closest('.navbar-toggle') && (!menu.classList.contains('collapse'))){
            menu.classList.remove('opened')
            menu.classList.add('collapse')
        }
    })
}

export default burgerMenu