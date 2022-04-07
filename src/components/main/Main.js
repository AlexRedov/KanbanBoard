import React, { useState, useEffect } from "react";
import MainTasks from "../mainTasks";
import TaskPage from "../taskPage";
import { Route, Switch } from "react-router-dom";

export const AppContext = React.createContext(null);

/* Write localStorage */
const Main = ({ setActiveAmount, setFinishedAmount }) => {
  const [backlogTasks, setBacklogTasks] = useState(
    JSON.parse(localStorage.getItem("backlogTasks"))
  );
  const [readyTasks, setReadyTasks] = useState(
    JSON.parse(localStorage.getItem("readyTasks"))
  );
  const [inProgressTasks, setInProgressTasks] = useState(
    JSON.parse(localStorage.getItem("inProgressTasks"))
  );
  const [finishedTasks, setFinishedTasks] = useState(
    JSON.parse(localStorage.getItem("finishedTasks"))
  );

  localStorage.setItem("backlogTasks", JSON.stringify(backlogTasks));
  localStorage.setItem("readyTasks", JSON.stringify(readyTasks));
  localStorage.setItem("inProgressTasks", JSON.stringify(inProgressTasks));
  localStorage.setItem("finishedTasks", JSON.stringify(finishedTasks));

  /* Use effects */
  useEffect(() => {
    if (backlogTasks) {
      setActiveAmount(backlogTasks.length);
    }
  }, [backlogTasks, setActiveAmount]);

  useEffect(() => {
    if (finishedTasks) {
      setFinishedAmount(finishedTasks.length);
    }
  }, [finishedTasks, setFinishedAmount]);

  /* Add task block*/
  const addTaskBacklog = (task) => {
    if (backlogTasks === null) {
      setBacklogTasks([task]);
    } else {
      setBacklogTasks([...backlogTasks, task]);
    }
  };

  const addTaskReady = (task) => {
    if (readyTasks === null) {
      setReadyTasks([backlogTasks.find((item) => item.id == task)]);
    } else {
      setReadyTasks([
        ...readyTasks,
        backlogTasks.find((item) => item.id == task),
      ]);
    }

    setBacklogTasks(backlogTasks.filter((item) => item.id != task));
  };

  const addTaskInProgress = (task) => {
    if (inProgressTasks === null) {
      setInProgressTasks([readyTasks.find((item) => item.id == task)]);
    } else {
      setInProgressTasks([
        ...inProgressTasks,
        readyTasks.find((item) => item.id == task),
      ]);
    }

    setReadyTasks(readyTasks.filter((item) => item.id != task));
  };

  const addTaskFinished = (task) => {
    if (finishedTasks === null) {
      setFinishedTasks([inProgressTasks.find((item) => item.id == task)]);
    } else {
      setFinishedTasks([
        ...finishedTasks,
        inProgressTasks.find((item) => item.id == task),
      ]);
    }

    setInProgressTasks(inProgressTasks.filter((item) => item.id != task));
  };

  const renderTasks = (routerProps) => {
    let taskId = parseInt(routerProps.match.params.id);
    let foundTask = backlogTasks
      .concat(readyTasks, inProgressTasks, finishedTasks)
      .find((task) => task.id === taskId);
    return foundTask ? (
      <TaskPage task={foundTask} />
    ) : (
      /* Empty task */
      <p>This task not found</p> 
    ) ;
  };

  return (
    <AppContext.Provider value={{ addTaskBacklog }}>
      <Switch>
        <main className="main--color">
          <div className="main container">
            <Route exact path="/">
              <MainTasks
                values={{
                  backlogTasks,
                  readyTasks,
                  addTaskReady,
                  inProgressTasks,
                  addTaskInProgress,
                  finishedTasks,
                  addTaskFinished,
                }}
              />
            </Route>
            <Route
              path="/tasks/:id"
              render={(routerProps) => renderTasks(routerProps)}
            />
          </div>
        </main>
      </Switch>
    </AppContext.Provider>
  );
};

export default Main;
