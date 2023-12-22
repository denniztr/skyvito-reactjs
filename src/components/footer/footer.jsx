import { Link } from 'react-router-dom';

import HomeLogo from '../../assets/icons/icon_01.png';
import AddLogo from '../../assets/icons/icon_02.png';
import ProfileLogo from '../../assets/icons/icon_03.png';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img">
          <Link to="/" target="_self">
            <img src={HomeLogo} alt="home" />
          </Link>
        </div>
        <div className="footer__img">
          <Link target="_self">
            <img src={AddLogo} alt="home" />
          </Link>
        </div>
        <div className="footer__img">
          <Link href="/profile" target="_self">
            <img src={ProfileLogo} alt="home" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
