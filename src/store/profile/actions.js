import { onValue, set } from "firebase/database";
import { userNameRef, userShowNameRef } from "../../services/firebase";

export const  TOGGLE_CHECKBOX = 'PROFILE::TOGGLE_CHECKBOX';
export const SET_NAME = 'PROFILE::SET_NAME';
export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}

export const setName = (name) => ({
    type: SET_NAME,
    payload: name,
})

let unsubscribe;

export const initProfileTrack = () => (dispatch) => {
    const unsubscribeName = onValue(userNameRef, (snapshot) => {
        // console.log(snapshot.val())
        // console.log(snapshot.forEach(child => console.log(child.key, child.val())))
        
        dispatch(setName(snapshot.val()))
    })
    const unsubscribeShowName = onValue(userShowNameRef, () => {
        dispatch(toggleCheckbox)
    })

    unsubscribe = () => {
        unsubscribeName();
        unsubscribeShowName();
    }
}

export const stopProfileTrack = () => (dispatch) => {
    unsubscribe();
}

export const setNameFB = (name) => (dispatch) => {
    set(userNameRef, name)
}

export const setShowNameFB = (value) => () => {
    set(userShowNameRef, value)
}