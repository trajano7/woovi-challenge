import {
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
} from "@mui/material";
import PaymentCard from "./PaymentCard";
import StyledBox from "../ui/StyledBox";
import { dataDummy } from "../../utils/data";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  styledBox: {
    padding: 0,
    border: "none",
    marginBottom: "2rem",
  },
  formLabel: {
    marginBottom: "2rem",
  }
};

const PaymentMethod = ({ setIsLoading }) => {
  const [option, setOption] = useState("");
  const navigate = useNavigate();

  const bestOptionTxt = (
    <Typography variant="body1" color="#ffff">
      <Typography component="span" variant="body1" sx={{ fontWeight: "800" }}>
        -3% de juros:
      </Typography>{" "}
      Melhor opção de parcelamento
    </Typography>
  );

  const cashbackTxt = (
    <Typography variant="body1" color="#ffff">
      🤑{" "}
      <Typography component="span" variant="body1" sx={{ fontWeight: "800" }}>
        R$ 300,00
      </Typography>{" "}
      de volta no seu Pix na hora
    </Typography>
  );

  useEffect(() => {
    if (option) {
      const totalAmount = dataDummy[Number(option)-1].totalAmount;
      setIsLoading();
      setTimeout(() => {
        navigate(`pix-qr-code?total=${totalAmount}&installments=${option}`);
      }, 2000); 
    }
  }, [option, navigate, dataDummy]);

  const onSelectHandler = (installmentOpt) => {
    setOption(installmentOpt.toString());
  }

  return (
    <FormControl>
      <FormLabel id="payment-options" sx={styles.formLabel}>
        <Typography variant="h5" sx={{ fontWeight: "800", color: "text.primary" }}>João, como você quer pagar?</Typography>
      </FormLabel>
      <RadioGroup
        aria-labelledby="payment-options"
        name="payment-options"
        value={option}
      >
        <StyledBox className={styles.styledBox} title={"Pix"}>
          <PaymentCard
            data={dataDummy[0]}
            bannerTxt={cashbackTxt}
            solo
            selected={option === dataDummy[0].installments.toString()}
            onSelect={onSelectHandler}
          />
        </StyledBox>
        <StyledBox className={styles.styledBox} title={"Pix Parcelado"}>
          {dataDummy.slice(1).map((item, index) => {
            const isLastItem = index === dataDummy.slice(1).length - 1;
            const isFirstItem = index === 0;

            let neighbor = "";
            if (option !== "1" && item.installments-1 === Number(option)) {
              neighbor = "bottom";
            } 
            else if (item.installments+1 === Number(option)) {
              neighbor = "top";
            }

            return (
              <PaymentCard
                key={index}
                data={item}
                first={isFirstItem}
                last={isLastItem}
                neighbor={neighbor}
                bannerTxt={item.bestOption ? bestOptionTxt : ""}
                selected={option === item.installments.toString()}
                onSelect={onSelectHandler}
              />
            );
          })}
        </StyledBox>
      </RadioGroup>
    </FormControl>
  );
};

export default PaymentMethod;
