import NavItem from "../navItem/NavItem.jsx";
import styles from './nav.module.css';
// eslint-disable-next-line react/prop-types
const Nav = ({items}) => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {/* eslint-disable-next-line react/prop-types */}
                {items.map((item, i) => <NavItem key={i} title={item}/>)}
            </ul>
        </nav>
    );
}

export default Nav;
