import '../../utils/style/index.css';
import imgBanner from '../../assets/imgBanner.png'

function Home() {
  return (
    <div>
      <h1>Accueil !</h1>
        {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
        <img src={imgBanner}  alt="image banner"/>
    </div>
  );
}

export default Home;
