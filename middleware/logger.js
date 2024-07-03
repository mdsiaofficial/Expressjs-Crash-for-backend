import express from 'express';
import colors from 'colors';


const logger = (req, res, next) => {

  const methodColors = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'blue',
    PATCH: 'purple',
    DELETE: 'red',
    OPTIONS: 'pink',
    HEAD: 'lime',
  };
  const color = methodColors[req.method] || white;

  console.log(`${req.method} ${req.protocol}://${req.get(`host`)}${req.originalUrl}` [color]);
  next();
}

export default logger;