import { useConvictions } from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
// where content is going to --referencing html
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id.startsWith("crimeSelect")) {
        const selectedCrime = changeEvent.target.value 
        // Created custom event called crimeChosenEvent.
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeName: selectedCrime
            }
        })
        // Dispatch to custom event to event hub
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})
// renders any collection of convictions 
const render = convictionsCollection => {
    contentTarget.innerHTML = 
    // sets value of Please select crime to zero then maps over the array of crimes and returns an option which renders just a single crime name 
    `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>  
        ${
            convictionsCollection.map(singleConviction => {
                return `<option>${singleConviction.name}</option>`
            })
        }
 
        </select>
    `
}

// exports the function ConvictionSelect 
// this is the main component which renders all convictions 
export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}
