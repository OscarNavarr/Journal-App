import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from "./journalSlice";

export const startNewNote = () => {
    return async( dispatch, getState ) => {

        //uid
        const { uid } = getState().auth;
        dispatch( savingNewNote);

        const newNote = {
            title: '',
            body:'',
            date: new Date().getTime(),
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/journal/notes`));
        await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;

        dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote(newNote));

    }
}

export const startLoadingNote = () => {
    return async(dispatch, getState ) => {

        const { uid } = getState().auth;
        if ( !uid) throw new Error('El UID del usuario no existe');
        const notes = await loadNotes(uid);
        dispatch( setNotes( notes ) );
    }
}