import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component {
	state = {
		title: ''
	}

	inputHandler = (x) => {
		this.setState({title: x.target.value})
	}

	submitHandler = (x) => {
		x.preventDefault();  //Prevents form submission
		this.props.addTodo(this.state.title); //Add new todo item
		this.setState({title: ''});  //Clear field
	}

	render() {
		return (
			<form onSubmit={this.submitHandler} style={{display: 'flex'}}>
				<input type="text" 
						name="title" 
						placeholder="Add Todo..."
						value={this.state.title} 
						onChange={this.inputHandler}
						style={{flex: '10', padding: '5px'}} />
				<input type="submit"
						value="Submit"
						className="btn"
						style={{flex: '1'}} />
			</form>
		)
	}
}

//PropTypes
AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired
};

export default AddTodo;