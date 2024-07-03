import colors from 'colors';

const notFound = (req, res, next) => {
  const error = new Error(`404 Not Found`);
  error.status = 404;
  next(error);

}


export default notFound;