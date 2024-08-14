const logMiddleWare = store => next => action =>{
    console.group(action&&action.type);
    console.log('이전',store.getState());
    console.log('액션',action)
    next(action);
    console.log('이후',store.getState())
    console.groupEnd
}

export default logMiddleWare;