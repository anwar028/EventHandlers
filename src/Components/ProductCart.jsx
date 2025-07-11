import React, { useState } from "react";
import { ProductSerice } from "../Services/ProductServices";

const ProductCart = () => {
    const [watches, setWatches] = useState(ProductSerice.getAllProducts());

    const incr = (productId) => {

        const p = watches.map((watch) => {

            if (watch.id === productId) {

                return {
                    ...watch,
                    qty: watch.qty + 1
                };
            }
            return watch;
        });
        setWatches(p);
    };

    const decr = (productId) => {

        const p = watches.map((watch) => {

            if (watch.id === productId) {

                return {
                    ...watch,
                    qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1,
                };
            }
            return watch;
        });
        setWatches(p)
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h2 text-bg-primary">WatchCart</p>
                        <div className="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nam?</div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-striped table-hover">
                            <thead className="bg-light text-dark">
                                <tr>
                                    <th>S:No</th>
                                    <th>Product</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th>UnitPrice</th>
                                    <th>SelectQty</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    watches.map((watch, id) => {

                                        return (
                                            <>
                                                <tr key={id}>
                                                    <td>{watch.id}</td>
                                                    <td><img src={watch.imgUrl} alt="" width={50} height={50} /></td>
                                                    <td>{watch.Name}</td>
                                                    <td>{watch.Price}</td>
                                                    <td>{watch.qty}</td>
                                                    <td>{watch.Price * watch.qty}</td>
                                                    <td >
                                                        <button>
                                                            <i onClick={() => incr(watch.id

                                                            )} className="bi bi-plus-circle-fill me-1"></i>
                                                        
                                                            <i onClick={() => decr(watch.id)}
                                                                className="bi bi-dash-circle me-1"></i>
                                                        </button>

                                                    </td>
                                                    <td><button className="btn btn-danger">
                                                        <i className="bi bi-trash-fill"></i>
                                                    </button></td>

                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>

    )

};

export default ProductCart;