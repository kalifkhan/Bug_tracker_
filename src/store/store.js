import { createStore } from 'redux';
import StoreReducer from './StoreReducer';

const store = createStore(StoreReducer)

export default store;


//             id: 1,
//             title: '',
//             description: '',
//             resolved: false,
//         }]
