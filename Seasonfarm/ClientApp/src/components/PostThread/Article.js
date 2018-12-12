import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import './PostThread.less';

export class Article extends PureComponent {
    render() {
        const { post } = this.props;
        return (
        <div className="col-12 col-md-6">
            <div className="big-post-content text-center mb-50">
                <a href="#" className="post-tag">{post.tag}</a>
                <a href="#" className="post-title">{post.title}</a>
                <div className="post-meta">
                    <a href="#" className="post-date">{post.date}</a>
                    <a href="#" className="post-author">{post.author}</a>
                </div>
                <p>{post.description}</p>
                {/* <a href="#" className="btn bueno-btn">Read More</a> */}
            </div>
        </div>
        );
    }
}

Article.defaultProps = {
    post: {}
}

Article.propTypes = {
    post: PropTypes.shape({
        tag: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    })
}
