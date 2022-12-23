import React from 'react';
import { Progress } from 'reactstrap';


function Dashboard(props) {
    return(
        <div className="container-fluid">
            <div className="row align-items-start mx-4">
                <div className="col-12 col-md-7">

                    <div className="row fragment">
                        <h3>Analyze</h3>
                        <hr/>
                        <div className="row gx-3 gx-sm-5">
                            <div className="col-4" >
                                <h5>Upload a file</h5>
                                <button type="button" className="btn btn-outline-dark" role="button">
                                    <img src="assets/images/upload.png" width="100%" />
                                </button>
                            </div>
                            <div className="col-4">
                                <h5>Enter a link</h5>
                                <button type="button" className="btn btn-outline-dark" role="button">
                                    <img src="assets/images/hyperlink.png" width="100%" />
                                </button>
                            </div>
                            <div className="col-4">
                                <h5>Paste text</h5>
                                <button type="button" className="btn btn-outline-dark" role="button">
                                    <img src="assets/images/paste.png" width="100%" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row fragment">
                        <h3>Currently Reading</h3>
                        <hr/>
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <h5 className="progress-text">Lorem Ipsum Dolor Sit Amet</h5>
                            </div>
                            <div className="col mt-1">
                                <Progress value="25"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-md-4">
                                <h5 className="progress-text">Lorem Ipsum Dolor Sit Amet</h5>
                            </div>
                            <div className="col mt-1">
                                <Progress value="25"/>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-md-4">
                                <h5 className="progress-text">Lorem Ipsum Dolor Sit Amet</h5>
                            </div>
                            <div className="col mt-1">
                                <Progress value="25"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-5">
                    <div className="row fragment">
                        <h3>History</h3>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;