import React from 'react';
import './Header.css';
import {Logo} from '../Logo';
import {ToggleMenuButton} from '../ToggleMenuButton';
import {Menu} from '../Menu'

function Header() {
    const initialState = window.innerWidth < 768 ? false : true;
    const [showMenu, setShowMenu] = React.useState(initialState);
    const [showModal, setShowModal] = React.useState(false);

    React.useEffect(() => {
        function handleResize() {
        if (window.innerWidth < 768) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <Logo showModal={showModal}/>
            {showMenu ? <Menu/> : <ToggleMenuButton showModal={showModal} setShowModal={setShowModal}/>}
        </header>
    );
}

export {Header};