import React, {Component} from 'react';

export default class Article extends Component {

    constructor() {
        super();

        this.state ={
            title: "New article",
            body: "New text of article"
        }
    }

    actionChangeTitle(event) {
        this.setState({title: event.target.value});
    }

    actionChangeBody(event) {
        this.setState({body: event.target.value});
    }

    actionPostArticle() {
        this.props.actionAdd(this.state);
    }


    render() {

        const item = this.props.item;
        const deletePost = this.props.delete;

        return (
           <form className="form">
               <div className="form-group">
                   <label htmlFor="">Title</label>
                   <input type="text" className="form-control" name="title" value = {this.state.title} onChange={this.actionChangeTitle.bind(this)}/>
               </div>
              <div class="form-group">
                   <label htmlFor="">Text</label>
                   <textarea name="body" className="form-control" value={this.state.body} onChange={this.actionChangeBody.bind(this)} placeholder="text of new article"></textarea>
               </div>

               <button type="button" className="btn btn-default" onClick={this. actionPostArticle.bind(this)} style={{"margin-top": "20px"}}>Add post</button>

           </form>
        )
    }
}