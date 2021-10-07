import React from 'react'
import { useDispatch } from 'react-redux'
import { selectItem } from '../redux/actions/itemActions'

function FinalList({ id, title, status, userId }) {
    const dispatch = useDispatch();
    const sendItem = () => {
        const item = {
            ToDoId: id,
            ToDoTitle: title,
            UserID: userId,
        }
        dispatch(selectItem(item));
    }
    return (
        <tr className="table-light">
            <th scope="row">{id}</th>
            <td>{title}</td>
            <td>{status ? "Complete" : "Incomplete"}</td>
            <td className="btn border-bottom" onClick={sendItem}>View User</td>
        </tr>
    )
}

export default FinalList
