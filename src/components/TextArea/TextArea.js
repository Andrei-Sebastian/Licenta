import './TextArea.css';
import React, {Component} from 'react';

class TextArea extends Component {
    allowTab = (e) => {
        if ( e.key === 'Tab' && !e.shiftKey ) {
            document.execCommand('insertText', false, "\t");
            e.preventDefault();
            return false;
         }
    }
	
	render() {
		return (
			<textarea
				rows={this.props.rows}
				value={this.props.description}
				placeholder='Enter your text here...'
				className={this.props.additionalClass ? 'textarea ' + this.props.additionalClass : 'textarea'}
				onChange={e => this.props.onChange(e)}
                onKeyDown={e => this.allowTab(e)}
			/>
		);
	}
}

export default TextArea;