import { Carousel } from 'antd';
import style from "./slider.module.css";

const Slider = () => {
    return (
        <Carousel dots={true} className={style.wrapper}>
            <div>
                <h3 className={style.slider}>1</h3>
            </div>
            <div>
                <h3 className={style.slider}>2</h3>
            </div>
            <div>
                <h3 className={style.slider}>3</h3>
            </div>
            <div>
                <h3 className={style.slider}>4</h3>
            </div>
        </Carousel>
    );
};
export default Slider;