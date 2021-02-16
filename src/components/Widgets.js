import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Signal is upcoming app', "Top news - 9099 reader")}
            {newsArticle('Bitcoin breaks 30k', "Crypto - 1099 reader")}
            {newsArticle('Tesla hits new high', "Cars and Auto - 1003 reader")}
            {newsArticle('Redux or Context?', "Technology - 3008 reader")}
        </div>
    )
}

export default Widgets
