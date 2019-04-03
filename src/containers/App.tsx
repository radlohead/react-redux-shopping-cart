import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Home, Menu, ProductsAsync, WishList } from '../components/index'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Menu />
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductsAsync} />
                <Route path="/wishlist" component={WishList} />
            </div>
        )
    }
}

export default App
