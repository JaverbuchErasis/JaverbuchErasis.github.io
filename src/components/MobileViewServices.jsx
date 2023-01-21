import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';

const ServicesMV = (props) => {
    const optionsView = (
        <div>
            {props.data.map((x,y) => {
                return ([
                    <div key={x.key} className="midMobileBodyHeader" onClick={() => props.ddChange({y})}>
                        <h3><b>{x.title}</b> <FontAwesomeIcon className='dropDownIcon' icon={faSquareCaretRight}/></h3>
                        {props.view[y] ? 
                            <div className="dropDownVerbiage">{x.text}</div> 
                        : ""}
                    </div>, <br key={x.key + 10}></br>
                ])
            })}
        </div>
    )

    return optionsView
}

export { ServicesMV }