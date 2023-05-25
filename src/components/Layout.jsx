import { Link, Outlet } from "react-router-dom"
import { actions } from '../features/todos/todosSlice';
import { useDispatch, useSelector } from "react-redux";

const Layout = () => {
    const userInput = useSelector(state => state.todos.userInput);
    const dispatch = useDispatch();

    const handleCreateTodo = (e) => {
        e.preventDefault();
        dispatch(actions.createTodo())
    }

    const handleSetUserInput = (userInput) => {
        dispatch(actions.setUserInput({ userInput }))
    }

    return (
        <div>
            <div className="px-4 p-2 bg-gray-700 text-white">
                <div className="row text-center p-8 ">
                    <h1 className="text-3xl font-bold bg-gray-600 p-4 rounded">What's the plan for today?</h1>
                </div>
            </div>
            <form className="flex gap-2 m-3" onSubmit={handleCreateTodo}>
                <input 
                    type="text"
                    value={userInput}
                    onChange={(e) => handleSetUserInput(e.target.value)}
                    placeholder="What to do"
                    className="p-4 w-full border-gray-400 border-solid border-2 rounded"
                />
                <input type="submit" className="btn" value="ADD" />
            </form>
            <nav >
                <ul className="flex gap-4 p-3 text-white">
                    <li className="p-3 bg-gray-600 rounded hover:bg-gray-700">
                        <Link to={"/"} className="nav-underline">ALL</Link>
                    </li>
                    <li className="p-3 bg-gray-600 rounded hover:bg-gray-700">
                        <Link to={"/active"} className="nav-underline">ACTIVE</Link>
                    </li>
                    <li className="p-3 bg-gray-600 rounded hover:bg-gray-700">
                        <Link to={"/completed"}className="nav-underline">COMPLETED</Link>
                    </li>
                </ul>
            </nav>
            <section className="p-2">
                <Outlet />
            </section>
        </div>
    )
}

export default Layout