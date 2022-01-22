import React from 'react';
const About = (props) => {
    return (
        <>
            <div className='container my-5'>

                <h2> Our Teams</h2>

            </div>
            <div className='container item'>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="/" className="card-img-top" alt="myimage" />
                    <div className="card-body">
                        <h5 className="card-title">Founder</h5>
                        <p className="card-text">Some quick example text to build on the Founder and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Connect</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="/" className="card-img-top" alt="myimage" />
                    <div className="card-body">
                        <h5 className="card-title"> Co-Founder</h5>
                        <p className="card-text">Some quick example text to build on the Founder and make up the bulk of the card's content.</p>
                        <a href="www.facebook.com" className="btn btn-primary">Connect</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="/" className="card-img-top" alt="myimage" />
                    <div className="card-body">
                        <h5 className="card-title">Co-Founder</h5>
                        <p className="card-text">Some quick example text to build on the Founder and make up the bulk of the card's content.</p>
                        <a href="/" className="btn btn-primary">Connect</a>
                    </div>
                </div>
            </div>
        </>
        
    )
}
export default About;
