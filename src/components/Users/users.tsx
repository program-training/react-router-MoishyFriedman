import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ListItem, List } from "@mui/material";

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

export default function Users(): JSX.Element {
  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async (): Promise<void> => {
      try {
        const getUsers = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!getUsers.ok) {
          throw new Error("server error");
        }
        const users: User[] = await getUsers.json();
        setUser(users);
      } catch (error) {
        if (error instanceof Error) console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div>
      <List>
        {user.map((user) => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <ListItem>{user.name}</ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
}
