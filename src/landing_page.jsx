const Landing_Page = () => {
    return (
        <div className="background-image">
            <div className="icons">
                <img src="src/assets/logo 1.svg" alt="" />
                <h6>Home</h6>
                <h6>Landlord</h6>
                <h6>Tenants</h6>
                <h6>Contact Us</h6>
            </div>
            <hr />

            <div className="container">
                <h2 id="text">The Most Affordable <br />
                    Place To Stay In The <br />
                    San Fransiso Bay Area
                </h2>

                <div>
                    <img id="map" src="src/assets/Rectangle 1.png" alt="" />

                    <div>
                        <button className="btn">

                            <select name="" id="">
                                <option value="Type">Type</option>

                            </select>
                            <select name="" id="">
                                <option value="">Neighborhood</option>
                            </select>

                        </button>

                    </div>

                </div>

            </div>
        </div>

    );
}

export default Landing_Page;