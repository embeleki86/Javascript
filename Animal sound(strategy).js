//Part 1
const AnimalSays = {
        dog() {
            return "woof"
        },
        cat() {
            return "meow"
        },
        lion() {
            return "roar"
        },
        snake() {
            return "ssss"
        }
    }
    //Part 2
function makeAnimalSpeak(animal) {
    const speak = AnimalSays[animal]
    AnimalSays.default
    console.log(animal + " says " + speak())
}
//Part3(trigger codes)
makeAnimalSpeak("dog")
makeAnimalSpeak("cat")
makeAnimalSpeak("lion")
makeAnimalSpeak("snake")