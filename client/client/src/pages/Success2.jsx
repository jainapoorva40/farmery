/*import { useLocation } from "react-router-dom";
<h1>hellloooooooooooo</h1>
const Success2 = () => {
    <h1>added to favourites</h1>
   const queryParams = new URLSearchParams(location.search);
  
  const price = queryParams.get("price");
  

  return (
    <div>
        
<p>Item Price: {price}</p>
      <img src={new URLSearchParams(useLocation().search).get("img")} alt="Selected Product" width="1200dp" height="500dp"/>
      
      
    </div>
    
   
  );
};
export default Success2;*/

import { useLocation } from "react-router-dom";

const Success2 = ({ location }) => {
  const queryParams = new URLSearchParams(location.search);
  const price = queryParams.get("price");

  return (
    <div>
      <h1>Added to Favourites</h1>
      <p>Item Price: {price}</p>
      <img src={new URLSearchParams(useLocation().search).get("img")} alt="Selected Product" width="1200dp" height="500dp"/>
    </div>
  );
};

export default Success2;
