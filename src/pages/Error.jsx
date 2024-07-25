import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import PageContent from "../components/ui/PageContent";
import Footer from "../components/Footer";

const ErrorPage = (props) => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";

  console.log(error.status, error.message)

  if (error.status === 500) {
    message = error.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <Header />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
      <Footer />
    </>
  );
};

export default ErrorPage;