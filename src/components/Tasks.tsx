import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  IonButton,
  IonCardContent,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonList,
  IonTitle,
  IonToolbar,
  IonLabel, 
  IonItem
} from "@ionic/react";
import { Task } from "../Task";

const API_URL = 'http://localhost:3000/todo_tasks';

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({
    id: 0,
    task: "",
    completed: false,
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get<Task[]>(`${API_URL}`);
    setTasks(response.data);
  };

  const handleAddTask = async () => {
    const response = await axios.post<Task>(`${API_URL}`, newTask);
    setTasks([...tasks, response.data]);
    setNewTask({ id: 0, task: "", completed: false });
  };

  const handleTaskCheckboxChange = async (taskId: number,task: string, checked: boolean) => {
    
    const response = await axios.put<Task>(`${API_URL}/${taskId}`, {
        task: task,
        completed: checked,
      })
    const updatedTask = tasks.map((task) =>
      task.id === taskId ? response.data : task
    );
    setTasks(updatedTask);
  };


  const handleDeleteTask = async (id: number) => {
    await axios.delete(`${API_URL}/${id}`);
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <IonContent>
        <IonHeader>
            <IonToolbar>
                <IonTitle>To-Do List</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonLabel position="floating">New Task</IonLabel>
        <IonInput
        aria-label="New Task"
        value={newTask.task}
        onIonChange={(e) =>
          setNewTask({ ...newTask, task: e.detail.value!.toString() })
        }
      />
      <IonButton type="submit" expand="block" onClick={handleAddTask}>Add task</IonButton>
      <IonList>
        {tasks.map((task) => (
          <IonItem key={task.id}>
            <IonCardContent>
              {task.task}
            </IonCardContent>
              <IonCheckbox
               aria-label="task"
                checked={task.completed}
                value={task.task}
                onIonChange={(event) => handleTaskCheckboxChange(task.id, task.task, event.detail.checked)}
              />
              <IonButton  color="danger" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default Tasks;