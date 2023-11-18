import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {};

export const MainNav = ({}: Props) => {
  return (
    <header id='header'>
      <nav id='mainNav'>
        <div className='makeSpaceForLogo'></div>
        <ul>
          ☙
          <li>
            <a href='/bhg'>barnehagegreier</a>
          </li>
          <li>•</li>
          <li>
            <a href='/web'>webutvikling</a>
          </li>
          <li>❧</li>
        </ul>
        <ul>
          <li>
            <a href='email:fra-hjemmesiden@fortelle.no' className='kontaktLink'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
        </ul>
      </nav>
      <img src='img/logoen.png' alt="logo med teksten 'fortelle'" id='logoen' />
    </header>
  );
};
export default MainNav;
