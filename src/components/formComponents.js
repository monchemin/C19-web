import React from "react";
import { InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link } from "react-router-dom";


const InputPage = (props) => {
    const {id, labelName, placeholder, value} = props;
    return (
        <div className="form-group">
            <label htmlFor={id}>{labelName}</label>
            <input
                type="text"
                className="form-control"
                id={props.id}
                placeholder= {placeholder}
                onChange={(event) => props.onChange(id, event.target.value )}
                value={value}
                onBlur={()=>props.onBlur()}
            />
        </div>
    );
}

const InputIcone = (props) => {
    const {id, labelName, placeholder, value, type, list, disabled} = props;

    return(
        <div className="input-group">
            <div className="input-group-prepend">
          <span className="input-group-text" id={id}>
            <i className="prefix">{labelName}</i>
          </span>
            </div>
            <input type={type}
                   list={list}
                   className="form-control"
                   placeholder={placeholder}
                   aria-label={labelName}
                   aria-describedby={id}
                   onChange={(event) => props.onChange(id, event.target.value )}
                   value={value}
                   disabled = {disabled}
            />
        </div>
    )
}

const InputIconeBlur = (props) => {
    const {id, labelName, placeholder, value, type} = props;

    return(
        <div className="input-group">
            <div className="input-group-prepend">
        <span className="input-group-text" id={id}>
          <i className="prefix">{labelName}</i>
        </span>
            </div>
            <input type={type}
                   className="form-control"
                   placeholder={placeholder}
                   aria-label={labelName}
                   aria-describedby={id}
                   onChange={(event) => props.onChange(id, event.target.value )}
                   value={value}
                   onBlur={()=>props.onBlur()}
            />
        </div>
    )
}

const InputNext = (props) => {
    const {id, labelName, placeholder} = props;
    return(
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text name={id}>{labelName}</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder={placeholder}
                    aria-label={labelName}
                    aria-describedby={id}
                />
            </InputGroup>
        </div>
    )
}

const SelectPage = (props) => {

    return(
        <div>
            <select className="browser-default custom-select">
                <option>Choose your option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
            </select>
        </div>
    );
}


const AlertError = (props) => {
    return(
        <div className="alert alert-danger">
            {props.message}
        </div>
    )
}
const AlertSuccess = (props) => {
    return(
        <div className="alert alert-success">
            {props.message}
        </div>
    )
}

export {InputPage, InputNext, InputIcone, SelectPage, AlertError, InputIconeBlur, AlertSuccess};
