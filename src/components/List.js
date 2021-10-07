import React from 'react'
import FinalList from './FinalList';


function List(props) {
    // console.log("props", props);


    return (
        <>
            {
                props.items.map(item => (
                    <FinalList
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        status={item.completed}
                        userId={item.userId}
                    />
                ))
            }
        </>
    )
}

export default List
