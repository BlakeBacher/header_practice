import React, { Component } from 'react';
import Drawer from './Drawer'
import './Header.css'
import DropDown from './DropDown';

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerToggle: false,
    }
    this.handleHam = this.handleHam.bind(this)
  }

  handleHam() {
    this.setState({ drawerToggle: !this.state.drawerToggle })
  }

  render() {
    return (
      <div>
        <nav className='header row'>
          <div className='ham' onClick={this.handleHam}>
            <div className={this.state.drawerToggle ? 'bar bar1' : 'bar'}></div>
            <div className={this.state.drawerToggle ? 'bar bar2' : 'bar'}></div>
            <div className={this.state.drawerToggle ? 'bar bar3' : 'bar'}></div>
          </div>
          <h1>
            AWESOME LOGO
          </h1>
          <section className='menuList row'>
            <div className='menuItem'>Home</div>
            <div className='menuItem'>Products</div>
            <div className='menuItem'>Blog</div>
            <div className='menuItem'>About</div>
            <div className='menuItem'>Contact US</div>
          </section>
        </nav>
        {/* <Drawer
          drawerToggle={this.state.drawerToggle}
        /> */}
        <DropDown
          drawerToggle={this.state.drawerToggle}
        />
      </div>
    )
  }
};

