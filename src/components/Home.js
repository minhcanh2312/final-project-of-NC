import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import Products from './Products/Products'

const Home = (props) => {
    return (
        <React.Fragment>
            <Sidebar />
            <Products location={props.location} />
        </React.Fragment>
    )
}

export default Home