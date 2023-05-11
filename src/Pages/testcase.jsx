import React from "react";
import { useState, useEffect } from "react";
import Modal from "../Components/modal";
import Form from "../Components/form";
const TestCaseManagement = () => {
    const [cases, setCases] = useState()
    const form = [
       
        {name:"network",type:"select",label:"Network",id:"network",options:[
            {value:"Keysight Network",label:"Keysight Network"},
            {value:"DLAN",label:"DLAN"},
            {value:"DHCPv4",label:"DHCP (IPv4)"},
            {value:"DHCPv6",label:"DHCP (IPv6)"},
            {value:"private",label:"Private (Switch)"}
        ]},
        {name:"lxi-version",type:"select",label:"LXI-version",id:"lxi-version",options:[
            {value:"1.5",label:"1.5"},
            {value:"1.6",label:"1.6"}
        ]},
         {name:"tc_name",type:"text",label:"Test Case Name",id:"tc_name"},
         {name:"description",type:"text",label:"Test Description",id:"description"},
         {name:"function",type:"text",label:"Pointed Function",id:"function"},
        
    ]

    return (
        <div className="container-md">
            {/* Modal Tag place here */}
            <Modal title="Add Test Case" content={<Form formFields={form}/>}/>
            <div className="card">
                <div className="card-header">Test Cases</div>
                <div className="card-body">
                    <br />

                    <div className="text-start">
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modal">Add Test Case</button>
                    </div>
                    <br />
                    <hr />
                    <br />
                    <div className="filter" id="filter">
                        <div className="row">
                            <div className="col-4">
                                <div className="row">
                                    <div className="col-3">
                                        <label htmlFor="#type" className="form-label">Network</label>
                                    </div>
                                    <div className="col-9">
                                        <select name="type" id="type" className="form-select">
                                            <option value="all">All</option>
                                            <option value="Keysight">Keysight Network</option>
                                            <option value="DLAN">Direct LAN</option>
                                            <option value="DHCPv4">DHCP (IPv4)</option>
                                            <option value="DHCPv6">DHCP (IPv6)</option>
                                            <option value="private">Private (Switch)</option>
                                        </select>
                                    </div>
                                </div>


                            </div>

                            <div className="col-6">
                                <div className="row">
                                    <div className="col-2">
                                        <label htmlFor="#lxi-version" className="form-label">LXI Version</label>
                                    </div>
                                    <div className="col-6">
                                        <select name="version" id="version" className="form-select">
                                            <option value="all">All</option>
                                            <option value="1.5">1.5</option>
                                            <option value="1.6">1.6</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="col-2">
                                <div className="row">
                                    <button className="col-6 btn btn-primary">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <hr />
                </div>
            </div>
        </div>
    )
}
export default TestCaseManagement