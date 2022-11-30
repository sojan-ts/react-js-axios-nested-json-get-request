import { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getComments = async () => {
  axios.get('https://api.npoint.io/2a1ba27f2d1cbf72988c')
  .then(function (response) {
    console.log(response.data.data)
    setItems(response.data.data);
  })
  .catch(function (error) {
    console.log(error);
  });
    };
    getComments();
  },[]);

  return (
     <>
    
       {items.map((item, index) => {
   
          return (
            <div key={item.index}>
             <h3>{item.events_title}</h3>
                                      {item['events_gallery_image'].map((item1, index) => {
                                        console.log(item1)
                                                return (
                                                  <div key={item1.index}>
                                                 
                                                <i>{item1.image}</i>
                                                  </div>
                                                );
                                              })}
            </div>
          );
        })}
     </>
  );
}

export default App;
