import { useState, useEffect } from "react";

const Test = () => {

    const [selected, setSelected] = useState([])
    const [isSelect, setSelect] = useState(false)
    let row = 10, i = 1
    const [data, setData] = useState()
    const [progress, setProgress] = useState(0)
    const list = []
    useEffect(() => {
        for (i; i <= row; i++) {
            list.push(
                <tr>
                    <td>{i}</td>
                    <td>LXI_{i}</td>
                    <td>This is test case {i}</td>
                    <td>
                        <div id={`teststatus_${i}`}>
                            {/* <span className="badge bg-primary test-status">To Do</span> */}
                            {/*<span className="text-success"><i className="bi bi-check-lg"></i></span>*/}
                            <div class="spinner-border spinner-border-sm text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="form-check">
                            <input className="form-check-input test-cases-checkbox" type="checkbox" value={false} id={i} />

                        </div>
                    </td>
                </tr>
            )

        }
        setData(list)
    }, [])

    const runTest = () => {
        let value = 10
        let result = progress + value
        if (result <= 100) {
            setProgress(result)
        }
    }

    useEffect(() => {
        const progressBar = document.querySelector('.progress-bar');

        if (progress <= 100) {
            progressBar.style.width = `${progress}%`;
            progressBar.setAttribute('aria-valuenow', progress);
            progressBar.textContent = `${progress}%`;

        }
        if (progress === 100) {
            progressBar.className = 'progress-bar bg-success'
        }

    }, [progress]);

    function selectAll(event) {
        const target = event.target
        const value = target.checked
        const tc_checkbox = document.querySelectorAll('.test-cases-checkbox')
        tc_checkbox.forEach((testCaseBox) => {
            testCaseBox.checked = value
            if (value)
                //Modify to if value is true and update the selected test cases state array
                console.log(testCaseBox.id)
        })

    }
    // useEffect(()=>{
    //     let isSelectAll = document.getElementById('checkAll').checked
    //     let tc_checkbox = document.querySelectorAll('.test-cases-checkbox')
    //     setSelect(isSelectAll)
    // },[isSelectAll])


    return (
        <div className="container-md">
            <div className="card">
                <div className="card-header">
                    Select Test Cases
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Test Cases</th>
                                <th width="50%">Description</th>
                                <th>Status</th>
                                <th>Action  <input className="form-check-input" type="checkbox" value="" id="checkAll" onChange={selectAll} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data}
                        </tbody>
                    </table>
                    <div className="text-center">
                        <button className="btn btn-dark" id="RunTest" onClick={runTest}>Run</button>
                    </div>
                    <br /><br />
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" Style={`width: ${progress}%;`}
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{progress}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Test