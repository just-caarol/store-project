import propTypes from "prop-types";
import { useRouteError } from "react-router-dom";

ErrorBoundaryHandler.propTypes = {
  error: propTypes.shape({
    message: propTypes.string,
    stack: propTypes.string,
  }),
};

function ErrorBoundaryHandler({ error }) {
  return (
    <>
      <section className="error-boundary-section">
        <h1>{error.message}</h1>
        <pre>{error.stack}</pre>
      </section>
    </>
  );
}

function ErrorPageHandler() {
  const { status, statusText, data } = useRouteError();
  return (
    <>
      <section className="error-page-section">
        <h1>
          {status} {statusText}
        </h1>
        <pre>{data}</pre>
      </section>
    </>
  );
}

export { ErrorBoundaryHandler, ErrorPageHandler };
