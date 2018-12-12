import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './GridList.less';

export class GridList extends PureComponent {
    render() {
        return (
            <div className="instagram-feed-area d-flex flex-wrap">
            {
                this.props.images.map((i) => (
                    <div className="single-instagram">
                        <img src={i.image} />
                        <a href={i.image} className="img-zoom" title="Instagram Image">+</a>
                    </div>
                ))
            }
            </div>
        );
    }       
}

GridList.defaultProps = {
    images: []
}

GridList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string        
    }))
}
