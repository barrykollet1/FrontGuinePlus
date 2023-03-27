

const Card = (props) => {
    return (
        <>
            <div className="card mx-2 mt-2 d-inline-block col-sm-4 col-md-3">
                <img src={props.img} className="card-img-top" alt="..." style={{width: '100%', height: '150px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">Card N°{props.num}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk
                            of the card's content.</p>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
            </div>
        </>
    )
}

export default Card
