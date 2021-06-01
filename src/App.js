import React, {Component} from "react";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import './App.css';

function Home() {
  return <h2> Halaman Home </h2>
}

function DetailView({match}) {
  return <h2> Ini halaman {match.params.name} </h2>
}

function ListView() {
  return ( 
    <div>
      <h2> Semua user </h2>
        <ul>
            <Link to='user/hilman'>Hilman</Link><br></br>
            <Link to='user/johan'>Johan</Link>
        </ul>
    </div>
  )
}

function NoMatch() {
  return <h2> 404, Halaman Tidak Ditemukan </h2>
}


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li><Link to='/'> Home </Link></li>
            <li><Link to='/users'> User </Link></li>
          </nav>

          <main>
            <Switch>
              <Route path='/' exact component= {Home}></Route>
              <Route path='/users' exact component= {ListView}></Route>
              <Route path='/user/:name' exact component= {DetailView}></Route>
              <Route component= {NoMatch}></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    )
  }
}



export default App;
