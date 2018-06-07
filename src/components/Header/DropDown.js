import React from 'react';
import './DropDown.css'

export default (props) => {
    return (
        <div>
            <div className={props.drawerToggle ? 'dropDown' : 'dropDown hiddenDD'}>
                <section className='dropDownContent'>
                    <div>Home</div>
                    <div>Products</div>
                    <div>Blog</div>
                    <div>About</div>
                    <div>Contact US</div>
                </section>
            </div>
        </div>
    )
};
