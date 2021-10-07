import axios from 'axios';
import "./UserDetails.css";
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


const baseURL = "https://jsonplaceholder.typicode.com/users";

function UserDetails() {

    const [posts, setposts] = useState([]);
    const item = useSelector((state) => state.item);
    // console.log(item);
    const fetchDetails = async () => {
        await axios
            .get(`${baseURL}/${item.UserID}`)
            .then((res) => setposts(res.data))
            .catch((err) => { console.log("Err", err) });
    }

    useEffect(() => {
        fetchDetails();
    }, [item.UserID]);

    return (
        <>
            {
                item.UserID ?
                    (<div className="p-3 sticky-top">
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
                    </div>) : <div></div>
            }
        </>
    )
}

export default UserDetails
