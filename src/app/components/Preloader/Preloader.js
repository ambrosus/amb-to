import React, { Component } from 'react'


import './Preloader.scss';

const Preloader = () => {
    return <div class="asset-preloader">
        <div>
            <div class="asset-preloader__image"></div>
            <div class="asset-preloader__details">
                <div></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="asset-preloader__details">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
}


export default Preloader;