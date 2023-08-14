import styled from '@emotion/styled';
import { Input } from '../components/Atom/input';
import { Button } from '../components/Atom/button';
import { colors, gradients } from '../Styles/theme';
import { useRouter } from '../module/React-Router';
import { TodoData, useTodoList } from '../hook/useTodoList';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Todo() {
  const { currentPath } = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { localTodoData, updateLocalTodoData, getTodo, createTodo, updateTodo, deleteTodo } = useTodoList();

  useEffect(() => console.log(localTodoData));

  useLayoutEffect(() => {
    getTodo();
  }, []);

  const onAddBtnClick = () => {
    const value = inputRef.current?.value;
    if (value) {
      createTodo(value);
    }
    inputRef.current!.value = '';
  };

  const onChecked = (todoData: TodoData) => {
    updateTodo(todoData.id, {
      ...todoData,
      isCompleted: !todoData.isCompleted,
    });
  };

  const onDelete = (id: number) => {
    deleteTodo(id);
  };

  const onEdit = (id: number, isEdit: boolean) => {
    updateLocalTodoData(id, {
      isEdit,
    });
  };

  const TodoView = ({ todoData }: { todoData: TodoData }) => (
    <>
      <span>{todoData.todo}</span>
      <Button data-testid="modify-button" onClick={() => onEdit(todoData.id, true)}>
        수정
      </Button>
      <Button data-testid="delete-button" onClick={() => onDelete(todoData.id)}>
        삭제
      </Button>
    </>
  );

  const EditView = ({ todoData }: { todoData: TodoData }) => {
    const [inputValue, setInputValue] = useState(todoData.todo);
    return (
      <>
        <input
          data-testid="modify-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="edit-input"
        />
        <Button
          data-testid="submit-button"
          onClick={() =>
            updateTodo(todoData.id, {
              todo: inputValue,
              isCompleted: todoData.isCompleted,
              isEdit: false,
            })
          }
        >
          제출
        </Button>
        <Button data-testid="cancel-button" onClick={() => onEdit(todoData.id, false)}>
          취소
        </Button>
      </>
    );
  };

  return (
    <Container>
      <Title>{currentPath}</Title>
      <TodoInputBox>
        <TodoInput ref={inputRef} type="text" data-testid="new-todo-input" />
        <AddBtn data-testid="new-todo-add-button" onClick={onAddBtnClick}>
          추가
        </AddBtn>
      </TodoInputBox>
      <TodoList>
        {localTodoData.length ? (
          localTodoData.map((todoData) => (
            <li key={todoData.id} data-todoId={todoData.id}>
              <label onClick={(e) => e.preventDefault()}>
                <input type="checkbox" checked={todoData.isCompleted} onChange={() => onChecked(todoData)} />
                {todoData.isEdit ? <EditView todoData={todoData} /> : <TodoView todoData={todoData} />}
              </label>
            </li>
          ))
        ) : (
          <Empty>empty</Empty>
        )}
      </TodoList>
    </Container>
  );
}

const Container = styled.div`
  width: 80%;
  max-width: 50rem;
  height: 80%;
  max-height: 70rem;

  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid ${colors.indigo};
  background-color: ${({ theme }) => theme.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  background-image: ${gradients.pointGraidentBlue};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  font-size: 5rem;
`;

const TodoInputBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const TodoInput = styled(Input)`
  height: 3rem;
  padding: 1rem;
`;
const AddBtn = styled(Button)`
  max-width: 10rem;
  width: 7rem;
  height: 3rem;
`;

const TodoList = styled.ul`
  width: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & li {
    width: 100%;
    & label {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > *:last-child {
        transform: translateX(-0.2rem);
      }

      & .edit-input {
        width: 100%;
        font-size: inherit;
      }
    }
  }
`;

const Empty = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-top: 1rem;
`;

export default Todo;
