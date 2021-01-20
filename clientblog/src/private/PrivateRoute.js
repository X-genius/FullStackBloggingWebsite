import {useSelector} from "react-redux";
import {Route , Redirect} from "react-router-dom";

const PrivateRouter = props =>{
      
    const {user} = useSelector(state => state.AuthReducer);
    return user ? (<Route path = {props.path} exact = {props.exact} component = {props.component}/>) : (<Redirect to = '/login' />);
};

export default PrivateRouter;