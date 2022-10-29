import { SearchForm, Text } from 'components';
import { Component } from 'react';
import { TodoWrapper, DeleteButton, EditButton } from './Todo.styled';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    console.log(localStorage);
  }

  render() {
    const { id, text } = this.props;
    return (
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO {id}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button">
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    );
  }
}
