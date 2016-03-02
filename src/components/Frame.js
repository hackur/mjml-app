import React, { Component } from 'react'

import '../styles/Frame.scss'

import { Link } from 'react-router'

class Frame extends Component {

  render () {
    return (
      <div className='Frame'>
        <div className='Frame-center'>
          <div className='Frame-item'>
            <Link to='/browse/recent' className='HomeLink'>
              <img
                width='20'
                height='40'
                src='assets/images/logo_white.svg'
                alt='mjml' />
              {'mjml'}
            </Link>
          </div>
        </div>
        <div className='Frame-actions'>
        </div>
      </div>
    )
  }
}

export default Frame
