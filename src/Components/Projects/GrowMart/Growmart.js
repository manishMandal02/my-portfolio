import React from 'react';

import classes from './Growmart.module.scss';

//images
import deskTopImg from '../../../Asset/Images/growmart-desktop-mockup.png';
import mobileImg from '../../../Asset/Images/growmart-mobile-mockup.png';
import growmartAdmin from '../../../Asset/Images/growmart-admin-desktop-mockup.png';
import todo from '../../../Asset/Images/todo-desktop-mockup.png';
import portfolio from '../../../Asset/Images/portfolio-desktop-mockup.png';

//techstack
import html from '../../../Asset/Images/html5.png';
import css from '../../../Asset/Images/css.png';
import javascript from '../../../Asset/Images/javascript.png';
import react from '../../../Asset/Images/react.png';
import redux from '../../../Asset/Images/redux.png';
import matrialUi from '../../../Asset/Images/material-ui.png';
import sass from '../../../Asset/Images/sass.png';
import nodeJs from '../../../Asset/Images/node-js.png';
import express from '../../../Asset/Images/express.png';
import mongodb from '../../../Asset/Images/mongodb.png';
import jwt from '../../../Asset/Images/jwt.png';
import heroku from '../../../Asset/Images/heroku.png';
import vsCode from '../../../Asset/Images/vs-code.png';
import git from '../../../Asset/Images/git.png';
import npm from '../../../Asset/Images/npm.png';
import chrome from '../../../Asset/Images/chrome.png';
import { Link } from 'react-router-dom';

