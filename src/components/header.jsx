import React from 'react';
import { useNavigate } from 'react-router';

const Header = (props) => {
    const navigate = useNavigate();
    const activeFcn = (path) => {
        const pathName = window.location.pathname
        if (pathName === path) {
            return 'active'
        }
        return ''
    }
    return (
        <div className='header'>
            <ul>
                <li className={activeFcn('/')} onClick={() => navigate('/')}>About</li>
                <li className={activeFcn('/project')} onClick={() => navigate('/project')}>Project</li>
            </ul>
        </div>
    )
};

export default Header;