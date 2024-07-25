import { Box, Step, StepLabel, Typography } from "@mui/material";
import CustomStepIcon from "../ui/CustomStepIcon";

const styles = {
  label: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space around",
    padding: 0,
  },
  labelText: {
    fontSize: "1.125rem",
  },
};

const PaymentStep = ({ title, price, ...other }) => {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Step {...other}>
      <StepLabel StepIconComponent={CustomStepIcon} sx={styles.label}>
        <Box sx={styles.label}>
          <Typography component="span" sx={styles.labelText} fontWeight="600">
            {title}
          </Typography>
          <Typography component="span" sx={styles.labelText} fontWeight="800">
            {formattedPrice}
          </Typography>
        </Box>
      </StepLabel>
    </Step>
  );
};

export default PaymentStep;
