import React, { useEffect, useState } from 'react';
import axios from "axios";
import List from './List';
import { useSelector, useDispatch } from 'react-redux';
import { setItems } from '../redux/actions/itemActions';
import Navbar from './Navbar';

const baseURL = "https://jsonplaceholder.typicode.com/todos";

function TodoListTable() {

    const items = useSelector((state) => state.allItems.items);     //getting state from store
    // console.log(items);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setsearchResults] = useState([]);


    const searchHandler = (searchTerm) => {
        // console.log(searchTerm);                //input from search bar
        setSearchTerm(searchTerm);
        if (searchTerm !== "") {
            const newItems = items.filter((item) => {
                return Object.values(item)
                    .join(" ")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            });
            // console.log(newItems);
            setsearchResults(newItems);
            console.log(searchResults);
        }
        else {
            setsearchResults(items);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios
                .get(`${baseURL}`)
                .catch((err) => { console.log("Err", err) });
            dispatch(setItems(response.data));       //sending data received from API to state in store

        }
        fetchItems();
    }, []);

    return (

        <div className="border border-primary rounded">
            <Navbar
                term={searchTerm}
                searchKeyword={searchHandler}
            />

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ToDo ID</th>
                        <th scope="col">Title</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>


                <tbody>
                    <List items={searchTerm.length < 1 ? items : searchResults} />

                </tbody>
            </table>


        </div>
    )
}

export default TodoListTable
