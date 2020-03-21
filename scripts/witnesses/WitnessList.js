import { getWitnesses, useWitnesses } from "./WitnessProvider.js"
import { Witness } from "./witness.js"

const contentTarget = document.querySelector(".witnessContainer")
const eventHub = document.querySelector(".container")

let visibility = false

eventHub.addEventListener("allWitnessesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

const render = () => {
    contentTarget.classList.add("invisible")
    getWitnesses().then(() => {
        const allTheWitnesses = useWitnesses()
        contentTarget.innerHTML = allTheWitnesses.map(
            currentWitnessObject => {
                return Witness(currentWitnessObject)
            }
        ).join("")
    })
}

export const WitnessList = () => {
    render()
}