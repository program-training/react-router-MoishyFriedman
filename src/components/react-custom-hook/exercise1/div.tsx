import { Box, Typography } from "@mui/material";
import { useButton } from "../../hooks/cuostom-hook";

export default function Div() {
  const { counter: divCounter, handlerCounter: divCounterFunction } =
    useButton();

  return (
    <>
      <Typography variant="h3">{divCounter}</Typography>
      <Box
        onMouseEnter={divCounterFunction}
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "yellow",
        }}
      />
    </>
  );
}
