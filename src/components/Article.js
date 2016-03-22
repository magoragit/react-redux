import React, {Component} from 'react';
import { Link } from 'react-router'

export default class Article extends Component {

    actionDelete() {
        this.props.delete(this.props.item.id);
    }

    render() {

        const item = this.props.item;
        const deletePost = this.props.delete;

        return (
            <li className="content-item">
                <h2>
                    {item.title}
                </h2>

                <p>
                    {item.body}
                </p>

                <div className="content-item__controls">
                    <input type="submit" value="delete post" onClick={this.actionDelete.bind(this)}/>


                    <Link to={'article/' + item.id}>
                        <input type="submit" value="view more" id="js-more"/>
                    </Link>
                </div>

            </li>
        )
    }
}