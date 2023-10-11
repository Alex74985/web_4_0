import {Card as AntCard} from "antd";
import styles from './card.module.css';
import {useState} from "react";

// eslint-disable-next-line react/prop-types
const Card = ({desc, title, image}) => {
    const [isHover, setIsHover] = useState(false);

    const enterHandler = () => {
        setIsHover(true);
    }

    const leaveHandler = () => {
        setIsHover(false);
    }

    return (
        <AntCard
            className={styles.card}
            hoverable
            onMouseEnter={enterHandler}
            onMouseLeave={leaveHandler}
            style={isHover && {transform: 'scale(1.1)'}}
            cover={<img alt="example" src={image} />}>
            <div>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </AntCard>
    )
}

export default Card