import React, { Component } from 'react';
import { ImageCarousel } from 'components/ImageCarousel';
import { CardList } from 'components/CardList';
import { PostThread } from 'components/PostThread';
import { GridList } from 'components/GridList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLine, faWeixin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from 'img/core-img/logo.png';
import header from 'img/bg-img/header.jpg';
import 'css/animate.css';
import 'css/classy-nav.css';
import 'css/magnific-popup.css';
import 'css/nice-select.css';
import 'css/bootstrap.min.css';
import './style.css';

export class Home extends Component {
    state = {
        posts: [
            {
                image: 'https://farm5.staticflickr.com/4528/38929327052_c56b6294de_k.jpg',
                title: 'ProductA',
                tag: 'best',
                date: '2018-12-12',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus, egestas tincidunt augue pellentesque. Suspendisse vestibulum sem in eros maximus, pretium commodo turpis convallis. Aenean scelerisque orci quis urna tempus, vitae interdum velit aliquet.'
            },
            {
                image: 'https://farm5.staticflickr.com/4918/31264873127_faab538e38_k.jpg',
                title: 'ProductB',
                tag: 'fresh',
                date: '2018-12-12',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique justo id elit bibendum pharetra non vitae lectus. Mauris libero felis, dapibus a ultrices sed, commodo vitae odio. Sed auctor tellus quis arcu tempus, egestas tincidunt augue pellentesque. Suspendisse vestibulum sem in eros maximus, pretium commodo turpis convallis. Aenean scelerisque orci quis urna tempus, vitae interdum velit aliquet.'
            },
        ],
        images: [
            { image: 'https://farm5.staticflickr.com/4528/38929327052_c56b6294de_k.jpg' },
            { image: 'https://farm5.staticflickr.com/4918/31264873127_faab538e38_k.jpg' },
            { image: 'https://farm3.staticflickr.com/2887/34347703385_cef69a6785_k.jpg' },
            { image: 'https://farm3.staticflickr.com/2860/33963757180_69bd9c1ab9_k.jpg' },
            { image: 'https://farm3.staticflickr.com/2813/33963089750_6e45fb9b69_k.jpg' }
        ]
    }

    render() {
        return (
            <div>
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
                                                {/* <li><a href="#">About Us</a></li>
                                            <li><a href="contact.html">Contact</a></li> */}
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
                <div>
                    <ImageCarousel
                        images={this.state.posts}
                    />
                </div>
                <div>
                    <CardList
                        cards={this.state.posts}
                    />
                </div>
                <div>
                    <PostThread
                        posts={this.state.posts}
                    />
                </div>
                <div>
                    <GridList
                        images={this.state.images}
                     />
                </div>
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
                                        <li className="active"><a href="#">Home</a></li>
                                        {/* <li><a href="#">Recipes</a></li> */}
                                        {/* <li><a href="#">About Us</a></li> */}
                                        {/* <li><a href="#">Blog</a></li> */}
                                        {/* <li><a href="#">Contact</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>);
    }
}
