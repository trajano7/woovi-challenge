import { Box, Typography } from "@mui/material";

const styles = {
  box: {
    position: "relative",
    py: 0,
    width: "100%",
    borderRadius: 2,
    border: "1px solid blue",
    borderColor: "divider",
    backgroundColor: "background.paper",
    padding: "2rem",
    margin:0
  },
  box__title: {
    position: "absolute",
    top: "-.8em",
    left: "1em",
    backgroundColor: "#E5E5E5",
    padding: "0 20px",
    borderRadius: "50px",
  },
};

const StyledBox = ({ title, children, className }) => {
  return (
    <Box sx={[styles.box, className]}>
      <Box sx={styles.box__title}>
        <Typography variant="subtitle2" sx={{fontSize: "1.125rem", fontWeight: "800"}}>{title}</Typography>
      </Box>
      {children}
    </Box>
  );
};

export default StyledBox;
