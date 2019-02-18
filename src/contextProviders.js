import React from "react";
import ReactDOM from "react-dom";

const FamilyContext = React.createContext();

const FamilyProvider = FamilyContext.Provider;
const FamilyConsumer = FamilyContext.Consumer;



class GrandChildComponents extends React.Component {
    render() {
        return (
            <FamilyConsumer>
                {(contextData) => (
                    <div>
                        <label>Surname: </label><b>{contextData.surName}</b><br></br><br></br>
                        <label>Village: </label><b>{contextData.village}</b>
                    </div> 
                )}
            </FamilyConsumer>
        )
    }
}

class ChildComponents extends React.Component {
    render() {

        return (
            <FamilyConsumer>
                {(contextData) => (
                    <div>
                        <h1>My Village: {contextData.village}</h1>
                        <div><GrandChildComponents /></div>
                    </div> 
                )}
            </FamilyConsumer>)
        
    }
}


class Parents extends React.Component {
    render() {
        return (
            <div>
                <h2>My Random Data: {this.props.randomData}</h2>
                <ChildComponents />
            </div>
            
        )
    }
}

class GrandParents extends React.Component {
    constructor() {
        super();
        this.state = {
            surName: "Gupta",
            village: "Rohini"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState( {
                village: "OtherVillage"
            })
        }, 5000)
    }

    render() {
        return (
            <FamilyProvider value={this.state}>

                <div>
                    <Parents randomData="Hello World" />
                </div>

            </FamilyProvider>
            
        )
    }
}

ReactDOM.render(<GrandParents />, document.getElementById("root"))