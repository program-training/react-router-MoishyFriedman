import { Typography } from "@mui/material";
import { useLocalStorage } from "../../hooks/cuostom-hook";

export default function LocalStorage1() {
  const { getAll, get, set, deleteItem } = useLocalStorage(sessionStorage);
  set("data", "data");
  set("name", "moshe");
  set("name1", "moshe1");
  const dataFromLocalStorage = get("data");
  const allDataFromLocalStorage = getAll();
  deleteItem("name");

  return (
    <>
      <Typography>{dataFromLocalStorage}</Typography>
      <Typography>{allDataFromLocalStorage}</Typography>
    </>
  );
}
