import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class User extends Component {
  constructor(){
    super();
    this.state= {
      users: [{"id":1,"user_name":"Baird","email":"blafuente0@hexun.com","gender":"Male"},
        {"id":2,"user_name":"Bren","email":"bferreres1@squidoo.com","gender":"Female"},
        {"id":3,"user_name":"Nevins","email":"noliverpaull2@tumblr.com","gender":"Male"},
        {"id":4,"user_name":"Missie","email":"mandriveau3@naver.com","gender":"Female"},
        {"id":5,"user_name":"Hort","email":"hmccrorie4@mozilla.org","gender":"Male"},
        {"id":6,"user_name":"Jodie","email":"jmacfaell5@friendfeed.com","gender":"Male"},
        {"id":7,"user_name":"Barn","email":"blaurencot6@imageshack.us","gender":"Male"},
        {"id":8,"user_name":"Burton","email":"bkuhle7@studiopress.com","gender":"Male"},

        {"id":9,"user_name":"Kaspar","email":"kkneel10@google.com.au","gender":"Male"}]
    }
  }

  render() {
    const users = this.state
    console.log(users);
    return (
      <div>
        <Router>
        <div>
          <div className="User">
            <nav>
            <Link to="/1">Jack</Link><br />
            <Link to="/2">Johnnie</Link><br />
            <Link to="/3">Smith</Link><br />
            <Link to="/4">Rohit</Link><br />
            <Link to="/5">Ashok</Link><br />
            <Link to="/6">Johnnie</Link><br />
            <Link to="/7">Danger</Link><br />
            <Link to="/8">Stone</Link><br />

           </nav>

          </div>
          <Route path="/5" exact render={() => (<h1>Name : Smith5</h1> )}/>
          <Route path="/6" exact render={() => (<h1>Name : Smith6</h1> )}/>
          <Route path="/7" exact render={() => (<h1>Name : Smith7</h1> )}/>
          <Route path="/1" exact render={() => (<h1>Name : Smith1</h1> )}/>
          <Route path="/2" exact render={() => (<h1>Name : Smith2</h1> )}/>
          <Route path="/3" exact render={() => (<h1>Name : Smith3</h1> )}/>
          <Route path="/4" exact render={() => (<h1>Name : Smith4</h1> )}/>
          <Route path="/8" exact render={() => (<h1>Name : Smith8</h1> )}/>

          </div>

        </Router>

      </div>

    );
  }
}

export default User;
