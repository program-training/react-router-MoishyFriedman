import { Typography, Button } from "@mui/material";
import { useLocalStorage } from "../../hooks/cuostom-hook";
import { useState } from "react";

export default function LocalStorage2() {
  const { get, set, deleteItem } = useLocalStorage();
  set("name", "moshe");
  const dataFromLocalStorage = get("name");
  deleteItem("name");
  const [mode, setMode] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => setMode(!mode)}>click here!</Button>
      {mode && <Typography>{dataFromLocalStorage}</Typography>}
    </>
  );
}
