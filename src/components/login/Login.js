import React from 'react';
import Card from 'react-bootstrap/Card';
// import './Login.css';
import LoginButton from './LoginButton';


function Login () {
    return(
      <Card style={{ width: '30rem' }}>
        <Card.Body>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
      <Card.Img style ={{height:"200px",}}variant="top" src="https://tse1.mm.bing.net/th?id=OIP.8U9DtaQnG_Ka-Rs2gaweeAHaHa&pid=Api&P=0" />

          <LoginButton />
        </Card.Body>
      </Card>
    )
}

export default Login;
