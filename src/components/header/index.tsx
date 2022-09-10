import { Link } from 'react-router-dom';
import { Container, HeaderLinks, Logo } from './styles';
import icon from '../../images/icon.png';

export const Header = () => {
  return (
    <Container>
      <div>
        <Logo>
          <img src={icon} alt="" />
          <Link to="/" id="page-title">
            school research
          </Link>
        </Logo>
      </div>
      <HeaderLinks>
        <ul>
          <li>
            <Link to="/search" id="page-link-articles">
              artigos
            </Link>
          </li>
          <li>
            <Link to="/favorites" id="page-link-favorites">
              favoritos
            </Link>
          </li>
        </ul>
      </HeaderLinks>
    </Container>
  );
};
