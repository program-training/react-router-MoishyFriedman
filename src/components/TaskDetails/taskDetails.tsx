import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

interface Task {
  postId: number;
  id: number;
  title: string;
  body: string;
}

type Params = {
  id: string;
};

export default function TaskDetail(): JSX.Element {
  const [task, setTask] = useState<Task>();

  const params = useParams<Params>();
  useEffect(() => {
    const getTask = async (): Promise<void> => {
      try {
        const getTasks = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${params.id}`
        );
        if (!getTasks.ok) {
          throw new Error("server error");
        }
        const task: Task = await getTasks.json();
        setTask(task);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    };
    getTask();
  }, []);

  return (
    <div>
      <Link to={"/"}>
        <Button>to home</Button>
      </Link>
      <Typography>{task?.postId}</Typography>
      <Typography>{task?.id}</Typography>
      <Typography>{task?.title}</Typography>
      <Typography>{task?.body}</Typography>
    </div>
  );
}
