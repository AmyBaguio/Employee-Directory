import axios from "axios";

export default {
    // Gets all users
    getUsers: function() {
        return axios.get("https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?results=10", {
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,x-auth,Accept,content-type,application/json'

              }
        });
    }
}

// import axios from "axios";
// const BASEURL = "https://www.omdbapi.com/?t=";
// const APIKEY = "&apikey=trilogy";

// export default {
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
// };
