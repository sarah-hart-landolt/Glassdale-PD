let criminals = []

export const useCriminals = () => {
    // Sort by criminal last name before the copy happens
    criminals.sort(
        (currentThing, nextThing) => {
            // Get the last name on both objects
            const [currFirstName, currLastName] = currentThing.name.split(" ")
            const [nextFirstName, nextLastName] = nextThing.name.split(" ")

            if (currLastName < nextLastName) { return -1; }
            if (currLastName > nextLastName) { return 1; }
            return 0;
        }
    )

    return criminals.slice()
}


export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.table(parsedCriminals)
                criminals = parsedCriminals
            }
        )
}