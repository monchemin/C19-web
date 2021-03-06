import React, {useState, useEffect} from 'react';
import '../css/common.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Button, Table} from "react-bootstrap";
import useRematchDispatch from "../hooks/useRematchDispatch";
import {useSelector} from "react-redux";

const RiskListScreen = () => {
    const {load} = useRematchDispatch(dispatch => ({
        load: dispatch.list.getList,
    }));

    const data = useSelector(state => state.list.data);
    useEffect(() => {
        load(true);
    });
    return (
        <div className="container">
            <Table striped bordered hover size="sm">
                <thead>
                <tr>
                    <th>Phone Number</th>
                    <th>Location</th>
                    <th>hits</th>
                    <th>risk state</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {data.map((x) =>
                    <tr key={x.phone_number}>
                        <td>{x.phone_number}</td>
                        <td>{x.location}</td>
                        <td>{x.hits}</td>
                        <td>{x.is_at_risk ? "true" : "false"}</td>
                        <td><Button variant="outline-warning">Confirm</Button></td>
                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};


export default RiskListScreen