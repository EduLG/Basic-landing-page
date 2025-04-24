import React from "react";

const Jumbotron = ({title, description, lowerDesc, buttonText}) => {

    return (
        <div className="jumbotron">
            <h1 className="display-4">{title}</h1>
            <p className="lead">{description}</p>
            <hr className="my-4"/>
                <p>{lowerDesc}</p>
                <p className="lead">
                    <a className="btn btn-danger btn-lg" href="#" role="button">{buttonText}</a>
                </p>
        </div>
    );
}

export default Jumbotron;