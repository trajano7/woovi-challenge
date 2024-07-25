import { useState } from "react";
import PaymentMethod from "../components/payment/PaymentMethod";
import Loading from "../components/ui/Loading";


const PaymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const setIsLoadingHandler = () => {
    setIsLoading(true);
  }

  return (
    <>
      <PaymentMethod setIsLoading={setIsLoadingHandler}/>
      <Loading open={isLoading} />
    </>
  );
};

export default PaymentPage;
