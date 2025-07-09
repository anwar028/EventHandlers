import React from "react";

const Counter = () => {

const increment = ()=> {0};

const decrement = ()=> {0};


    return (
        <>

            <div className="container mt">

                <div className="row">

                    <div className="col-sm-4">

                        <div className="card">
                            <div className="card-body">
                                <p className="h1">0</p>
                                <button className="btn btn-primary me-2">Increment</button>
                                <button className="btn btn-danger">Decrement</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </>

    )
}

export default Counter;
