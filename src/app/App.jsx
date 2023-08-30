import "./App.scss";
import Header from "../components/Header";
import Lists from "../components/Lists";
import TodoHeader from "../components/Todo/TodoHeader";
import TodoCreate from "../components/Todo/TodoCreate";
import TodoListsd from "../components/Todo/TodoLists";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
function App() {
  const generalLists = [
    { id: 1, text: "Inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 day", icon: <FaCalendarAlt />, active: false },
  ];
  const projectList = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];

  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists data={generalLists} />
          </section>
          <section className="sidebar__category2">
            <div className="accordion">
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active " />
                  <p className="accordion__item__text">Project</p>
                </li>
              </div>
              <Lists data={projectList} />
            </div>
          </section>
        </aside>
      </div>
      <aside></aside>
      <div className="todo__content">
        <main className="todo__container">
          <TodoHeader />
          <TodoCreate />
          <TodoListsd />
        </main>
      </div>
    </div>
  );
}

export default App;
