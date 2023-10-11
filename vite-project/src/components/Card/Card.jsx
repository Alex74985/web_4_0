import {Card as C} from "antd";
import Meta from "antd/es/card/Meta.js";
import {useContext, useState} from "react";
import {ThemeContext} from "../../ContextProvider.jsx";
import style from './content.module.css';


const Card = ({desc, title, image, index}) => {
    const  [scale, setScale] = useState(false);
    const theme = useContext(ThemeContext);
    const darkmode = theme.state.darkMode;


    const darkStyleMeta = {
        color: 'white'
    }

    const  lightStyleMeta = {
        color: 'black'
    }

    return (
        <C
            key={index}
            hoverable
            onMouseEnter={() => setScale(true)}
            onMouseLeave={ () => setScale(false)}
            className={`${darkmode && style.dark} ${style.base}`}
            cover={<img alt="example" src={image} />}>
            <div style={darkmode ? darkStyleMeta : lightStyleMeta}>
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
        </C>
    )
}

export default Card