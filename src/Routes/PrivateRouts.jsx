import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouts = ({children}) => {
    const {user,Loading} = useContext(AuthContext);

    if(Loading){
        return <progress className="progress w-56"></progress>
    }

    if(user?.email){
        return children;
    
    }

    return  <Navigate to="/login" replace ></Navigate>
};

export default PrivateRouts;