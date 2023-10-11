import React, {useState} from "react";
import {Switch as S} from "antd";
import {useContext} from "react";
import {ThemeContext} from "../ContextProvider.jsx";


const Switch = () => {
    const [themee, setTheme] = useState('light');

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
        test();
    };

    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkMode;

    const test = () => {
        if (darkmode) {
            theme.dispatch({type: "LIGHTMODE"});
        }
        else {
            theme.dispatch({type: "DARKMODE"})
        }
        console.log(darkmode)
    };

    return (
        <S
            checked={themee === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"/>
    )
}

export default Switch
