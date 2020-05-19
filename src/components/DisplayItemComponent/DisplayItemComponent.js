import React from "react";
import './DisplayItemComponent.scss'

export const DisplayItemComponent = (props) => {
    const { image, description, url, urlText, name } = props.data;

    return <div className="item-wrapper">
        <div className="item-container">
            <div className="image-container">
                {/* <img src='../../assets/icons8-instagram.svg' alt={name} /> */}
            </div>
            <div className="content-wrapper">{description}</div>
        </div>
        <div>
            <a href={url} target="_blank" rel="noopener noreferrer">
                {urlText}
            </a>
        </div>
    </div>
}