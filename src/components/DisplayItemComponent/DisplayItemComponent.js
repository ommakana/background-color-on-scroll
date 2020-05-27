import React from "react";
import './DisplayItemComponent.scss';
import { firebaseAnalytics } from '../../utils';

export const DisplayItemComponent = (props) => {
    const { description, url, urlText, name } = props.data;

    const fireAnalytics = name => {
        firebaseAnalytics.logEvent('select_content', {
            content_type: name,
            content_id: 'P12453'
          });
    }

    return <div className="item-wrapper">
        <div className="item-container" id={name}>
            <div className={`image-container image-${name}`}>
                {/* <div className="my-svg"></div> */}
            </div>
            <div className="content-wrapper">{description}</div>
        </div>
        <div>
            <a onClick={(name) => fireAnalytics(name)} href={url} target="_blank" rel="noopener noreferrer">
                {urlText}
            </a>
        </div>
    </div>
}