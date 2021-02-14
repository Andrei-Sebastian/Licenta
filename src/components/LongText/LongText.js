import React, {Component} from 'react';
// import './Post.css';


class Text extends Component {
    state = {
        text: this.props.text,
        maxLength: this.props.maxLength ? this.props.maxLength : false,
        addLabel: null,
        typeSee: null,
    }

    componentDidMount() {
        let text = this.state.text;
        if (this.state.maxLength && this.state.text.length > this.state.maxLength) {
            text = text.slice(0, parseInt(this.state.maxLength));
            this.setState({
                text: text + "... ",
                maxLength: this.state.maxLength,
                addLabel:  <label className="seeMore" onClick={this.onClickHandle.bind(this)}>See more</label>,
                typeSee: "more" 
            })
        }
    }

    
    onClickHandle() {
        if (this.state.typeSee === "more") {
            this.setState({
                text: this.props.text + " ",
                addLabel:  <label className="seeMore" onClick={this.onClickHandle.bind(this)}>See less</label>,
                typeSee: "less",
                screenPosition: window.pageYOffset
            })
        } else {
            window.scrollTo(0, this.state.screenPosition);
            this.setState({
                text: this.props.text.slice(0, this.state.maxLength) + "... ",
                addLabel:  <label className="seeMore" onClick={this.onClickHandle.bind(this)}>See more</label>,
                typeSee: "more" 
            });
        }

    }

    render() {
        return (
            <label className="descriptionText">
                {this.state.text}
                {this.state.addLabel}
            </label>          
        )
    } 
}

export default Text;