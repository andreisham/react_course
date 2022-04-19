import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { setName, toggleCheckbox } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { usePrev } from "../../utils/usePrev";

import './Profile.styles.css'

export const Profile = () => {
    const dispatch = useDispatch();
   
    

    const name = useSelector(selectName);

    const state = useSelector((state) => state.profile);
    
    const handleClick = () => {
        dispatch(toggleCheckbox)
    }

    // предыдущее значение имени
    const prevName = usePrev(name);
    console.log(prevName);

    const handleSubmit = (text) => {
        dispatch(setName(text))
    }

    return (
    <div className="profile">
        <h1>Тут могла быть ваша реклама, но пока тут только сраница профиля</h1>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">show name?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                onChange={handleClick}
                >
                <FormControlLabel value="Show it!"  control={<Radio />} label="Show it!" />
                <FormControlLabel value="Ne show it!" control={<Radio />} label="Ne show it!" />
            </RadioGroup>
        </FormControl>
        {state.showName && <h2>{state.name}</h2>}
        <div className='profile_form'>
            <p>Сменить имя пользователя</p> 
            <Form onSubmit={handleSubmit} />
        </div>
    </div>) 
};