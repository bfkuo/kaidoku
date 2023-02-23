import React, { Component, useEffect, useRef } from 'react';
import { Heatmap, BarGraph }from './GraphComponents';
import { Progress } from 'reactstrap';
import { setFullText } from '../slices/analyzeSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
    return(
        <div className="container-fluid">
            <div className="row align-items-start mx-5 gx-lg-5">
                 {/* Left column */}
                <div className="col-12 col-md-7">
                    <Analyze />
                    <Current />
                </div>

                {/* Right column */}
                <div className="col-12 col-md-5">
                    <History />
                </div>
            </div>
        </div>
    )
}

const Analyze = (props) => {
    //Allow user to upload / paste here, then navigate to next page!
    const inputFile = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("changed " + inputFile.current)
        if(inputFile.current == null) return;
        if(inputFile.current.value == null) return;
        if(inputFile.current.value === '') return;
        console.log('lets get it ' + JSON.stringify(inputFile.current.value))
        const file = inputFile.current.value;
        if(file != null) {
            const reader = new FileReader();
            reader.readAsText(file,'UTF-8');
            reader.onload = r => {
                const text = r.target.result;
                if(text != null) {
                    setFullText(text);
                    navigate('analyze');
                }
            }
        }
        
    }, [inputFile.current]);

    return (
        <div className="row fragment">
            <h3>Analyze</h3>
            <hr/>
            <div className="row">
                <div className="col-4 px-3 px-xl-5">
                    <h5>Upload a file</h5>
                    <button type="button" className="btn btn-outline-dark" role="button" onClick={() => inputFile.current?.click()}>
                        <img src="assets/images/upload.png" width="100%"/><input type="file" ref={inputFile} className='file-hidden'></input>
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
                    <button type="button" className="btn btn-outline-dark" role="button" onClick={() => {
                        //set mode to text input or something
                    }}>
                        <img src="assets/images/paste.png" width="100%" />
                    </button>
                </div>
            </div>
        </div>
    )
}

function RenderReading({reading}) {
    if (reading != null) {
        const readingList = reading.map((reading) => {
            return(
                <div className="row" key={reading.id}>
                    <div className="col-12 col-md-4">
                        <h5 className="progress-text">{reading.title}</h5>
                    </div>
                    <div className="col-10 col-sm-11 col-md-7 mb-1">
                        <Progress value={reading.progress}/>
                    </div>
                    <div className="col-2 col-sm-1">
                        <p>{reading.progress.toString()}</p>
                    </div>
                </div>
            )
        })

        return (
            <React.Fragment>
                <h3>Currently Reading</h3>
                <hr/>
                {readingList}
            </React.Fragment>
            
        )
    }

}
class Current extends Component {
    constructor(props) {
        super(props)

        this.state = {
            reading: [
                {
                    title: 'Book Number 1',
                    progress: 82,
                    id: 1
                }, {
                    title: 'Book Number 2',
                    progress: 37,
                    id: 2
                }, {
                    title: 'Book Number 3',
                    progress: 24,
                    id: 3
                }
            ]
        }
    }

    render() {
        return (
            <div className="row fragment"> 
                <RenderReading reading={this.state.reading} />
            </div>
        )
    }
}
const History = (props) => {
    return (
        <div className="row fragment">
            <h3>History</h3>
            <hr/>
            <Heatmap />
            <BarGraph />
        </div>
    )
}

export default Dashboard;