import React, { useRef } from 'react';

function Navbar({ term, searchKeyword }) {
    // console.log(props);
    const inputEl = useRef("");

    const getSearchTerm = () => {
        // console.log(inputEl.current.value);
        searchKeyword(inputEl.current.value);   //passing the search term from search bar to todolist component
    }
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><b>Todos</b></a>
                    <div>
                        <form className="d-flex">
                            <input
                                ref={inputEl}
                                className="form-control me-2 rounded-pill  border border-dark"
                                type="text"
                                value={term}
                                onChange={getSearchTerm}
                                placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
