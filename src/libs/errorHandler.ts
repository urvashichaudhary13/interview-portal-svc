export const errorHandler = ( err, req, res, next ) => {
    if (res.headersSent) { return next(err) }
  
    const { message, status, error } = err;

    const result = {
        message: message || 'error',
        status: status || 500,
        error: error || 'undefined',
        timestamp: new Date(),
    }
    res.status(result.status).json(result);
};