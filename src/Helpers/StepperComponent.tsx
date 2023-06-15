import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { styled } from "@mui/material/styles";
import { StepIconProps } from "@mui/material/StepIcon";
import Stepper from "@mui/material/Stepper";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SpeakerIcon from "@mui/icons-material/Speaker";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import CakeIcon from "@mui/icons-material/Cake";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(252,217,25,1) 0%, rgba(241,146,15,1) 51%, rgba(195,91,7,1) 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(252,217,25,1) 0%, rgba(241,146,15,1) 51%, rgba(195,91,7,1) 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundImage:
      " linear-gradient(90deg, rgba(195,91,7,1) 0%, rgba(252,128,25,1) 51%, rgba(252,191,25,1) 100%)",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  ...(ownerState.completed && {
    backgroundImage:
      " linear-gradient(90deg, rgba(195,91,7,1) 0%, rgba(252,128,25,1) 51%, rgba(252,191,25,1) 100%)",
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <CakeIcon />,
    2: <CelebrationIcon />,
    3: <SpeakerIcon />,
    4: <LocalMallIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  "Select the cake",
  "Select the decoration",
  "Select the speakers",
  "Checkout",
];
export default function StepperComponent(props: any) {
  return (
    <>
      <Stack sx={{ width: "100%", margin: "50px 0px  " }} spacing={4}>
        <Stepper
          alternativeLabel
          activeStep={props.active}
          connector={<ColorlibConnector />}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Stack>
    </>
  );
}
