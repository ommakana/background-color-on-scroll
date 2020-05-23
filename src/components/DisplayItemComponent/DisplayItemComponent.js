import React from "react";
import './DisplayItemComponent.scss'

export const DisplayItemComponent = (props) => {
    const { description, url, urlText, name } = props.data;

    return <div className="item-wrapper">
        <div className="item-container" id={name}>
            <div className={`image-container image-${name}`}>
                {/* <div className="my-svg"></div> */}
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