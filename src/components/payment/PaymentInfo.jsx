import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Stepper,
  Typography,
} from "@mui/material";
import PaymentStep from "./PaymentStep";
import CustomStepConnector from "../ui/CustomStepConnector";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const formatDate = (date) => {
  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); 
  let year = date.getFullYear();

  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");

  // Montar a string no formato "dd/MM/yyyy - HH:mm"
  let formattedDate = `${day}/${month}/${year} - ${hours}:${minutes}`;

  return formattedDate;
};

const styles = {
  info: {
    width: "100%",
  },
  stepper: {
    marginBottom: "1.75rem",
    "& .MuiStepLabel-label": {
      color: "text.primary",
    },
  },
  total: {
    marginBottom: "1.75rem",
    marginTop: "1.75rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  accordion: {
    padding: "0",
    boxShadow: "none",
    marginBottom: "1.75rem",
    marginTop: "1.75rem",
    "&.MuiAccordion-root:before": {
      display: "none",
    },
  },
  accordion__summary: {
    padding: "0",
    minHeight: "auto",
    fontWeight: "800",
    "& .MuiAccordionSummary-content": {
      margin: "0",
    },
  },
};

const PaymentInfo = ({ total, installments, step }) => {
  const downPaymentValue = total / installments;
  const downPaymentValueStr = downPaymentValue.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const remainingValueStr = (total - downPaymentValue).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const totalStr = total.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const expirationDate = formatDate(currentDate);

  return (
    <Box sx={styles.info}>
      <Box marginBottom="1.25rem">
        <Typography variant="body1" color="text.tertiary" fontWeight="600">
          Prazo de pagamento:
        </Typography>
        <Typography variant="body1" fontWeight="800">
          {expirationDate}
        </Typography>
      </Box>
      <Stepper
        sx={styles.stepper}
        activeStep={step}
        orientation="vertical"
        connector={<CustomStepConnector />}
      >
        <PaymentStep
          title={
            installments === 1 ? "Pagamento único no Pix " : "1ª entrada no Pix"
          }
          price={`R$ ${downPaymentValueStr}`}
          key={0}
        />
        {installments !== 1 && (
          <PaymentStep
            title="2ª no cartão"
            price={`R$ ${remainingValueStr}`}
            key={1}
          />
        )}
      </Stepper>
      <Divider />
      <Box sx={styles.total}>
        <Typography fontSize="0.875rem" fontWeight="600">
          CET: 0,5%
        </Typography>
        <Typography fontSize="1.125rem" fontWeight="600">
          Total: R$ {totalStr}
        </Typography>
      </Box>
      <Divider />
      <Accordion sx={styles.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "text.primary" }} />}
          sx={styles.accordion__summary}
        >
          Como funciona?
        </AccordionSummary>
        <AccordionDetails sx={{ margin: "0" }}>
          Lorem ipsum dolor sit amet
        </AccordionDetails>
      </Accordion>
      <Divider />
      <Box marginTop="1.25rem">
        <Typography fontSize="0.875rem" color="text.tertiary">
          Identificador:
        </Typography>
        <Typography fontSize="0.875rem" fontWeight="800">
          2c1b951f356c4680b13ba1c9fc889c47
        </Typography>
      </Box>
    </Box>
  );
};

export default PaymentInfo;
