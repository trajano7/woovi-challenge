import { useSearchParams } from "react-router-dom";
import PixPayment from "../components/payment/PixPayment";
import Loading from "../components/ui/Loading";
import { useState } from "react";
import Confirmation from "../components/ui/Confirmation";

const PixPaymentPage = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const total = searchParams.get("total");
  const installments = searchParams.get("installments");

  const setIsLoadingHandler = () => {
    setIsLoading(true);
  };

  const paymentCompletedHandler = () => {
    setIsPaymentCompleted(true);
  }

  return (
    <>
      <PixPayment
        total={Number(total)}
        installments={Number(installments)}
        setIsLoading={setIsLoadingHandler}
        onPaymentCompleted={paymentCompletedHandler}
      />
      <Loading open={isLoading && !isPaymentCompleted} />
      <Confirmation open={isPaymentCompleted}/>
    </>
  );
};

export default PixPaymentPage;
