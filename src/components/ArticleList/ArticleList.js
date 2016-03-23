import React, {Component} from 'react';
// components
import Article from './../Article/Article.js';

export default class ArticleList extends Component {

    render() {

        const content = this.props.content;

        let contentList = content.map( item => {
            return <Article item = {item} delete={this.props.actions.DeletePost} />
        });

        return (
            <ul className="content">
                {contentList}
            </ul>
        )
    }
}