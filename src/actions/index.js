// require dependencies 
import axios from "axios";

// function to get information from Colr API
export function loadColor() {
  // a dispatch is similar to sending something off 
  return(dispatch) => {
    // below we retur what we get from the axios call 
    // think of it like dialing in a phone number and in return we are getting "someone" specific on the other end
    // in this case we are requesting a specific, random color via the Colr API's URL
    // .then is a callback function that handles the promise of the axios call 
      return axios.get("http://www.colr.org/json/color/random").then((response) => {
        // dispatch a new function that changes the color and pass it the data received from the API 
        // concatenate a hashtag for color since json file does not provide one
        dispatch(changeColor("#" + response.data.new_color));
      })
    }
}

// changeColor function takes a paramater equal to: "#" + response.data.new_color
// this action is passed to the reducer, which changes the redux store and therefore application state
export function changeColor(color) {
  return {
    type: "CHANGE_COLOR",
    color: color
  }
}