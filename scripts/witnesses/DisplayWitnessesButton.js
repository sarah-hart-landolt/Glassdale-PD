const contentTarget = document.querySelector(".witness__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showAllWitnesses") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const allWitnessesEvent = new CustomEvent("allWitnessesClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(allWitnessesEvent)
    }
})

export const DisplayWitnessesButton = () => {
    contentTarget.innerHTML = "<button id='showAllWitnesses'>Show All Witnesses</button>"
}