import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './PostThread.less';

export class Image extends PureComponent {
    render() {
        const { post } = this.props;
        return (
        <div className="col-12 col-md-6">
            <div className="big-post-thumbnail mb-50">
                <img src={post.image} />
            </div>
        </div>
        );
    }
}

Image.defaultProps = {
    post: {}
}

Image.propTypes = {
    post: PropTypes.shape({
        tag: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    })
}
