import Card from "../card/Card.jsx";
import {properties} from "./card.config.js";
import styles from './main.module.css';
import FloatButtonEdit from "../floatButton/FloatButton.jsx";
import Slider from "../Slider/Slider.jsx";

const Main = () => {
    return (
        <main className={styles.main}>
            <Slider></Slider>
            <section className={styles.cards__list}>
                <div className={styles.cards}>
                    {properties.map((item, i) => <Card title={item.title} desc={item.description} image={item.image} key={i}/>)}
                </div>
                <FloatButtonEdit></FloatButtonEdit>
            </section>
        </main>
    );
}

export default Main;