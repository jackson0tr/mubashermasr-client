// 'use client'
// import React, { useReducer } from 'react'
// import storeReducer from './storeReducer'
// import storeContext from './storeContext'
// import decode_token from '../utils/index'

// const StorePovider = ({ children }) => {

//     const [store, dispatch] = useReducer(storeReducer, {
//         userInfo: decode_token(localStorage.getItem('newsToken')),
//         token: localStorage.getItem('newsToken') || ""
//     })
    

//     return <storeContext.Provider value={{ store, dispatch }}>
//         {children}
//     </storeContext.Provider>
// }

// export default StorePovider;

'use client';
import React, { useReducer, useEffect, useState } from 'react';
import storeReducer from './storeReducer';
import storeContext from './storeContext';
import decode_token from '../utils/index';

const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(storeReducer, {
        userInfo: null,
        token: ''
    });

    // Local state to hold the initialized token and userInfo
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('newsToken') || '';
        const userInfo = decode_token(token);
        dispatch({ type: 'login_success', payload: { token, userInfo } });
        setIsInitialized(true);
    }, []);

    if (!isInitialized) return null; // Optionally, render a loading state until initialized

    return (
        <storeContext.Provider value={{ store, dispatch }}>
            {children}
        </storeContext.Provider>
    );
};

export default StoreProvider;


// 'use client'
// import React, { useReducer, useEffect } from 'react';
// import storeReducer from './storeReducer';
// import storeContext from './storeContext';
// import decode_token from '../utils/index';

// const StoreProvider = ({ children }) => {
//     const [store, dispatch] = useReducer(storeReducer, {
//         userInfo: null,
//         token: ""
//     });

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const token = localStorage.getItem('newsToken');
//             dispatch({
//                 payload: {
//                     userInfo: decode_token(token),
//                     token: token || ""
//                 }
//             });
            
//         }
//     }, []);

//     return <storeContext.Provider value={{ store, dispatch }}>
//         {children}
//     </storeContext.Provider>;
// };

// export default StoreProvider;

// dispatch({
            //     type: 'login_success',
            //     payload: {
            //         userInfo: decode_token(token),
            //         token: token || ""
            //     }
            // });