import { Link } from '../../node_modules/react-router-dom/index';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/area/main">가격표 등록 시작</Link>
    </>
  );
};

export default Home;
