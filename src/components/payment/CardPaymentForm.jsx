import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import useInput from "../../hooks/use-input";
import {
  isNotEmpty,
  validateCPF,
  validateCVV,
  validateCreditCardNumber,
  validateExpiryDate,
} from "../../utils/validation";


const formatCPF = (value) => {
  const cleanValue = value.replace(/\D/g, "");

  const formattedValue = cleanValue
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return formattedValue;
};

const formatCreditCardNumber = (value) => {
  const cleanValue = value.replace(/\D/g, "");

  const formattedValue = cleanValue
    .replace(/(\d{4})(\d)/, "$1 $2") 
    .replace(/(\d{4}) (\d{4})(\d)/, "$1 $2 $3") 
    .replace(/(\d{4}) (\d{4}) (\d{4})(\d)/, "$1 $2 $3 $4"); 

  return formattedValue;
};

const formatExpiryDate = (value) => {
  const cleanValue = value.replace(/\D/g, "");

  if (cleanValue.length <= 2) {
    return cleanValue; // Exibe apenas o mês
  } else if (cleanValue.length <= 4) {
    return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2)}`; // Exibe MM/YY
  }
  return `${cleanValue.slice(0, 2)}/${cleanValue.slice(2, 4)}`;
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.75rem",
  },
  input_row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "1.375rem",
  },
  select__label: {
    color: "text.primary",
    fontWeight: "600",
    "&.Mui-focused": {
      color: "text.primary",
      fontWeight: 600,
    },
  },
};

const CardPaymentForm = ({ total, installments, onSubmit }) => {
  const fullName = useInput(isNotEmpty);
  const cpf = useInput(validateCPF, formatCPF);
  const card = useInput(validateCreditCardNumber, formatCreditCardNumber);
  const cvv = useInput(validateCVV);
  const expiration = useInput(validateExpiryDate, formatExpiryDate);
  const installmentsOpt = useInput(
    isNotEmpty,
    (value) => value,
    installments.toString()
  );

  const installmentsValue = total / installments;
  const installmentsValueStr = installmentsValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const data = {
      fullName: fullName.value,
      cpf: cpf.value,
      card: card.value,
      cvv: cvv.value,
      expiration: expiration.value,
      installments: installmentsOpt.value
    }

    console.log("Submit data: ", data);

    onSubmit();

  };

  return (
    <Box
      component="form"
      sx={styles.form}
      noValidate
      autoComplete="off"
      onSubmit={onSubmitHandler}
    >
      <TextField
        onChange={fullName.valueChangeHandler}
        onBlur={fullName.valueBlurHandler}
        value={fullName.value}
        error={fullName.hasError}
        helperText={fullName.hasError ? "Nome Inválido." : ""}
        label="Nome Completo"
        fullWidth
        name="fullName"
      />
      <TextField
        onChange={cpf.valueChangeHandler}
        onBlur={cpf.valueBlurHandler}
        value={cpf.value}
        error={cpf.hasError}
        helperText={cpf.hasError ? "CPF inválido" : ""}
        label="CPF"
        fullWidth
        name="cpf"
        inputProps={{ maxLength: 14 }}
      />
      <TextField
        onChange={card.valueChangeHandler}
        onBlur={card.valueBlurHandler}
        value={card.value}
        error={card.hasError}
        helperText={card.hasError ? "Número do cartão inválido" : ""}
        label="Número do cartão"
        fullWidth
        name="cardNumber"
        inputProps={{ maxLength: 19 }}
      />
      <Box sx={styles.input_row}>
        <TextField
          onChange={expiration.valueChangeHandler}
          onBlur={expiration.valueBlurHandler}
          value={expiration.value}
          error={expiration.hasError}
          helperText={expiration.hasError ? "Vencimento inválido" : ""}
          label="Vencimento"
          inputProps={{ maxLength: 5 }}
          variant="outlined"
        ></TextField>
        <TextField
          onChange={cvv.valueChangeHandler}
          onBlur={cvv.valueBlurHandler}
          value={cvv.value}
          error={cvv.hasError}
          helperText={cvv.hasError ? "CVV inválido" : ""}
          label="CVV"
          inputProps={{ maxLength: 4 }}
          variant="outlined"
        />
      </Box>
      <FormControl fullWidth sx={{ textAlign: "left" }} error={installmentsOpt.hasError}>
        <InputLabel sx={styles.select__label} id="demo-simple-select-label">
          Parcelas
        </InputLabel>
        <Select
          onChange={installmentsOpt.valueChangeHandler}
          onBlur={installmentsOpt.valueBlurHandler}
          value={installmentsOpt.value}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Parcelas"
        >
          <MenuItem
            value={installments}
          >{`${installments}x R$ ${installmentsValueStr}`}</MenuItem>
        </Select>
        {installmentsOpt.hasError && <FormHelperText>Número de parcelas inválido</FormHelperText>}
      </FormControl>
      <Button type="submit" variant="contained">Pagar</Button>
    </Box>
  );
};

export default CardPaymentForm;
