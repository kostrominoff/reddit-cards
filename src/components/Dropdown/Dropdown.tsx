import React, {useState} from 'react';
import DropdownList from "./DropdownList/DropdownList";
import styles from './dropdown.module.scss';

interface IDropdownProps {
  isPC: boolean
}

function Dropdown({ isPC }: IDropdownProps) {

  const [isShown, setIsShown] = useState(false);

  return (
    <div className={styles.dropdown}>
      <button className={styles.open} onClick={() => setIsShown(!isShown)}>
        { isPC &&
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        }
        {!isPC &&
          <svg width="20" height="6" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17.5" cy="2.5" r="2.5" transform="rotate(90 17.5 2.5)" fill="#D9D9D9"/>
            <circle cx="10" cy="2.5" r="2.5" transform="rotate(90 10 2.5)" fill="#D9D9D9"/>
            <circle cx="2.5" cy="2.5" r="2.5" transform="rotate(90 2.5 2.5)" fill="#D9D9D9"/>
          </svg>
        }
      </button>
      { isShown && <DropdownList isPC={isPC} closeFunc={setIsShown} /> }
    </div>
  );
}

export default Dropdown;
