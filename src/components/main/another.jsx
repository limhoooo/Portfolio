import React from 'react';

const Another = (props) => {
    return (
        <section className="sectionBox">
            <h1 className="titleText">Another</h1>
            <div className='w80p mgCenter'>
                <div className='AnotherItem'>
                    <span className='github'></span>
                    <p>
                        <a href="https://github.com/limhoooo" target="_blank">https://github.com/limhoooo</a>
                    </p>
                </div>
                <div className='AnotherItem'>
                    <span className='tistory'></span>
                    <p>
                        <a href="https://limhoooo.tistory.com" target="_blank">https://limhoooo.tistory.com</a>
                    </p>
                </div>
            </div>
        </section>
    )
};

export default Another;