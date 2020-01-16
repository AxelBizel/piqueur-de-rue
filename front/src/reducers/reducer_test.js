import { initState } from './index';

export default function reducer_namesList(state = initState.names, action) {
    switch (action.type) {
        case 'ADD_NAME':
            return [...state, { name: action.payload }];
        default:
            return state;
    }
}