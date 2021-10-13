import axios from 'axios';
import "./UserDetails.css";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import List from './List';


const baseURL = "https://jsonplaceholder.typicode.com/users";

function UserDetails() {

    const items = useSelector((state) => state.allItems.items);     //getting state from store
    const [searchResults, setsearchResults] = useState([]);
    const [posts, setposts] = useState([]);
    const item = useSelector((state) => state.item);
    // console.log(item);
    const fetchDetails = async () => {
        await axios
            .get(`${baseURL}/${item.UserID}`)
            .then((res) => setposts(res.data))
            .catch((err) => { console.log("Err", err) });
    }

    const user = item.UserID;
    const array = items.filter(item => {
        return (item.userId == user);
    })
    // console.log("array", array);
    useEffect(() => {
        fetchDetails();
    }, [item.UserID]);


    if (item.UserID !== "") {
        const newItems = items.filter((item) => {
            return Object.values(item)
                .join(" ")
                .toLowerCase()
                .includes(item.UserID);
        });
        // console.log(newItems);
        // setsearchResults(newItems);
    }

    return (
        <>
            {
                item.UserID ?
                    (
                        <>
                            <div className="p-3">
                                <h5><b>User Detail</b></h5>
                                <div className="border border-primary rounded card mt-3 bg-light">
                                    <div className="card-body row">
                                        <div className="col">
                                            <div className="d-flex flex-column">
                                                <div className="p-2 ">ToDo ID</div>
                                                <div className="p-2 ">ToDo Title</div>
                                                <div className="p-2 ">User ID</div>
                                                <div className="p-2 ">Name</div>
                                                <div className="p-2 ">Email</div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="d-flex flex-column text-primary">
                                                <div className="p-2 ">{item.ToDoId}</div>
                                                <div className="p-2 line-clamp ">{item.ToDoTitle}</div>
                                                <div className="p-2 ">{item.UserID}</div>
                                                <div className="p-2 ">{posts.username}</div>
                                                <div className="p-2 ">{posts.email}</div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div>
                                <table className="table border">
                                    <thead>
                                        <tr>
                                            <th scope="col">ToDo ID</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>


                                    <tbody>
                                        <List items={array} />
                                    </tbody>
                                </table>
                            </div>
                        </>
                    ) : <div></div>
            }
        </>
    )
}

export default UserDetails
