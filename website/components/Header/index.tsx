import { useState } from 'react';
import styles from './Header.module.scss';
import MenuButton from './Menu/MenuButton';
import Menu from './Menu/Menu';

export default function Header() {
  const [ open , setOpen ] = useState(false);

  return (
    <div className={`${styles.header} ${open && 'open'}`}>
      <h1>Rafa</h1>
      <Menu />
      <MenuButton onClick={() => setOpen(!open)} />
    </div>
  );
}
