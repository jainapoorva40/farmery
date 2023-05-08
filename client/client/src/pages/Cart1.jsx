import { useLocation } from "react-router-dom";

const Cart1 = () => {
    const queryParams = new URLSearchParams(location.search);
  
  const price = queryParams.get("price");
  

  return (
    <div>
        
<p>Item Price: {price}</p>
      <img src={new URLSearchParams(useLocation().search).get("img")} alt="Selected Product" width="1200dp" height="500dp"/>
      
      
    </div>
   
  );
};
export default Cart1;