import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";


const ColorButton = styled(Button)<ButtonProps>(({ color, theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: color,
  "&:hover": {
    backgroundColor: purple[700],
  },
}));

export default function CustomButtom() {
  return (
    <Stack spacing={2} direction="row">
      <ColorButton color="warning" >
        Custom CSS
      </ColorButton>
      <h2>HOLAAA</h2>
    </Stack>
  );
}
