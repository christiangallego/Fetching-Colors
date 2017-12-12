import "./index.css";
import React from "react";
import thunk from "redux-thunk";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import reducers from "./reducers/index.js";
import {createStore, applyMiddleware} from "redux";
import BoxCon from "./containers/box-container.js";

let store = createStore(reducers, applyMiddleware(thunk))

class App extends React.Component{
    render() {
        return (
            <div>
                <BoxCon />
            </div>
        )
    }
}

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider >,
    document.getElementById("root")
);