import React, { useState, useEffect } from 'react'
import { Consumer } from './Context'

function Students() {

    let [word, setWord] = useState("");
    let [searchWord, setSearchWord] = useState("");

    const handleChange = event => {
        setWord(event.target.value);
    };

    // console.log(word);

    useEffect(() => {
        setSearchWord(word)
    }, [word]);

    console.log(searchWord)

    return (

        <Consumer>

            {value => {

                const { users } = value;

                // console.log(users);

                return (

                    <div className="container-fluid mb-5">

                        <h1 className="text-center p-3 bg-info rounded text-light col-md-12 col-sm-12">Users List</h1>

                        <input className="mb-2 text-center rounded" type="search" placeholder="Filter by name" onChange={handleChange} />

                        <div className="row">
                            <div className="col-md-12 col-sm-12">

                                {users ? users.filter(person =>
                                    person.name.toLowerCase().includes(searchWord)
                                ).map((user, index) => (
                                    <div className="border p-3" key={index}>
                                        <p><span className="font-weight-bold">Name: </span> {user.name}</p>
                                        <p><span className="font-weight-bold">Email: </span> {user.email}</p>
                                        <p><span className="font-weight-bold">Phone: </span> {user.phone}</p>
                                        <p><span className="font-weight-bold">Website: </span> {user.website}</p>
                                        <p><span className="font-weight-bold">Company: </span> {user.company.name}</p>
                                    </div>
                                )) : <div>No data</div>}
                            </div>
                        </div>
                    </div>
                )
            }}

        </Consumer>
    )
}

export default Students
