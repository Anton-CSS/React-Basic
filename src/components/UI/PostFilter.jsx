import React from 'react';
import MyInput from "./MyInput";
import MySelect from "./MySelect";

const PostFilter = ({filter, setFilter}) => {
    const options = [
        {value: 'title', text: 'По названию'},
        {value: 'body', text: 'По описанию'},
    ];

    return (
        <React.Fragment>
            <MyInput value={filter.query}
                     placeholder="search"
                     onChange={(e) => setFilter({...filter, query: e.target.value})}

            />
            <MySelect options={options} defaultValue="Сортировать" value={filter.sort}
                      onChange={(choose) => setFilter({...filter, sort:choose})}/>
        </React.Fragment>
    );
};

export default PostFilter;