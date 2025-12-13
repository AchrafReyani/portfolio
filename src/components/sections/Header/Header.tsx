import {HeaderContainer} from './HeaderContainer';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-bg-light/90 dark:bg-bg-dark/90 backdrop-blur-md shadow-header-light dark:shadow-header-dark z-50">
      <HeaderContainer />
    </header>
  );
}
