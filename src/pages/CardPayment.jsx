import { Box, Typography } from "@mui/material";
import CardPaymentForm from "../components/payment/CardPaymentForm";
import PaymentInfo from "../components/payment/PaymentInfo";
import { useSearchParams } from "react-router-dom";
import Confirmation from "../components/ui/Confirmation";
import { useEffect, useState } from "react";
import Loading from "../components/ui/Loading";

const styles = {
  title: {
    width: "70%",
    fontWeight: "800",
    color: "text.primary",
    margin: "0 auto",
    marginBottom: "2rem",
  },
};

const CardPaymentPage = () => {
  const [searchParams] = useSearchParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = Number(searchParams.get("total"));
  const installments = Number(searchParams.get("installments"));

  useEffect(() => {
    if (isSubmitting) {
      setTimeout(() => {
        setIsCompleted(true)
      }, 2000); 
    }
  }, [isSubmitting]);

  const onSubmitHandler = () => {
    setIsSubmitting(true);
  }

  return (
    <Box margin="0 auto">
      <Typography variant="h5" sx={styles.title}>
        {`João, pague o restante em ${installments}x no cartão`}
      </Typography>
      <CardPaymentForm total={total} installments={installments} onSubmit={onSubmitHandler} />
      <PaymentInfo step={1} total={total} installments={installments} />
      <Loading open={isSubmitting && !isCompleted}/>
      <Confirmation open={isCompleted}/>
    </Box>
  );
};

export default CardPaymentPage;
