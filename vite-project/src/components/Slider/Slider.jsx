import { Carousel } from 'antd';
import style from "./slider.module.css";
import {properties} from "../main/slider.config.js";
import Slide from "./Slide.jsx";

const Slider = () => {
    return (
        <Carousel
            dots={true}
            className={style.wrapper}
            autoplay>
            {properties.map((item, i) => <Slide image={item.image} key={i}/>)}
        </Carousel>
    );
};
export default Slider;