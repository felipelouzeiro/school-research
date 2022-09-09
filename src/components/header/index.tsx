import { Link } from 'react-router-dom';
import { Container, HeaderLinks, Logo } from './styles';
import icon from '../../images/icon.png';

export const Header = () => {
  return (
    <Container>
      <div>
        <Logo>
          <img src={icon} alt="" />
          <Link to="/">school research</Link>
        </Logo>
      </div>
      <HeaderLinks>
        <ul>
          <li>
            <Link to="/search">artigos</Link>
          </li>
          <li>
            <Link to="/favorites">favoritos</Link>
          </li>
        </ul>
      </HeaderLinks>
    </Container>
  );
};
