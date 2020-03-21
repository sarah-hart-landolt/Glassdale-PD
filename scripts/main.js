import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import {CriminalList} from "./criminals/CriminalList.js";
import {ConvictionSelect} from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import NoteForm from "./notes/NoteForm.js";
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js";
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js";
import "./notes/NoteList.js"
import { NotesList } from "./notes/NoteList.js";
import "./criminals/KnownAssociatesDialog.js"
import { WitnessList } from "./witnesses/WitnessList.js";
import { DisplayWitnessesButton } from "./witnesses/DisplayWitnessesButton.js";




getOfficers()
getCriminals().then(()=>NoteForm()).then(()=>CriminalList()).then(()=>getConvictions()).then(()=>ConvictionSelect())
DisplayNotesButton()
DisplayNoteFormButton()
NotesList()
WitnessList()
DisplayWitnessesButton()
