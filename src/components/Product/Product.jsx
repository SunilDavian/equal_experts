import React from 'react';

function Product({ data }) {

    return (
        <div style={{ border: '1px solid black', marginLeft: '5px', width: '200px'}}>

            <div style={{ margin: '30px', height: '200px', border: '1px solid grey' }}>

            </div>

            <div style={{ margin: '25px 30px 0px 30px', display: 'flex', justifyContent: 'space-between', border: '1px solid grey' }}>
                <div>{data.name}</div>

                <div>{data.price}</div>

            </div>

            <div style={{ margin: '0px 30px 0px 30px', display: 'flex', justifyContent: 'flex-end', border: '1px solid grey' }}>
                {data.capacity === 0 ? 'Out of the stock' : `Units : ${data.capacity}`}
            </div>


        </div>
    )
}

export default Product