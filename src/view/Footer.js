

const Footer = () => {
    return(
        <>
            <div className="container text-center text-dark mt-5">

                    <hr className="border border-2 my-5" />

                    <div className="card m-1 d-inline-block col-3 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Catégories</h5>
                            <button className="link-dark btn">Animation</button>
                        </div>
                    </div>
                    <div className="card m-1 d-inline-block col-3 border-0">
                        <div className="card-body">
                            <h5 className="card-title">A propos</h5>
                            <button className="link-dark btn">Qui sommes nous?</button>
                        </div>
                    </div>
                    <div className="card m-1 d-inline-block col-3 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Aide</h5>
                            <button className="link-dark btn">Comment être partenaire?</button>
                        </div>
                    </div>
                    <div className="card m-1 d-inline-block col-3 border-0">
                        <div className="card-body">
                            <h5 className="card-title">Plus d'infos</h5>
                            <button className="link-dark btn">Workspace</button>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Footer
