import React, {Fragment, useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'

const PrivateRoute = (props) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, loading } = authContext;

    let navigate = useNavigate();

    if (!isAuthenticated && !loading) {

        navigate('/login');
    }
    

    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

// export const privateRouteHOC = Component => (props) => {

//     return (
//         <PrivateRoute>
//             <Component {...props} />
//         </PrivateRoute>
//     );

// };


export default PrivateRoute
