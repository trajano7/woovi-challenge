import { CheckCircle, RadioButtonUnchecked } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import Banner from "../ui/Banner";

const styles = {
  card: {
    boxShadow: "none",
    borderRadius: 0,
    textAlign: "left",
  },
  card__content: {
    padding: "1rem",
  },
  formControl: {
    margin: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};

const PaymentCard = ({
  data,
  first,
  last,
  solo,
  neighbor,
  selected,
  bannerTxt,
  onSelect
}) => {
  let card__border = {
    borderTop: neighbor === "bottom"
      ? "none"
      : `${selected || first || solo ? 2 : 1}px solid`,
    borderBottom: neighbor === "top"
      ? "none"
      : `${selected || last || solo ? 2 : 1}px solid`,
    borderLeft: "2px solid",
    borderRight: "2px solid",
    borderColor: selected ? "secondary.main" : "border.main",
  };

  if (first || solo) {
    card__border.borderTopLeftRadius = "10px";
    card__border.borderTopRightRadius = "10px";
  } 
  if (last || solo) {
    card__border.borderBottomLeftRadius = "10px";
    card__border.borderBottomRightRadius = "10px";
  }

  const formatedTotal = data.totalAmount.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  let subtitle = (
    <Typography variant="body1" color={"text.secondary"} sx={{ lineHeight: 1 }}>
      {`Total: R$ ${formatedTotal}`}
    </Typography>
  );

  if (data.installments === 1) {
    subtitle = (
      <Typography
        variant="body1"
        color={"secondary.main"}
        sx={{ lineHeight: 1 }}
      >
        Ganhe{" "}
        <Typography component="span" variant="body1" sx={{ fontWeight: "800" }}>
          {`${data.cashback}%`}
        </Typography>{" "}
        de Cashback
      </Typography>
    );
  }

  const installmentValue = (
    data.totalAmount / data.installments
  ).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const label = (
    <Typography variant="h5" sx={{ fontWeight: "600", color: "text.primary" }}>
      <Typography component="span" variant="h5" sx={{ fontWeight: "800" }}>
        {`${data.installments}x`}
      </Typography>{" "}
      R$ {installmentValue}
    </Typography>
  );

  const onClickHandler = () => {
    onSelect(data.installments);
  }

  return (
    <Card sx={[styles.card, card__border]}>
      <CardActionArea onClick={onClickHandler}>
        <CardContent sx={styles.card__content}>
          <FormControlLabel
            value={data.installments}
            sx={styles.formControl}
            control={
              <Radio
                icon={<RadioButtonUnchecked color="border" />}
                checkedIcon={<CheckCircle color="secondary" />}
              />
            }
            label={label}
            labelPlacement="start"
          />
          {subtitle}
          {bannerTxt && <Banner>{bannerTxt}</Banner>}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PaymentCard;
