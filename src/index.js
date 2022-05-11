import modal from "./modules/modal"
import slider from "./modules/slider"
import scroll from "./modules/scrollBtn"
import timer from "./modules/timer"
import calculator from './modules/calculator'
// import sliderTwo from './modules/sliderTwo'
import modalImg from './modules/modalImg'
import send from './modules/send'
import burgerMenu from './modules/burgerMenu'


modal()
slider('.benefits__item','#benefits','.benefits__arrow--right','.benefits__arrow--left')
slider('.col-md-12.col-lg-6','#services','.services__arrow--right','.services__arrow--left')
scroll()
timer('15 may 2022')
calculator()
// sliderTwo()
modalImg()
burgerMenu()



const forms = document.querySelectorAll('form')
forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        form.id = `form${index}`
        send({
            formId: `form${index}`,
            someElem: [
                {
                    type: 'block',
                    id: 'calc-total'
                }
            ] 
        })
    })
})

