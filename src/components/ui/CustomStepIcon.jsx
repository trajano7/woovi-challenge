import styled from "@emotion/styled";
import { CheckCircle } from "@mui/icons-material";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const CustomStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  display: "flex",
  alignItems: "center",
  width: "fit-content",
  color: theme.palette.border.main,
  ...((ownerState.active || ownerState.completed) && {
    color: theme.palette.secondary.main,
  }),
}));

const CustomStepIcon = (props) => {
  const { active, completed, className } = props;

  const icon = completed ? (
    <CheckCircle fontSize="small" />
  ) : (
    <PanoramaFishEyeIcon fontSize="small" />
  );

  return (
    <CustomStepIconRoot ownerState={{ completed, active }}>
      {icon}
    </CustomStepIconRoot>
  );
};

export default CustomStepIcon;
