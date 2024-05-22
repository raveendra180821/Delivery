import React from "react";
import {assets} from '../../assets/assets'

import "./appDownload.css"

const AppDownload = () => {

    return(
        <div className="app-download" id="appDownload">
            <h1>For Better Experiance Download <br/>The App</h1>
            <div className="appstore-playstore">
                <img src={assets.play_store} alt="playstore" />
                <img src={assets.app_store} alt="appstore" />
            </div>
        </div>
    )
}

export default AppDownload