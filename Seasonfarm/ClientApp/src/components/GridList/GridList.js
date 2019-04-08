import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './GridList.less';

export const GridList = (props) => {
    return (
        <div className="instagram-feed-area d-flex flex-wrap">
            {
                props.images.map((i) => (
                    <div key={Math.random().toString(16)} className="single-instagram">
                        <img src={i.image} />
                        <a href={i.image} className="img-zoom">+</a>
                    </div>
                ))
            }
        </div>
    );
}

GridList.defaultProps = {
    images: []
}

GridList.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string
    }))
}
