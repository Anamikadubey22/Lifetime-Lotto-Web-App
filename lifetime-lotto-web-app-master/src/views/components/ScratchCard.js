import React from "react";
import { Link } from "react-router-dom";

export default function ScratchCard({props}) {
    return <div className="card filter-none">
        <img src={props.image ? props.image : "assets/images/scratch-cards/scratch-cards-1.jpg"} alt="" style={{height: "30vh"}} />
        <div className="card-body pb-4 px-4">
            <p className="p-label">Multidraw</p>
            <p className="price">Price</p>
            <h4 className="price-amt">${props.price}</h4>
            <h5 className="scrtch-crd-title text-capitalize">{props.name}</h5>
            <Link to={"#"} className="btn btn-outline-info w-100">Buy Now</Link>
        </div>
    </div>
}