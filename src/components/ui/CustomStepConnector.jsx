import styled from "@emotion/styled";
import { StepConnector, stepConnectorClasses } from "@mui/material";

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    border: 0,
    backgroundColor: theme.palette.border.main,
    width: 2, 
    margin: 0,
    padding: 0,
    marginLeft: -3
  },
}));

export default CustomStepConnector;
