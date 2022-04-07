import React from "react";
import TaskContainer from "../taskContainer";

const MainTasks = ({ values }) => {
  return (
    <section className="main-container">
      <TaskContainer title="Backlog">{values.backlogTasks}</TaskContainer>
      <TaskContainer
        title="Ready"
        tasksToChoose={values.backlogTasks}
        addTaskTo={values.addTaskReady}
      >
        {values.readyTasks}
      </TaskContainer>
      <TaskContainer
        title="In Progress"
        tasksToChoose={values.readyTasks}
        addTaskTo={values.addTaskInProgress}
      >
        {values.inProgressTasks}
      </TaskContainer>
      <TaskContainer
        title="Finished"
        tasksToChoose={values.inProgressTasks}
        addTaskTo={values.addTaskFinished}
      >
        {values.finishedTasks}
      </TaskContainer>
    </section>
  );
};

export default MainTasks;
