import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";



const TopPageUI = () => {
  return (
    <div className="linkButton">
      <Button height="300px" width="300px"><Link to={'/reception'}>受付</Link></Button>
      <Button height="300px" width="300px"><Link to={'/topping'}>トッピング確認</Link></Button>
      <Button height="300px" width="300px"><Link to={'/delivery'}>受け渡し</Link></Button>
    </div>
    
    
  )
}

export default TopPageUI