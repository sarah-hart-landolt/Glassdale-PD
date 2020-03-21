import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./criminal.js"

// targets html class 
const contentElement = document.querySelector(".criminalsContainer")
const contentTarget= document.querySelector(".criminalsContainer")
// Get a reference to eventhub that holds html elements.
const eventHub = document.querySelector(".container")

eventHub.addEventListener("allWitnessesClicked", customEvent => {
    contentElement.innerHTML = ""
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
        // Get the id of the criminal that was clicked
        const [junk, criminalId] = clickEvent.target.id.split("--")

        // Yell at the system that a known associates button was clicked
        const showAssociatesEvent = new CustomEvent("knownAssociatesClicked", {
            // Make sure to tell the system exactly which criminal button was clicked
            detail: {
                chosenCriminal: criminalId
            }
        })

        eventHub.dispatchEvent(showAssociatesEvent)
    }
})

// adds an event that is specifically listening for crimeChosen
eventHub.addEventListener('crimeChosen', event => {
    // if in the event, crimeName's value is 0
    if (event.detail.crimeName === '0') {
        // all crimes should populate//
        const criminals = useCriminals()
// clears it 
        contentElement.innerHTML = ""
// looping over the array of objects and printing each object to the page 
        for (const singleCriminal of criminals) {
            contentElement.innerHTML += Criminal(singleCriminal)
        }
// if in the event, the crimeName is not equal to 0
    } else {
        const selectedCrime = event.detail.crimeName
        const criminals = useCriminals()
// filter criminals based on selectedCrime
        const guiltyCriminals = criminals.filter(criminal => {
            if (criminal.conviction === selectedCrime) {
                return true
            }
            return false
        })
// clears it 
        contentElement.innerHTML = ""

        for (const singleCriminal of guiltyCriminals) {
            contentElement.innerHTML += Criminal(singleCriminal)

        }
    }



})

// exports function CriminalList 
export const CriminalList = () => {

    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentElement.innerHTML += Criminal(singleCriminal)
    }

}