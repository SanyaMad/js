const slider = (item, content, right, left) => {
    const benefitItems = document.querySelectorAll(item)
    const benefitsContent = document.querySelector(content)

    let currentSlide = 0


    const checkForInnerWidth = () => {
            benefitItems.forEach((benefitItem, i) => {

                if (window.innerWidth >= 576) {
                    if (i > 2 && content !='#services') {
                        benefitItem.classList.add('not-active')
                       }else if(i > 1 && content == '#services'){
                        benefitItem.classList.add('not-active')   
                       }
                } else {
                   if (i > 0) {
                    benefitItem.classList.add('not-active')
                   }
                }   
            })
    }
    checkForInnerWidth()
    
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass)
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass)
    }

    benefitsContent.addEventListener('click', (e) => {
        
        if (window.innerWidth >= 576) {
            if (e.target.closest(right)) {
                benefitItems.forEach(benefitItem => {
                    if (benefitItem.classList.contains('not-active')) {
                        benefitItem.classList.remove('not-active')
                    } else {
                        benefitItem.classList.add('not-active')
                    }
                })
            }
            if (e.target.closest(left)) {
                benefitItems.forEach(benefitItem => {
                    if (benefitItem.classList.contains('not-active')) {
                        benefitItem.classList.remove('not-active')
                    } else {
                        benefitItem.classList.add('not-active')
                    }
                })
            }
        } else {
            prevSlide(benefitItems, currentSlide, 'not-active')

            if (e.target.closest(right)) {
                currentSlide++
            } else if (e.target.closest(left)) {
                currentSlide--          
            }
            if (currentSlide >= benefitItems.length) {
                currentSlide = 0
            }
            if (currentSlide < 0) {
                currentSlide = benefitItems.length - 1
            }
    
            nextSlide(benefitItems, currentSlide, 'not-active')
        }   
    })
}

export default slider