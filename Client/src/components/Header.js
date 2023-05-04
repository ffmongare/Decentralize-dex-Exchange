import React from 'react';
import Logo from '../blue.svg';
import Eth from '../eth.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <div class='leftH' >
          <Link to='/' className='link' >
            <img src={Logo} alt="logo" className='logo' />
          </Link>
          <Link to='/' className='link'>
            <div className='headerItem' >Swap</div>
          </Link>
          <Link to='/tokens' className='link' >
            <div className='headerItem' >Tokens</div>
          </Link>
        </div>
        <div className="rightH">
          <div className="headerItem">
            <img src={Eth} alt="eth" className='eth' />
            Ethereum
          </div>
          <div className="connectButton">
            Connect
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header