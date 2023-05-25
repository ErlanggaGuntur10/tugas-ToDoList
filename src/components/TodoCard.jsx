import { useState } from "react";
import { BsCheck, BsCheck2All, BsCheck2Circle, BsCheckCircle, BsCheckCircleFill, BsFillTrashFill, BsPencilFill, BsPencilSquare, BsTrash2Fill, BsTrashFill } from "react-icons/bs"
import { useDispatch } from "react-redux";

import { actions } from "../features/todos/todosSlice";

const TodoCard = ({
    todo,
}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    const [updateContent, setUpdateContent] = useState(todo.content);

    const handleToggle = (id) => {
        dispatch(actions.toggleTodo({ id }))
    }

    const handleRemove = (id) => {
        dispatch(actions.deleteTodo({ id }))
    }

    const handleEdit = () => {
        setEdit(true);
    };

    const handleSave = (id) => {
        dispatch(actions.editTodo({ id, content: updateContent }));
        setEdit(false);
    };

    return (
        <div className="custom flex justify-between p-2 bg-gray-400 rounded mb-5 items-center">
            {/* completed, edit, save, remove */}
            <div className="flex gap-3 items-right">
            <input
                    type="checkbox"
                    name="completed"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo.id)}
                />
                <label htmlFor="completed"></label>
                <div></div>
            </div>
            
            {/* Edit teks */}
            <div className={`flex-grow ${todo.completed ? "line-through" : " "}`}>
            {edit ? (
                    <input
                        type="text"
                        value={updateContent}
                        onChange={(e) => setUpdateContent(e.target.value)}
                        className="form-control"
                />
                ) : (
                    <p style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                        {todo.content}
                    </p>
                )}

            
            </div>
                {!todo.completed && (
                <div className="flex gap-4 items-center">
                {edit ? (
                        <button className="btn" onClick={() => handleSave(todo.id)}>
                            <BsCheck2Circle/>
                        </button>
                    ) : (
                        <button className="btn" onClick={handleEdit}>
                            <BsPencilFill/>
                        </button>
                    )}
                        <button className="btn" onClick={() => handleRemove(todo.id)}>
                            <BsTrashFill/>
                        </button>
                </div>
                )}
        </div>
    )
}

export default TodoCard;