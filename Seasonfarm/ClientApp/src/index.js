import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { Provider } from 'mobx-react';
import {
  Route, Switch, HashRouter,
} from 'react-router-dom';
import { Home } from './containers/Home';
import { ContactUs } from './containers/ContactUs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faWeixin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from 'img/core-img/logo.png';
import header from 'img/bg-img/header.jpg';
import 'css/animate.css';
import 'css/classy-nav.css';
import 'css/magnific-popup.css';
import 'css/nice-select.css';
import 'css/bootstrap.min.css';
import 'css/style.css';

const Main = () => (
  <Provider
  >
    <React.Fragment>
      <header className="header-area">
        <div className="top-header-area bg-img bg-overlay" style={{ backgroundImage: `url(${header})` }}>
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-between">
              <div className="col-12 col-sm-6">
                <div className="top-social-info">
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Line"><FontAwesomeIcon icon={faLine} /></a>
                  <a href="#" data-toggle="tooltip" data-placement="bottom" title="Weixin"><FontAwesomeIcon icon={faWeixin} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-area" >
          <a className="logo" href="index.html"><img src={logo} alt="" /></a>
        </div>
        <div className="bueno-main-menu" id="sticker">
          <div className="classy-nav-container breakpoint-off">
            <div className="container">
              <nav className="classy-navbar justify-content-between" id="buenoNav">
                <div className="classy-menu">
                  <div className="classynav">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#/contactus">Contact Us</a></li>
                      {/* <li><a href="#">About Us</a></li>
                      {/* <li><a href="#">Recipes</a>
                                                <div class="megamenu">
                                                    <ul class="single-mega cn-col-4">
                                                        <li><a href="#">- Recipe</a></li>
                                                        <li><a href="#">- Bread</a></li>
                                                        <li><a href="#">- Breakfast</a></li>
                                                        <li><a href="#">- Meat</a></li>
                                                        <li><a href="#">- Fastfood</a></li>
                                                        <li><a href="#">- Salad</a></li>
                                                        <li><a href="#">- Soup</a></li>
                                                    </ul>
                                                    <ul class="single-mega cn-col-4">
                                                        <li><a href="#">- Recipe</a></li>
                                                        <li><a href="#">- Bread</a></li>
                                                        <li><a href="#">- Breakfast</a></li>
                                                        <li><a href="#">- Meat</a></li>
                                                        <li><a href="#">- Fastfood</a></li>
                                                        <li><a href="#">- Salad</a></li>
                                                        <li><a href="#">- Soup</a></li>
                                                    </ul>
                                                    <ul class="single-mega cn-col-4">
                                                        <li><a href="#">- Recipe</a></li>
                                                        <li><a href="#">- Bread</a></li>
                                                        <li><a href="#">- Breakfast</a></li>
                                                        <li><a href="#">- Meat</a></li>
                                                        <li><a href="#">- Fastfood</a></li>
                                                        <li><a href="#">- Salad</a></li>
                                                        <li><a href="#">- Soup</a></li>
                                                    </ul>
                                                    <ul class="single-mega cn-col-4">
                                                        <li><a href="#">- Recipe</a></li>
                                                        <li><a href="#">- Bread</a></li>
                                                        <li><a href="#">- Breakfast</a></li>
                                                        <li><a href="#">- Meat</a></li>
                                                        <li><a href="#">- Fastfood</a></li>
                                                        <li><a href="#">- Salad</a></li>
                                                        <li><a href="#">- Soup</a></li>
                                                    </ul>
                                                </div>
                                            </li> */}
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </HashRouter>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-5">
              <p className="copywrite-text"><a href="#" />
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </p>
            </div>
            <div className="col-12 col-sm-7">
              <div className="footer-nav">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#/contactus">Contact Us</a></li>
                  {/* <li><a href="#">Recipes</a></li> */}
                  {/* <li><a href="#">About Us</a></li> */}
                  {/* <li><a href="#">Blog</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<Main />, document.getElementById('app'));

hot(module)(Main);