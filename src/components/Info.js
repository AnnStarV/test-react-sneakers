import React from "react";
import AppContext from '../context';

const Info = ({ title, description, image, buttonText }) => {

    const {setCartOpened} = React.useContext(AppContext);

    return (
        <div className="cartEmpty">
            <div className="cartEmptyWrapper">
                <img width="120px" src={image} alt="empty-cart" />
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={() => setCartOpened(false)}>
                    <img src={"/assets/images/arrow.svg"} alt="arrow" />
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default Info;