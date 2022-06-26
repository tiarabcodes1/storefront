const logger = (store) => (next) => (action) => {
    console.log("__ACTION__", action);
    return next(action); 
};
  
export default logger;