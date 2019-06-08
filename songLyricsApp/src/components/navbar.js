import React from 'react';

class Navbar extends React.Component{
  render(){
    return(
      <nav className='navbar navbar-dark bg-primary mb-5'>
        <span className='navbar-brand mb-20 ' style={{color:'white'}}>Song Lyrics</span>
      </nav>
    )
  }
}

export default Navbar;
