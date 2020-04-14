import React, {useState, useEffect} from 'react';
import '../css/common.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Table} from "react-bootstrap";
import useRematchDispatch from "../hooks/useRematchDispatch";
import {useSelector} from "react-redux";

const AllListScreen = () => {
    const {load} = useRematchDispatch(dispatch => ({
        load: dispatch.list.getList,
    }));

    const data = useSelector(state => state.list.data);
    useEffect(() => {
       load();
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
                </tr>
                </thead>
                <tbody>
                {data.map((x) =>
                <tr key = {x.phone_number}>
                    <td>{x.phone_number}</td>
                    <td>{x.location}</td>
                    <td>{x.hits}</td>
                    <td>{x.is_at_risk ? "true" : "false" }</td>
                </tr>
                )}
                </tbody>
            </Table>
        </div>
    );
};


export default AllListScreen