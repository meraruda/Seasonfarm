import React, { Component } from 'react';
import { ImageCarousel } from 'components/ImageCarousel';
import { CardList } from 'components/CardList';
import { PostThread } from 'components/PostThread';
import { GridList } from 'components/GridList';


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
            </div>);
    }
}
