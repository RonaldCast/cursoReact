
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react'

function CustomPagination(props) {
    var [itemsHtml, setItemsHtml] = useState([]);

    var changeNumber = (key) => {
        props.changeCurrentPage(key)
       
    }
    const initPagination = () => {
        let itemAmount = Math.ceil(props.totalItems / props.perPage);
        let listItems = []
    
        for (let i = 1; i <= itemAmount; i++) {
            
            listItems.push(<Pagination.Item key={i} active={i === props.currentPage}
                 onClick={() => { changeNumber(i)}}>{i}</Pagination.Item>)
        }
        setItemsHtml(listItems)
            
    }

    var changePageForArrow = (type) => {
        switch(type){

            case "Prev": 
                if(props.currentPage > 1){
                    props.changeCurrentPage(props.currentPage -1)
                 }
                break;
            case "Next": 
                if(props.currentPage < Math.ceil(props.totalItems / props.perPage)){
                    props.changeCurrentPage(props.currentPage +1)
                 }
                break;
            default: 
                break; 
        }
    } 

    useEffect(() => {
        initPagination();
    }, [props])



    return (
        <div>
            <Pagination style={{display:"flex", flexWrap:"wrap"}}>
                <Pagination.Prev onClick={() => { changePageForArrow("Prev")}}/>
                {itemsHtml}
                <Pagination.Next onClick={() => { changePageForArrow("Next")}}/>
            </Pagination>

        </div>

    );
}

CustomPagination.propTypes = {
    totalItems: PropTypes.number.isRequired,
    perPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired, 
    changeCurrentPage: PropTypes.func
}


export default CustomPagination;
