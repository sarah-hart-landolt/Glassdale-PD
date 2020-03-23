import { getNotes, useNotes, deleteNote } from "./NoteDataProvide.js"
import { Note } from "./Note.js"
import { useCriminals } from "../criminals/CriminalProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

/*
    State variables
*/
let visibility = false

/*
    Event handlers
*/
eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       
        deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               render(updatedNotes)
           }
       )
    }
})

const render = (allTheNotes, criminalCollection) => {
    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }

    getNotes().then(() => {
        const allTheNotes = useNotes().reverse()
        const criminalCollection= useCriminals()
        
        contentTarget.innerHTML = allTheNotes.map(currentNoteObject => {
            const relatedCriminal = criminalCollection.find(criminalObject => criminalObject.id === currentNoteObject.criminalId)    
            return Note(currentNoteObject, relatedCriminal)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}