import { Box, Typography } from "@mui/material";
import PaymentQrCode from "./PaymentQrCode";
import PaymentInfo from "./PaymentInfo";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  paymentPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    width: "70%",
    fontWeight: "800",
    color: "text.primary",
    marginBottom: "2rem",
  },
};

const PixPayment = ({
  total,
  installments,
  setIsLoading,
  onPaymentCompleted,
}) => {
  const [isPaid, setIsPaid] = useState(false);
  const navigate = useNavigate();

  const downPaymentValueStr = (total / installments).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  useEffect(() => {
    if (isPaid) {
      setIsLoading();
      setTimeout(() => {
        if (installments === 1) {
          onPaymentCompleted();
        } else {
          navigate(
            `/payment/card-form?total=${total}&installments=${installments}`
          );
        }
      }, 2000);
    }
  }, [isPaid, navigate]);

  const onQrCodeCopyHandler = () => {
    setIsPaid(true);
  };

  return (
    <Box sx={styles.paymentPage}>
      <Typography variant="h5" sx={styles.title}>
        João, pague a entrada de R$ {downPaymentValueStr} pelo Pix
      </Typography>
      <PaymentQrCode onQrCodeCopy={onQrCodeCopyHandler} />
      <PaymentInfo step={0} total={total} installments={installments} />
    </Box>
  );
};

export default PixPayment;
