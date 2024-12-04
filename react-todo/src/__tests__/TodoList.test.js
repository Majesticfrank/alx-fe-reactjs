import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from   
 '../components/TodoList';

test('renders initial todos', () => {
  render(<TodoList />);
  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(2);
});

test('adds a new todo', () => {
  render(<TodoList />);
  const input = screen.getByRole('textbox');
  const button = screen.getByRole('button', { name: 'Add Todo' });

  userEvent.type(input, 'Test Todo');
  userEvent.click(button);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(3);
  expect(todoItems[2]).toHaveTextContent('Test Todo');
});

test('toggles a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  const checkbox = todoItem.querySelector('input[type="checkbox"]');

  userEvent.click(checkbox);

  expect(todoItem).toHaveStyle({ textDecoration: 'line-through' });
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todoItem = screen.getByText('Learn React');
  const deleteButton = todoItem.querySelector('button');

  userEvent.click(deleteButton);

  const todoItems = screen.getAllByRole('listitem');
  expect(todoItems).toHaveLength(1);
});
