import React from 'react';
import { Heatmap, BarGraph }from './GraphComponents';
import { Progress } from 'reactstrap';


function Dashboard(props) {
    return(
        <div className="container-fluid">
            <div className="row align-items-start mx-5 gx-lg-5">
                <div className="col-12 col-md-7">

                    <div className="row fragment">
                        <h3>Analyze</h3>
                        <hr/>
                       
                            <div className="row">
                                <div className="col-4 px-3 px-xl-5">
                                    <h5>Upload a file</h5>
                                    <button type="button" className="btn btn-outline-dark" role="button">
                                        <img src="assets/images/upload.png" width="100%" />
                                    </button>
                                </div>
                                <div className=" col-4 px-3 px-xl-5">
                                    <h5>Enter a link</h5>
                                    <button type="button" className="btn btn-outline-dark" role="button">
                                        <img src="assets/images/hyperlink.png" width="100%" />
                                    </button>
                                </div>
                                <div className=" col-4 px-3 px-xl-5">
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
                            <div className="col-10 col-sm-11 col-md-7 mb-1">
                                <Progress value="25"/>
                            </div>
                            <div className="col-2 col-sm-1">
                                <p>25%</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-md-4">
                                <h5 className="progress-text">Lorem Ipsum Dolor Sit Amet</h5>
                            </div>
                            <div className="col-10 col-sm-11 col-md-7 mb-1">
                                <Progress value="25"/>
                            </div>
                            <div className="col-2 col-sm-1">
                                <p>25%</p>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12 col-md-4">
                                <h5 className="progress-text">Lorem Ipsum Dolor Sit Amet</h5>
                            </div>
                            <div className="col-10 col-sm-11 col-md-7 mb-1">
                                <Progress value="25"/>
                            </div>
                            <div className="col-2 col-sm-1">
                                <p>25%</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-md-5">
                    <div className="row fragment">
                        <h3>History</h3>
                        <hr/>
                        <Heatmap />
                        <BarGraph />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;