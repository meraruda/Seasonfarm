import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './ImageCarousle.less';

export class ImageCarousel extends PureComponent {
    render() {
        return (
            <div className="image-carousel">
                <OwlCarousel
                    margin={30}
                    autoplay
                    // animateOut
                    // animateIn
                    loop
                    center
                    autoplayTimeout={7000}
                    smartSpeed={1000}
                    responsive={{
                        0: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        }
                    }}
                    // className="hero-post-slides owl-carousel"
                >
                    {this.props.images.map(i => (
                        <div key={Math.random().toString(16)} className="single-slide">
                        <div className="blog-thumbnail">
                            <a href="#"><img className="carousel-image" src={i.image} /></a>
                        </div>
                        <div className="blog-content-bg">
                            <div className="blog-content">
                                <a href="#" className="post-tag">{i.tag}</a>
                                <a href="#" className="post-title">{i.title}</a>
                                <div className="post-meta">
                                    <a href="#" className="post-date">{i.date.toString()}</a>
                                    {/* <a href="#" className="post-author">By Seasonfarm</a> */}
                                </div>
                            </div>
                        </div>
                    </div>))}                     
                </OwlCarousel>
            </div>
        );
    }       
}

ImageCarousel.defaultProps = {
    images: []
}

ImageCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        tag: PropTypes.string,
        date: PropTypes.stirng,
    }))
}
