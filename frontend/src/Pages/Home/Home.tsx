import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <main id='homePage'>
      <div className='main-container'>
        <div className='text-container'>
          <span>SO, YOU WANT TO TRAVEL TO</span>
          <h1>SPACE</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className='image-container'>
          <div className='circle'>
            <Link to='/destination'>
              <h3>EXPLORE</h3>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
