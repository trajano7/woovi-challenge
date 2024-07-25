import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#133A6F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#03D69D",
    },
    text: {
      primary: "#4D4D4D",
      secondary: "#AFAFAF",
      tertiary: "#B2B2B2",
    },
    border: {
      main: "#E5E5E5",
    },
  },
  typography: {
    fontFamily: `"Nunito", "Roboto", "Helvetica", "Arial", sans-serif`,
    button: {
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          fontSize: '1.1rem',
          fontWeight: 600,
          padding: '4px 20px',
          boxShadow: 'none',
          marginBottom: '1.5rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#e5e5e5",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            textAlign: "left",
            "& fieldset": {
              border: "2px solid",
              borderRadius: "8px",
              borderColor: "#E5E5E5",
            },
            "&:hover fieldset": {
              borderColor: "#E5E5E5",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#03D69D",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#4D4D4D",
            fontWeight: 600,
          },
          "& label.Mui-focused": {
            color: "#4D4D4D",
            fontWeight: 600,
          },
          "& .MuiOutlinedInput-input": {
            color: "#4D4D4D",
            fontWeight: 600,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              border: "2px solid",
              borderColor: "#E5E5E5",
              borderRadius: "8px",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#03D69D",
              color: "#4D4D4D",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#4D4D4D",
            fontWeight: 600,
          },
        },
      },
    },
  },
});

export default theme;
