let myArray = ['Olive Garden', 'Station 22', 'ruth Chris', 'mcdonalds', 'La jolla Groves', 'Block', 'Communal', 'chom']

let submit = document.querySelector('#restaurantGenerator')

const randomRestaurant =(myArray, event) => {
    const randomElement = myArray[Math.floor(Math.random() *myArray.length)]
    console.log(randomElement)
    alert(`You should go to ${randomElement}`)
    event.preventDefault()
}

submit.addEventListener('submit', randomRestaurant(myArray, event))