import { Box, Button, Typography } from "@mui/material";
import { QRCodeSVG } from "qrcode.react";
import FileCopyIcon from "@mui/icons-material/FileCopy";

const styles = {
  qrCode: {
    padding: "1rem",
    border: "2px solid",
    borderColor: "secondary.main",
    margin: "0 auto",
    borderRadius: "10px",
    width: "22rem",
    marginBottom: "1rem",
  },
};

const PaymentQrCode = ({onQrCodeCopy}) => {
  return (
    <Box>
      <Box sx={styles.qrCode}>
        <QRCodeSVG
          style={{ display: "block", width: "100%", height: "auto" }}
          value="https://www.linkedin.com/in/matheustrajano7/"
        />
      </Box>
      <Button
        variant="contained"
        endIcon={<FileCopyIcon size="medium" />}
        onClick={onQrCodeCopy}
      >
        Clique para copiar QR CODE
      </Button>
    </Box>
  );
};

export default PaymentQrCode;
