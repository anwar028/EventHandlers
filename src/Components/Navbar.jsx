import React from "react";

const Navbar = (props) => {


    return (

        <>

            <nav className={`navbar ${props.color}`}>
                <div className="container fluid">

                    <h3>EventHandler</h3>

                </div>
            </nav>
        </>

    )
}

export default Navbar;