export default function Footer() {
    return (
            <footer className="text-center text-white bg-dark">

                <div className="container">

                    <section className="mt-4">

                        <div className="row text-center d-flex justify-content-center pt-4">

                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#" className="text-white">About us</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#" className="text-white">Products</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#" className="text-white">Awards</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#" className="text-white">Help</a>
                                </h6>
                            </div>



                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a href="#" className="text-white">Contact</a>
                                </h6>
                            </div>

                        </div>

                    </section>


                    <hr className="my-4" />


                    <section className="mb-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                                    distinctio earum repellat quaerat voluptatibus placeat nam,
                                    commodi optio pariatur est quia magnam eum harum corrupti
                                    dicta, aliquam sequi voluptate quas.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="text-center mb-3">
                        <a href="#" className="text-white me-4">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="bi bi-google"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="#" className="text-white me-4">
                            <i className="bi bi-github"></i>
                        </a>
                    </section>

                </div>

                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-white" href="#!">AlessioMura.com</a>
                </div>
            </footer>
    )
}