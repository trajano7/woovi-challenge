import "./App.css";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme/theme";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootPage from "./pages/Root";
import PaymentPage from "./pages/Payment";
import PixPaymentPage from "./pages/PixPayment";
import { CssBaseline } from "@mui/material";
import CardPaymentPage from "./pages/CardPayment";
import ErrorPage from "./pages/Error";

const basename =
  process.env.NODE_ENV === "production" ? "/woovi-challenge" : "/";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to="/payment" /> },
        {
          path: "payment",
          children: [
            {
              index: true,
              element: <PaymentPage />,
            },
            {
              path: "pix-qr-code",
              element: <PixPaymentPage />,
            },
            {
              path: "card-form",
              element: <CardPaymentPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename: basename }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
