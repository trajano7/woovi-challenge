import { Box } from "@mui/material";
import CardPaymentForm from "./CardPaymentForm";
import PaymentInfo from "./PaymentInfo";

const CardPayment = () => {
  return (
    <Box margin="0 auto">
      <CardPaymentForm />
      <PaymentInfo />
    </Box>
  );
};

export default CardPayment;
