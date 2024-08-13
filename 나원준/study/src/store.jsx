import { configureStore } from "@reduxjs/toolkit";
import counter from './Redux/modules/counter';
import todos from './Redux/modules/todos';


const store = configureStore({
    reducer: {
        counter, todos
    }
})

export default store;