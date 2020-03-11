import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./criminal.js"

const contentElement = document.querySelector(".criminalsContainer")
    const eventHub = document.querySelector(".container")
    
eventHub.addEventListener('crimeChosen', event => {

const criminals = useCriminals()
    
const selectedCrime = event.detail.crimeName

const guiltyCriminals= criminals.filter(criminal => {
        if (criminal.conviction === selectedCrime){
         return true
     }
    return false 
    })
    
    contentElement.innerHTML= ""

    for (const singleCriminal of guiltyCriminals) {
        contentElement.innerHTML += Criminal(singleCriminal)
   
       }
})


export const CriminalList = () => {

    const criminals = useCriminals()

    for (const singleCriminal of criminals){
     contentElement.innerHTML += Criminal(singleCriminal)
    }
    
    }