import { Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function SnackbarComponent(props: any) {
  const handleClose = () => {
    props.setOpen(false);
    return;
  };

  return (
    <Snackbar
      anchorOrigin={{
        horizontal: "center",
        vertical: props.vertical ?? "bottom",
      }}
      open={props.open}
      autoHideDuration={props.duration ?? 1000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={props.type} sx={{ width: "100%" }}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}
