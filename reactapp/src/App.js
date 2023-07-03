import React from 'react';

import UserList from './components/UserList';
import UserForm from './components/UserForm';
export default function App() {
  return (
    <div>
      <UserForm/>
      <UserList/>
    </div>
  );
}
