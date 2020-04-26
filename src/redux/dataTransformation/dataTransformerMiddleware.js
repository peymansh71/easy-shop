/** DATA TRANSFORMER MIDDLE WARE */
export const dataTransformerMiddleware = (store) => (next) => (action) => {
  next(action);
};
