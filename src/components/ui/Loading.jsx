import { Box, CircularProgress, Modal } from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "none",
  outline: "none",
};

const Loading = ({ open }) => {
  return (
    <Modal sx={{ position: "fixed" }} open={open}>
      <Box sx={styles}>
        <CircularProgress size={60} color="secondary" />
      </Box>
    </Modal>
  );
};

export default Loading;
