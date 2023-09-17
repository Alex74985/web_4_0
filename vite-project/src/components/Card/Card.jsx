import {Card as C} from "antd";
import Meta from "antd/es/card/Meta.js";


const Card = ({desc, title, image, index}) => {

    return (
        <C
            key={index}
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={image} />}>
            <Meta description={desc} title={title}/>
        </C>
    )
}

export default Card