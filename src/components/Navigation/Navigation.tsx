import { paths } from '../../routes/paths';
import { Link, Nav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <Link to={paths.home}>Strona główna</Link>
      <Link to={paths.accountants}>Księgowi</Link>
    </Nav>
  );
};
