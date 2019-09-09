import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products'

const Home = () => {
    return (
        <React.Fragment>
            <Sidebar />
            <Products />
        </React.Fragment>
    )
}

export default Home