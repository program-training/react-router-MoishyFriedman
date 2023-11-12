import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type Params = {
  id: string;
};

export default function UserDetails(): JSX.Element {
  const [user, setUser] = useState<User>();

  const params = useParams<Params>();

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const getUser = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        if (!getUser.ok) {
          throw new Error("server error");
        }
        const user: User = await getUser.json();
        setUser(user);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <Link to={"/"}>
        <Button>to home</Button>
      </Link>
      <Typography>{user?.email}</Typography>
      <Typography>
        {user?.address.city} {user?.address.street}
      </Typography>
      <Typography>{user?.phone}</Typography>
      <Link to={`/tasks/${params.id}`}>
        <Button>to tasks</Button>
      </Link>
    </div>
  );
}
