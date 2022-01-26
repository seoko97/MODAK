const cookieParser = (cookies = "") => {
  return cookies.split(/;\s/gi).reduce((acc, item) => {
    const [key, value] = item.split("=");
    acc[key] = value;
    return acc;
  }, {});
};

export default cookieParser;
