import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import classes from "./Confirmation.module.css";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  outline: "none",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "8px",
};

const Confirmation = ({ open }) => {
  return (
    <Modal sx={{ position: "fixed" }} open={open}>
      <Box className={classes.fadeIn} sx={styles}>
        <CheckCircleIcon
          className={classes.pop}
          sx={{ fontSize: 100, color: "secondary.main" }}
        />
        <Typography
          className={classes.pop}
          variant="h4"
          sx={{ mt: 2, color: "secondary.main", fontWeight: "800" }}
        >
          Pagamento Efetuado
        </Typography>
      </Box>
    </Modal>
  );
};

export default Confirmation;
