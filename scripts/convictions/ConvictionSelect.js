import { useConvictions } from "./ConvictionProvider.js"

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the content target, listen for a "change" event.
contentTarget.addEventListener("change", changeEvent => {

    // Only do this if the `crimeSelect` element was changed
    if (changeEvent.target.id.startsWith("crimeSelect")) {
        const selectedCrime = changeEvent.target.value 
        // Create custom event. Provide an appropriate name.
        const crimeChosenEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeName: selectedCrime
            }
        })
        // Dispatch to event hub
        eventHub.dispatchEvent(crimeChosenEvent)
    }
})


const render = convictionsCollection => {
    contentTarget.innerHTML = `
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


export const ConvictionSelect = () => {
    const convictions = useConvictions()
    render(convictions)
}
