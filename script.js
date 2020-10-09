//Variables
const display = document.querySelector('#display')
const walking = document.querySelector('walking')
const driving = document.querySelector('driving')
const flying = document.querySelector('flying')
const distance = document.querySelector('distance')

walking.addEventListener('input', calculateDistance)
driving.addEventListener('input', calculateDistance)
flying.addEventListener('input', calculateDistance)
distance.addEventListener('input', calculateDistance)

const distanceValue = distance.value

function calculateWalk() {
    const walkingValue = walking.value
    const walkingDistance = distanceValue * 4

    display.innerHTML = walkingDistance.toFixed(2)

}
function calculateDrive() {
    const drivingValue = driving.value
    const drivingDistance = distanceValue + 70

    display.innerHTML = drivingDistance.toFixed(2)

}
function calculateFly() {
    const flyingValue = flying.value
    const flyingDistance = distanceValue + 575

    display.innerHTML = flyingDistance.toFixed(2)

}
calculateDistance()

//Event listeners here
