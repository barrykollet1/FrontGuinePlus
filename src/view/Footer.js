

const Footer = () => {
    return(
        <>
            <div className="container-fluid border border-2 text-dark mt-5">
                <div className="row border border-1 border-danger text-center">

                    <hr className="border border-2 my-5" />

                    <div className="card  d-inline-block col-sm-4 col-md-2 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Catégories</h5>
                            <button className="link-dark btn">Liens</button>
                        </div>
                    </div>
                    <div className="card  d-inline-block col-sm-4 col-md-2 border-0">
                        <div className="card-body">
                            <h5 className="card-title">A propos</h5>
                            <button className="link-dark btn">Liens</button>
                        </div>
                    </div>
                    <div className="card  d-inline-block col-sm-4 col-md-2 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Aide</h5>
                            <button className="link-dark btn">Liens</button>
                        </div>
                    </div>
                    <div className="card  d-inline-block col-sm-4 col-md-2 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Communauté</h5>
                            <button className="link-dark btn">Liens</button>
                        </div>
                    </div>
                    <div className="card  d-inline-block col-sm-4 col-md-2 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Plus d'infos</h5>
                            <button className="link-dark btn">Liens</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
