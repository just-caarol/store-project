import querystring from "query-string";

export function buildQueryString({ q, category }) {
  const options = {
    q,
    category,
  };

  const sanitizedOptions = Object.fromEntries(
    // eslint-disable-next-line no-unused-vars
    Object.entries(options).filter(([_, value]) => value)
  );

  return querystring.stringify(sanitizedOptions);
}
