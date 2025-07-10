import React, { useState } from "react";

const MyCard = () => {

    const [tours, setTours] = useState([

        {

            sno: "001",
            Name: "Goa",
            imgUrl: "https://s3.india.com/wp-content/uploads/2024/06/List-of-8-Famous-Beaches-Around-Goa.jpg?impolicy=Medium_Widthonly&w=350&h=263"
        },
        {
            sno: "002",

            Name: "Singapore",
            imgUrl: "https://i.natgeofe.com/k/95d61645-a0c7-470f-b198-74a399dd5dfb/singapore-city_3x2.jpg"
        },
        {

            sno: "003",
            Name: "Dubai",
            imgUrl: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/e6/f8/ca.jpg"
        },
        {
            sno: "004",
            Name: "Japan",
            imgUrl: "https://imgcdn.flamingotravels.co.in/Images/Menu/Destination/japan.jpg"
        }
    ])

    return (
        <>
<div className="container mt-3">
                <div className="row">

                    {

                        tours.map((values, index) => {
                            return (

                                <div className="col-lg-3 d-flex" key={index} >
                                    <div className="card shadow-lg-2">
                                        <img src={values.imgUrl} alt="" />
                                        <div className="cord-body">
                                            <p className="h3">{values.Name}</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt illum voluptate libero facilis hic, dolore id consequatur nostrum maiores voluptas illo quo dolores quidem maxime.</p>
                                        </div>
                                    </div>
                                </div>
                            )





                        })


                    }



                </div>
            </div>



        </>
    )
}

export default MyCard