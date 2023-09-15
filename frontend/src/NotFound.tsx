import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>ページが見つかりません</h1>
      <div>
        <Link to={'/'}>トップページに戻る</Link>
      </div>
    </>
  );
};

export default NotFound;
