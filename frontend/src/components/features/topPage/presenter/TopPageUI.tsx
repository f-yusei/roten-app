import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const TopPageUI = () => {
  const navigate = useNavigate();
  return (
    <div className="linkButton">
      <Button
        onClick={() => navigate('/reception')}
        height="30vh"
        width="30vw"
        m={3}
      >
        受付
      </Button>
      <Button
        onClick={() => navigate('/topping')}
        height="30vh"
        width="30vw"
        m={3}
      >
        トッピング確認
      </Button>
      <Button
        onClick={() => navigate('/delivery')}
        height="30vh"
        width="30vw"
        m={3}
      >
        受け渡し
      </Button>
    </div>
  );
};

export default TopPageUI;
