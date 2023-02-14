import React from 'react';
import Logo from './components/Logo.js';
import Input from './components/input.js';
import SearchButton from './components/SearchButton';
import LuckyButton from './components/LuckyButton';

export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Logo />
      <Input />
      <br />
      <div style={{ margin: '5px' }}>
        <SearchButton />
        <LuckyButton />
      </div>
    </div>
  );
}
