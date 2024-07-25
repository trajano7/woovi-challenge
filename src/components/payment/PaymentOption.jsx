import { CheckCircle } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";

const styles = {
  card: {
    boxShadow: "none",
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },
  card__content: {
    textAlign: "left",
  },
};

const PaymentOption = (props) => {
  let card = {
    boxShadow: "none",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    borderTop: "1px solid red",
    borderLeft: "1px solid red",
    borderRight: "1px solid red",
  }

  if (props.index === 1) {
    card = {
      boxShadow: "none",
      borderRadius: 0,
      borderTop: "1px solid",
      borderLeft: "1px solid",
      borderRight: "1px solid",
      borderColor: "divider"
    }
  }

  const label = (
    <Box sx={{ display: "flex", margin: 0, padding: 0, lineHeight: 10 }}>
      <Typography component="span" variant="body1" fontWeight="bold">
        {`1x`}
      </Typography>
      <Typography variant="body1">R$ 30.500,00</Typography>
    </Box>
  );

  return (
    <Card sx={card}>
      <CardActionArea>
        <CardContent sx={styles.card__content}>
          <FormControlLabel
            value="1"
            sx={{
              margin: 0,
              padding: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
            control={<Radio checkedIcon={<CheckCircle color="secondary" />} />}
            label={label}
            labelPlacement="start"
          />
          <Typography
            sx={{ fontSize: ".7rem", padding: 0 }}
            variant="subtitle"
            color="text.secondary"
          >
            Total: R$ 30.600,00
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PaymentOption;
