import { getOfficers } from "./officers/OfficerProvider.js";
import { getCriminals } from "./criminals/CriminalProvider.js";
import {CriminalList} from "./criminals/CriminalList.js";
import {ConvictionSelect} from "./convictions/ConvictionSelect.js";
import { getConvictions } from "./convictions/ConvictionProvider.js";
import NoteForm from "./notes/NoteForm.js";


getOfficers()
getCriminals().then(()=>NoteForm()).then(()=>CriminalList()).then(()=>getConvictions()).then(()=>ConvictionSelect())
