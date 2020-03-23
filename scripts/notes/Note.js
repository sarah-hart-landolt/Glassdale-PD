export const Note = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <header>
                <h2>${criminalObject.name}</h2>
            </header>
            <p>${noteObject.noteText}</p>
            <p>${new Date(noteObject.timestamp).toLocaleDateString()}</p>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}