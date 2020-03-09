import { useCriminals } from "./CriminalProvider.js"
import Criminal from "./criminal.js"

const CriminalList = () => {

    const contentElement = document.querySelector(".criminalsContainer")
    
    const criminalObjectArray = useCriminals()

    for (const criminalObject of criminalObjectArray) {
     const criminalHTMLRepresentation= Criminal(criminalObject)

     contentElement.innerHTML += criminalHTMLRepresentation
    }
    
    }

    export default CriminalList