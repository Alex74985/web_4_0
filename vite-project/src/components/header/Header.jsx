import styles from './header.module.css';
import Nav from "../navigation/nav/Nav.jsx";
import {Button, Input, Switch, Modal} from "antd";
import {useEffect, useState} from "react";
const {Search} = Input;
import Sign_form from "./sign_form.jsx";

const Header = () => {
    const [checked, setCheck] = useState(false);

    useEffect(() => {
        if (checked) document.body.setAttribute('data-theme', 'dark');
        else document.body.setAttribute('data-theme', '')
    }, [checked]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.inner__header}>
                <Nav items={['Главная']}/>
                <div className={styles.features}>
                    <Search className={styles.search} placeholder="input search text" enterButton/>
                    <Switch className={`${checked && styles.switch}`} onChange={() => setCheck(!checked)}/>
                    <Button type="primary" onClick={showModal}>
                        Sign In
                    </Button>
                    <Modal title="Sign In" open={isModalOpen} onCancel={handleCancel}>
                        <Sign_form></Sign_form>
                    </Modal>
                </div>
            </div>
        </header>
    );
}

export default Header;