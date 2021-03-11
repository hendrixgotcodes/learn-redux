import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func';

// eslint-disable-next-line import/no-anonymous-default-export
export default function(){

    return configureStore({reducer, 
    middleware: [logger({destination: "console"})], func})

};

// export default 