import React, { useState, useEffect } from 'react';

function Menu2() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch("http://guineeplus.webdev-test.com/CATEGORY")
            .then((res) => res.json())
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        // <div>
        //     {data.map(item => (
        //         <p key={item.IDCATEGORY}>{item.Cat_Name}</p>
        //     ))}
        // </div>
        <>
            <nav className="navbar navbar-expand-md bg-body-tertiary bg-light">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {data.map(item => (
                                <li className="nav-item" key={item.IDCATEGORY}>
                                    <a className="nav-link" data-bs-toggle="collapse" href="#servicesList2" role="button" aria-expanded="false" aria-controls="servicesList2">
                                        {item.Cat_Name}</a>
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
            <ServiceListe2/>
        </>
    );
}

const ServiceListe2 = (props) => {
    return (
        <div className="collapse" id="servicesList2">
            <div className="card card-body">
                <h6>Ici sera defini les différents services de {props.menu}</h6>
            </div>
        </div>
    )
}

export default Menu2
