import { useCriminals } from "./CriminalProvider.js"


const contentTarget = document.querySelector(".knownAssociatesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownAssociatesClicked",customEvent => {
     const criminalId= customEvent.detail.chosenCriminal

     const criminalArray = useCriminals()

     const iFoundYou = criminalArray.find(
         (currentCriminal) => {
             if (currentCriminal.id === parseInt(criminalId)) {
                 return true
             }
             return false
         }
     )
     KnownAssociatesDialog(iFoundYou)

    const myFunnyDialog = document.querySelector("#funny")
    myFunnyDialog.showModal()

    const allCloseButton = document.querySelector("#button--close")
    allCloseButton.addEventListener("click", event => {
        myFunnyDialog.close()
    })
})

export const KnownAssociatesDialog = (criminalObject) => {
    contentTarget.innerHTML = `
        <dialog id="funny">
            ${
                criminalObject.known_associates.map(
                    (currentAssociate) => {
                        return `<div>${currentAssociate.name}</div>`
                    }
                ).join("")
            }
            <br>
            <button id="button--close">Close</button>
        </dialog>
    `
}

