import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import AllTodo from '../AllTodo/AllTodo';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div style={{ backgroundColor: "#bce6eb", minHeight: "100vh" }} className="container-fluid">
            <Header />
            <div className="row mt-3">
                <div className="col-md-3 col-sm-6">
                    <AddTodo />
                </div>
                <div style={{ borderLeft: "2px solid gray" }} className="col-md-9 col-sm-6">
                    <AllTodo />
                </div>
            </div>
        </div>
    );
};

export default Home;