import React from 'react';
import MyInput from "./MyInput";

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <React.Fragment>
           <select value={value} onChange={(e) =>onChange(e.target.value)}>
               <option value="" disabled>{defaultValue}</option>
               {
                   options.map((option, index) => <option key={index} value={option.value}>{option.text}</option>)
               }
           </select>
        </React.Fragment>
    );
};

export default MySelect;