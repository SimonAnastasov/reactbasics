import React from "react";

function Product(props) {


    if (!props || !props.src) {

    }
    else {
        return (
            <div className="product">
                <img src={props.src} alt="img"/>
                <p>Name: {props.name}</p>
                <p>Cost: {props.cost}</p>
            </div>  
        )
    }

}

export default Product;