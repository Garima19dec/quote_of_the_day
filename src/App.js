
import './App.css';
import axios from 'axios'
import React, { useState, useEffect } from 'react';


// function App() {
//   var data; 
  
//   const getmyapi = () => {
    

//     // const axios = require("axios");
//     const url = "https://quotes.rest/qod";

//     axios.get(url, { headers: { Accept: "application/json" } })
//     .then(res => {
//      data = (res.data.contents.quotes);
//      console.log(data[0].quote)
//      console.log(data[0].author)
//  });

//   };

//   return (
//     <div>
//     <h1>
//       Hello <button onClick={getmyapi}>
//         call my api
//       </button>
//     </h1>
//     <div>
//     {/* {r[0].quote} */}
//       {/* {data[0].quote} */}
//     </div>
//     </div>

//   );
// }

// export default App;



export default function App() {

  const [data, setData] = useState();

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://quotes.rest/qod',
    };
    axios(config)
    .then(function(response){
      console.log(JSON.stringify(response.data));
      setData((response.data));
    })
    .catch(function (error){
      console.log(error);
    });
  }, [])

  return(
    <div>
      <div>
        { data ? (
          <div>
            <h1>{data.contents.quotes[0].quote}</h1>
            <h4> - {data.contents.quotes[0].author}</h4>
          </div>
        ) : <h3>There was an issue fetching data, try later</h3>}
      </div>
    </div>
  )

}