import React, {useState} from "react";
import {Switch as S} from "antd";


const Switch = () => {
    const [theme, setTheme] = useState('light');

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <S
            checked={theme === 'dark'}
            onChange={changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"/>
    )
}

export default Switch
