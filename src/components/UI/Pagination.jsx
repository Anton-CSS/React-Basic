import React from 'react';


const Pagination = ({totalPages, changePage, page}) => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }
    return (
        <div className="pages">
            {
                pagesArray.map((p,i) => <span onClick={()=>changePage(p)} className={page === p ? 'page page__current' : 'page'} key={i} style={{marginTop: '10px', marginRight: '10px'}}>{p}</span>)
            }
        </div>
    );
};

export default Pagination;