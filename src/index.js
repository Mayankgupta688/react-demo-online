import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

class RoutingPage extends React.Component {

    componentDidUpdate() {
        console.log("Parent Component Rerendered")
    }

    render() {
        return(
            <BrowserRouter>
                <div>
                    <b>Parent Component</b><br></br><br></br>
                    <nav>
                        <Link style={{marginRight: '15px'}} to="/">Home</Link>
                        <Link style={{marginRight: '15px'}} to="/about">About</Link>
                        <Link style={{marginRight: '15px'}} to="/help">Help</Link>
                        <a href="/about">About</a>
                    </nav>


                    <h1>The Component Below will update on Route Changes</h1>
                    <Route exact path="/" component={HomeComponent} />
                    <Route exact path="/about" component={AboutComponent} />
                    <Route exact path="/help" component={HelpComponent} />
                    
                </div>
            </BrowserRouter>
        )
    }
}


function HomeComponent() {
    return <div>Home Page</div>
}

function AboutComponent() {
    return <div>About Page</div>
}

function HelpComponent() {
    return <div>Help Page</div>
}

ReactDOM.render(<RoutingPage />, document.getElementById("root"))