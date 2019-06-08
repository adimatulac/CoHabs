import React from 'react';

const Item = ({list, deleteItem }) => {
    // const listArray = list.map(jess => {
    //     if(jess.age > 24) {
    //     return (
    //          <div className="jess" key = { jess.id }>
    //             <div>Name: { jess.name } </div>
    //             <div> Age: { jess.age } </div>
    //             <div>Belt: { jess.belt } </div>
    //         </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })


    const listArray = list.map(item => {
        return (
            <div className="item" key = { item.id }>
                <div>Name: { item.name } </div>
                <div> Type: { item.type } </div>
                <div> Message: { item.message } </div>
                <button onClick={ () => {deleteItem(item.id)} }> Delete item </button>
            </div>
        );
    })
    return(
        <div className="Item-list">
            { listArray } 
        </div>
    )
    
}

export default Item

