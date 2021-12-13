import React from 'react';
//import { useState } from 'react';
//import { useEffect } from 'react';

const HomeBanner = (props) => {
    //const [popuToggle, setPopuToggle] = useState(false)
    //const [popupWidth, setPopupWidth] = useState(null)
    // useEffect(() => {
    //     setTimeout(() => {
    //         setPopuToggle(true)
    //     }, 2000)
    //     if (popuToggle) setPopupWidth('popupWidth')
    //     // popuToggle 변경될시에만 재랜더링
    // }, [popuToggle])
    return (
        <section className="sectionBox">
            {/* {
                popuToggle &&
                <div className={`${popupWidth} popup`}>
                    <span>
                        <i className="fas fa-angle-double-down"></i>
                    </span>
                </div>
            } */}

            <div className="homeBannerBox">

                <div className="protFolioBox">
                    <h1 className="text text1">PORT</h1>
                    <h1 className="text text2">FOLIO</h1>
                    <h1 className="text text3">FRONTEND</h1>
                    <h1 className="text text1">LIMHO</h1>
                </div>
            </div>
        </section>
    )
};

export default HomeBanner;