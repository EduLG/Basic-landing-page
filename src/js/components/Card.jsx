import React from "react";

const Card = ({src, title, description, button}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={src} className="card-img-top" alt="sick foto" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">{button}</a>
            </div>
        </div>
    );
}

export default Card;