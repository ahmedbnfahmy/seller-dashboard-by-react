import {
    Route,
    Redirect
} from 'react-router-dom';
// import { useSelector } from 'react-redux'
function PrivateRoute({ component:Component, ...rest }) {
    // const auth = useSelector(state=>state.auth.authenticate)
    return (
        <Route {...rest} component={(props)=>{
            const token = localStorage.getItem('token');
            if(token){
                return <Component {...props}/>
            }else{
                return <Redirect to={{ pathname: '/login', state: { from: props.location } }}/>
            }
        }}/>
    );
}

export default PrivateRoute;