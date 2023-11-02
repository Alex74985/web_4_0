import styles from './header.module.css';
import Nav from "../navigation/nav/Nav.jsx";
import {Input, Switch} from "antd";
import {useEffect, useState} from "react";
const {Search} = Input;

const Header = () => {
    const [checked, setCheck] = useState(false);

    useEffect(() => {
        if (checked) document.body.setAttribute('data-theme', 'dark');
        else document.body.setAttribute('data-theme', '')
    }, [checked]);

    return (
        <header className={styles.header}>
            <div className={styles.inner__header}>
                <Nav items={['Главная']}/>
                <div className={styles.features}>
                    <Search className={styles.search} placeholder="input search text" enterButton/>
                    <Switch className={`${checked && styles.switch}`} onChange={() => setCheck(!checked)}/>
                </div>
            </div>
        </header>
    );
}

export default Header;