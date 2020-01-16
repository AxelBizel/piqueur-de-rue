import {combineReducers} from 'redux';
import reducer_test from './reducer_test';

export let initState = {  
        names  : [  {id : 1, name : "Eloïse" },
                    {id : 2, name : "Alice" },
                    {id : 3, name : "Toto" },
                    ],
        filter : []
}


const rootReducer = combineReducers({
    names : reducer_test,
   
});

export default rootReducer;