const restaurantSection = document.getElementById('restaurants');
console.log(restaurantSection)

const h2 = document.querySelector('h2')
console.log(h2)

const requiredElement = document.getElementsByClassName('required')
console.log(requiredElement)


const lis = document.querySelectorAll('li')
lis[0].style.color = 'darkseagreen'
lis[2].innerText = 'Jamboree sandwich at the Jambo-ree'

const cityMuseum = document.createElement('img')
cityMuseum.setAttribute('src', 'https://i.imgur.com/tZNqgYM.jpg')
restaurantSection.appendChild(cityMuseum)

restaurantSection.style.color = 'lightseagreen'

lis[2].remove()

//yay this was great!