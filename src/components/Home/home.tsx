import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to={"/users"}>
        <Button>to users</Button>
      </Link>
      <Link to={"/products"}>
        <Button>to products</Button>
      </Link>
    </>
  );
}
