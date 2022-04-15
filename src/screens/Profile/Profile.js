import { FormControl, FormControlLabel, FormLabel, InputLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state)
    const handleClick = () => {
        dispatch(toggleCheckbox)
    }
    return (
    <>
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
    </>) 
};