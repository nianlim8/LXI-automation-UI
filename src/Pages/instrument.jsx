import { useState, useEffect } from "react";
import React from "react";
import Modal from "../Components/modal";
import Form from "../Components/form";
const Instrument = () => {
    const [instrument, setInstrument] = useState()
    const form = [
        { name: "instrument_name", type: "text", label: "Instrument Name", id: 'instrument-name' },
        {
            name: "lxi-version", type: "select", id: 'lxi-version', label: "LXI version", options: [
                { value: 1.5, label: '1.5' },
                { value: 1.6, label: '1.6' },]
        },

    ]

    return (
        <div className="container-md">
            <Modal title="Instrument Details" content={<Form formFields={form} />} />
            <div className="card">
                <div className="card-header">LXI Instrument</div>
                <div className="card-body">
                    <br />
                    <div className="text-end">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">
                            ADD Instrument
                        </button>

                    </div>
                    <br />
                    <br />

                    <table className="table table-borderless" id="instrument_table">
                        <thead className="table-dark">
                            <tr>
                                <th>No</th>
                                <th>LXI Version</th>
                                <th>HPP Version</th>
                                <th>Instrument Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>1.5</td>
                                <td>HPP 6.1.2 Beta</td>
                                <td>Linux P700</td>
                                <td>To Do</td>
                                {/* <td>
                                    <div class="dropdown">
                                        <a class="btn btn-sm btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            More
                                        </a>

                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Test</a></li>
                                            <li><a class="dropdown-item" href="#">Generate Report</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#"><i className="bi bi-trash"></i></a></li>
                                        </ul>
                                    </div>
                                </td> */}
                                <td>
                                    <div class="btn-group">
                                        <button class="btn btn-secondary btn-sm" type="button">
                                            Configure
                                        </button>
                                        <button type="button" class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                            <span class="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Test</a></li>
                                            <li><a class="dropdown-item" href="#">Generate Report</a></li>
                                            <li><hr class="dropdown-divider" /></li>
                                            <li><a class="dropdown-item" href="#"><i className="bi bi-trash"></i></a></li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )

}
export default Instrument