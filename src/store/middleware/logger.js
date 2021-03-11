const logger = param => store => next => action =>{

    next(action)

   console.log(param);

}

export default logger;