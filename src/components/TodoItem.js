import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#f4f4f4',
			padding: '10px',
			borderBottom: '1px #cccccc dotted',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		}
	}

	markComplete = () => {

	}

	render() {
		//Instead of...
		//const id = this.props.todo.id;
		//const title = this.props.todo.title;
		//...we can destructure as below for same effect...
		const {id, title} = this.props.todo;

		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox"
							style={{marginRight: '10px'}}
							onChange={this.props.markComplete.bind(this, id)} />
					{title}
					<button onClick={this.props.delTodo.bind(this, id)}
							style={btnStyle}>X</button>
				</p>
			</div>
		)
	}
}

//PropTypes
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

const btnStyle = {
	background: '#ff0000',
	color: '#000000',
	border: 'none',
	padding: '5px 10px',
	borderRadius: '50%',
	cursor: 'pointer',
	float: 'right'
};

export default TodoItem;