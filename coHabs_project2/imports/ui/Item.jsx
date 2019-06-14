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
            <div class ="col-sm">
                <div className="card">
                    <div class="card-body">
                    <div className="item" key = { item.id }>
                        <div className="card-title">Name: <span className="card-text">{ item.name }</span></div>
                        <div> Type: { item.type } </div>
                        <div> Message: { item.message } </div>
                        <button type="button" className="btn btn-primary btn-sm" onClick={ () => {deleteItem(item.id)} }> Delete item </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    })
    return(
        <div className="Item-list container">
            <div className="row justify-content-md-center">
            { listArray } 
            </div>
        </div>
    )
    
}

export default Item

