import React from 'react';
import Users from './Users';


interface Props{
 
}

 const App: React.FC<Props> = (props) => {
  return(
    <Users page={1} title="First Page List" />
  );
}
App.defaultProps = {}
export default App;