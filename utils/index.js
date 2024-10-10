'use client'
import { jwtDecode } from 'jwt-decode'

const decode_token = (token) => {

    if (token) {
        try {
            const decoded_token = jwtDecode(token)
            const exp = new Date(decoded_token.exp * 1000)
            if (new Date() > exp) {
                localStorage.removeItem('newsToken')
                return ""
            } else {
                return decoded_token
            }
        } catch (error) {
            return ""
        }
    } else {
        return ""
    }
}

export default decode_token

// 'use client'
// import { useEffect, useState } from 'react';
// import {jwtDecode} from 'jwt-decode';

// const decode_token = (token) => {
//     const [decodedToken, setDecodedToken] = useState(null);

//     useEffect(() => {
//         if (token) {
//             try {
//                 const decoded = jwtDecode(token);
//                 const exp = new Date(decoded.exp * 1000);

//                 if (new Date() > exp) {
//                     localStorage.removeItem('newsToken');
//                     setDecodedToken(null);
//                 } else {
//                     setDecodedToken(decoded);
//                 }
//             } catch (error) {
//                 setDecodedToken(null);
//             }
//         }
//     }, [token]);

//     return decodedToken;
// };

// export default decode_token;
