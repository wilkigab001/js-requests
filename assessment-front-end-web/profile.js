let color = document.querySelector('#color')
let place = document.querySelector('#place')
let ritual = document.querySelector('#ritual')

const colorTrigger = (event) => {
    event.preventDefault()
    alert('Your favorite color is Magenta')
} 
const placeTrigger = (event) => {
    event.preventDefault()
    alert('Your favorite place is Havasupai in Arizona')
} 
const ritualTrigger = (event) => {
    event.preventDefault()
    alert('Your favorite ritual is waking up and laying in bed for 20 minutes contemplating if its worth it to wake up')
} 


color.addEventListener('click',colorTrigger)
place.addEventListener('click',placeTrigger)
ritual.addEventListener('click',ritualTrigger)