import { getNotes, useNotes } from "./NoteDataProvide.js"
import { Note } from "./Note.js"

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

const render = () => {
    contentTarget.classList.add("invisible")

    getNotes().then(() => {
        const allTheNotes = useNotes().reverse()

        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return Note(currentNoteObject)
            }
        ).join("")
    })
}

export const NotesList = () => {
    render()
}