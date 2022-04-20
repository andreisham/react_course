import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { onValue, set } from "firebase/database";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { logOut, userNameRef, userRef, userShowNameRef } from "../../services/firebase";
import { initProfileTrack, setName, setNameFB, setShowNameFB, stopProfileTrack, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";

import './Profile.styles.css'

export const Profile = ({}) => {
    const dispatch = useDispatch();

    const name = useSelector(selectName);

    const showName = useSelector(selectShowName);

    // const [name, setName] = useState('')
    // const [showName, setShowName] = useState(false)
    
    const handleClick = () => {
        dispatch(setShowNameFB(!showName))
        // set(userShowNameRef, !showName);
    } 

    // предыдущее значение имени
    const prevName = usePrev(name);
    console.log(prevName);

    const handleSubmit = (text) => {
        dispatch(setNameFB(text))
        // set(userNameRef, text);
    }

    useEffect(() => {
        dispatch(initProfileTrack())
        // const unsubscribeName = onValue(userNameRef, (snapshot) => {
        //     // console.log(snapshot.val())
        //     // console.log(snapshot.forEach(child => console.log(child.key, child.val())))
            
        //     setName(snapshot.val())
        // })
        // const unsubscribeShowName = onValue(userShowNameRef, (snapshot) => {
        //     setShowName(snapshot.val())

        // })
        return () => {
            dispatch(stopProfileTrack())
        };
    }, [])

    return (
    <div className="profile">
        <h1>Тут могла быть ваша реклама, но пока тут только сраница профиля</h1>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">show name?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Ne show it!"
                name="radio-buttons-group"
                onChange={handleClick}
                >
                <FormControlLabel value="Show it!" control={<Radio />} label="Show it!" />
                <FormControlLabel value="Ne show it!" control={<Radio />} label="Ne show it!" />
            </RadioGroup>
        </FormControl>
        {/* {state.showName && <h2>{state.name}</h2>} */}
        {showName && <h2>{name}</h2>}
        <div className='profile_form'>
            <p>Сменить имя пользователя</p> 
            <Form onSubmit={handleSubmit} />
        </div>
        <button onClick={logOut}>Logout</button>
    </div>) 
};