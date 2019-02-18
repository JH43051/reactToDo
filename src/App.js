import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/About';

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    Axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => this.setState({todos: res.data})
    );
  }

  //Toggles "completed" state
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  //Deletes a todo item
  delTodo = (id) => {
    Axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then(
      res => this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    );
  }

  //Adds a todo item
  addTodo = (title) => {
    let uniqueID = this.state.todos[this.state.todos.length - 1].id + 1;

    //const newTodo = {
    //  id: uniqueID,
    //  title: title,
    //  completed: false
    //};
    Axios.post('http://jsonplaceholder.typicode.com/todos', {
      id: uniqueID,
      title: title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos}
                        markComplete={this.markComplete}
                        delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
