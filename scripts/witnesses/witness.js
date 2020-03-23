export const Witness = (witnessObject) => {
    return `
    <div class=witnessInfo>
    <h2>${witnessObject.name}</h2>
    <div> ${witnessObject.statements}</div>
    </div>
    `
}
