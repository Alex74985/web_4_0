import style from "./slider.module.css";

// eslint-disable-next-line react/prop-types
const Slide = ({image}) => {
    return (
        <div>
            <h3 className={style.slider}>
                <img alt='example' src={image}/>
            </h3>
        </div>
    );
};
export default Slide;