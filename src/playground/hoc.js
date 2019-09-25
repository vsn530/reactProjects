import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p> The info is : {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent)=>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is a private info. please dont share</p>}
            <WrappedComponent  {...props}/>
        </div>
    )    
}

const requireAuthentication = (WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>:<p>please login to see the content</p>}
        </div>
    )

    
}

const Welcome = () =>
     (
        <div>
         <h1>Welcome</h1>
        </div>
    )


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated ={true} info="There are the details" />,document.getElementById('app'));
//ReactDOM.render(<Welcome/>,document.getElementById('app'));