const Growmart = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.TopContainer}>
        <div className={classes.LeftWrapper}>
          <p>GrowMart | Online Grocery Shopping</p>
          <p>E-commerce site with AdminPanel</p>
          <span>
            <p>ReactJs</p>
            <p>Ecommerce</p>
            <p>SCSS</p>
            <p>Fullstack</p>
            <p>RestAPI</p>
            <p>Authentication</p>
            <p>MobileFirst</p>
            <p>PaymentGateway</p>
          </span>
          <div className={classes.ButtonWrapper}>
            <a
              href='https://github.com/manishMandal02/growmart-frontend'
              rel='noreferrer'
              target='_blank'
            >
              View Code on GitHub<i className='fab fa-github'></i>
            </a>
            <a
              href='https://growmart.netlify.app/'
              rel='noreferrer'
              target='_blank'
            >
              Visit Site<i className='fas fa-external-link-alt'></i>
            </a>
          </div>
        </div>
        <div className={classes.RightWrapper}>
          <img src={mobileImg} alt='mobileVeiw' loading='lazy' />
          <img src={deskTopImg} alt='desktopVeiw' loading='lazy' />
        </div>
        <div className={classes.RightWrapperMobile}>
          <img src={deskTopImg} alt='desktopVeiw' loading='lazy' />
        </div>
      </div>
      <div className={classes.BottomContainer}>
        <p>
          <i className='fas fa-layer-group'></i>Technology Stack
        </p>

        <div className={classes.ListContainer}>
          <p className={classes.List}>
            <img loading='lazy' src={html} alt='' />
            HTML
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={css} alt='' />
            CSS
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={javascript} alt='' />
            JavaScript
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={react} alt='' />
            ReactJs
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={redux} alt='' />
            Redux
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={sass} alt='' />
            Sass
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={matrialUi} alt='' />
            Material-UI
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={nodeJs} alt='' />
            NodeJs
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={express} alt='' />
            Express
          </p>
          <p className={classes.List}>
            <img
              loading='lazy'
              src={mongodb}
              alt=''
              style={{ width: '20px' }}
            />
            MongoDB
          </p>

          <p className={classes.List}>
            {' '}
            <img
              loading='lazy'
              src={jwt}
              alt=''
              style={{ width: '30px', height: '40px' }}
            />
            JWT
          </p>
          <p className={classes.List}>
            <img
              loading='lazy'
              src={vsCode}
              alt=''
              style={{ width: '40px', height: '40px' }}
            />
            VS Code
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={git} alt='' />
            Git
          </p>

          <p className={classes.List}>
            <img loading='lazy' src={heroku} alt='' />
            Heroku
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={npm} alt='' />
            npm
          </p>
          <p className={classes.List}>
            <img loading='lazy' src={chrome} alt='' />
            Developer Tools
          </p>
        </div>
        <p>
          <i className='fas fa-link'></i>Links
        </p>
        <ul>
          <li>
            Website Live demo -{' '}
            <a
              href='https://growmart.netlify.com/'
              rel='noreferrer'
              target='_blank'
            >
              https://growmart.netlify.com/
            </a>
          </li>
          <li>
            Github respository -{' '}
            <a
              href='https://github.com/manishMandal02/growmart-frontend'
              rel='noreferrer'
              target='_blank'
            >
              https://github.com/manishMandal02/growmart-frontend
            </a>
          </li>
          <li>
            Backedn Live demo -{' '}
            <a
              href='https://growmart.herokuapp.com/'
              rel='noreferrer'
              target='_blank'
            >
              https://growmart.herokuapp.com/
            </a>
          </li>
          <li>
            Backedn respository -{' '}
            <a
              href='https://github.com/manishMandal02/growmart-backend'
              rel='noreferrer'
              target='_blank'
            >
              https://github.com/manishMandal02/growmart-backend
            </a>
          </li>
          <li>
            Admin Panel project page -{' '}
            <a href='/project/growmartAdmin' rel='noreferrer' target='_blank'>
              Go to product page
            </a>
          </li>
          <li>
            Admin Live demo -{' '}
            <a
              href='https://growmartadmin.netlify.app/'
              rel='noreferrer'
              target='_blank'
            >
              https://growmartadmin.netlify.app/
            </a>
          </li>
        </ul>
        <p>
          <i className='fas fa-list-alt'></i>Features
        </p>
        <ul className={classes.Features}>
          <li>Search and Filter products based on prices and ratings</li>
          <li>Add Items to cart</li>
          <li>Paypal payment gateway for quick checkout process</li>
          <li>Edit your profile, veiw past order's</li>
          <li>Admin Panel to view and edit - users, products, orders</li>
          <li>Review system to add and edit reviews</li>
          <li>Login and Register with email and password</li>
        </ul>
        <p>
          <i className='fas fa-briefcase'></i>More Projects
        </p>
      </div>
      <div className={classes.MoreProjects}>
        <div className={classes.Card}>
          <img
            src={growmartAdmin}
            className={classes.Image}
            alt='recent-works'
          />
          <div className={classes.HoveredCard}>
            <span>
              <p>Ecommerce</p>
              <p>AdminPanel</p>
              <p>ReactJs</p>
              <p>SCSS</p>
              <p>Fullstack</p>
              <p>RestAPI</p>
              <p>Authentication</p>
            </span>
            <span>
              <Link to='/project/growmartAdmin'>More Info</Link>
              <a
                href='https://growmartadmin.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>
        <div className={classes.Card}>
          <img src={portfolio} className={classes.Image} alt='recent-works' />
          <div className={classes.HoveredCard}>
            <span>
              <p>PortfolioSite</p>
              <p>ReactJs</p>
              <p>HTML</p>
              <p>SCSS</p>
              <p>Frontend</p>
              <p>MobileFirst</p>
            </span>
            <span>
              <Link to='/project/portfolio'>More Info</Link>
              <a
                href='https:/manishmandal.netlify.com/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>

        <div className={classes.Card}>
          <img src={todo} className={classes.Image} alt='recent-works' />
          <div className={classes.HoveredCard}>
            <span>
              <p>TodoList</p>
              <p>VoiceAssistant</p>
              <p>VoiceAssistant</p>
              <p>ReactJs</p>
              <p>Fullstack</p>
              <p>CRUD</p>
              <p>RestAPI</p>
              <p>MobileFirst</p>
            </span>
            <span>
              <Link to='/project/todo'>More Info</Link>
              <a
                href='https://todo-voice.netlify.app/'
                rel='noreferrer'
                target='_blank'
              >
                Visit Site<i className='fas fa-external-link-alt'></i>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growmart;
