import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { Article } from './Article';
import { Image } from './Image';
import './PostThread.less';

export class PostThread extends PureComponent {

    render() {
        return (
            <div className="big-posts-area mb-50">
                <div className="container">
                    {
                        this.props.posts.map((p, i) => (
                            <div key={Math.random().toString(16)}>
                                {i % 2 === 0 ?
                                <div className="row align-items-center">
                                    <Image post={p} />
                                    <Article post={p} />
                                </div>
                                :
                                <div className="row align-items-center">
                                    <Article post={p} />
                                    <Image post={p} />
                                </div>
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}

PostThread.defaultProps = {
    posts: []
}

PostThread.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        tag: PropTypes.string,
        title: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string
    }))
}
