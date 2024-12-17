import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='sectionFooter'>
      <div className='containerFooter'>
        <div>
          <h3 className='containerFooterTitle'>@ComputeUp 2024</h3>
          <p>Todos los derechos reservados.</p>
        </div>

        <div className='containerSocialMedia'>
          <a href='https://www.facebook.com/profile.php?id=61558304169229' target='_blank' rel='noopener noreferrer'>
            <div className='containerSocialMediaItem'>
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#0b9838', fontSize: '36px' }} />
            </div>
          </a>

          <a href='https://www.instagram.com/computeup/' target='_blank' rel='noopener noreferrer'>
            <div className='containerSocialMediaItem'>
              <FontAwesomeIcon icon={faInstagram} style={{ color: '#0b9838', fontSize: '36px' }} />
            </div>
          </a>

          <a href='https://www.linkedin.com/company/computeup/' target='_blank' rel='noopener noreferrer'>
            <div className='containerSocialMediaItem'>
              <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0b9838', fontSize: '36px' }} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
