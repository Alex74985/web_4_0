import styles from './navItem.module.css';

// eslint-disable-next-line react/prop-types
const NavItem = ({title}) => {
    return (
        <li className={styles.navItem}>
            {title}
        </li>
    );
}
export default NavItem;