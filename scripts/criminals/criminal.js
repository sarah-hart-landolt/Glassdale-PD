const Criminal = (criminalObject) => {
    return `
    <div class=criminalsInfo>
     <h2>${criminalObject.name}</h2>
     <div> ${criminalObject.age}</div>
     <div>${criminalObject.conviction}</div>
     <h2>Incarcertion</h2>
     <div> From: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
     <div> To:  ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
    </div>
    `
}

export default Criminal