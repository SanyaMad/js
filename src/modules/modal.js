const modal = () => {
    const overlay = document.querySelector('.overlay')
    const headerModalContent = document.querySelector('.header-modal')
    const servicesModal = document.querySelector('.services-modal')

    const closeModal = (element) =>{
        overlay.style.display = ""
        element.style.display = ""
    }
    const openModal = (element) =>{
        overlay.style.display = "block"
        element.style.display = "block"
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.button > .fancyboxModal')) {
            openModal(headerModalContent)
        } else if (
            !e.target.closest('.header-modal') && e.target.closest('.overlay')  ||
            !e.target.closest('.services-modal') && e.target.closest('.overlay') ||
             e.target.closest('.header-modal__close') ||
             e.target.closest('.services-modal__close')
             ) {
            closeModal(headerModalContent)
            closeModal(servicesModal)
        } else if (e.target.closest('.utp-button > .fancyboxModal') || e.target.closest('.service-button > .fancyboxModal')) {
            openModal(servicesModal)
        }
    })
}

export default modal