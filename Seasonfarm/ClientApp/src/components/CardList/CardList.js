import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './CardList.less';

export class CardList extends PureComponent {
    render() {
        return (
            <div className="post-catagory section-padding-100-0 mb-70">
                <div className="container">
                    <div className="row justify-content-center">
                    {
                        this.props.cards.map((c) => (
                        <div key={Math.random().toString(16)} className="col-12 col-md-6 col-lg-4">
                            <div className="single-post-catagory mb-30">
                                <img src={c.image} />
                                <div className="catagory-content-bg">
                                    <div className="catagory-content">
                                        <a href="#" className="post-tag">{c.tag}</a>
                                        <a href="#" className="post-title">{c.title}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))
                    }                        
                    </div>
                </div>
            </div>
        );
    }       
}

CardList.defaultProps = {
    cards: []
}

CardList.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        tag: PropTypes.string
    }))
}
