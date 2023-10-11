import { Button, Typography } from "@mui/material";
import { useButton } from "../../hooks/cuostom-hook";

export default function Buttons() {
  const { counter: redCounter, handlerCounter: redCounterFunction } =
    useButton();
  const { counter: blueCounter, handlerCounter: blueCounterFunction } =
    useButton();

  return (
    <>
      <Typography variant="h3">{redCounter}</Typography>
      <Button sx={{ backgroundColor: "red" }} onClick={redCounterFunction}>
        add one
      </Button>
      <Typography variant="h3">{blueCounter}</Typography>
      <Button sx={{ backgroundColor: "blue" }} onClick={blueCounterFunction}>
        add one
      </Button>
    </>
  );
}
