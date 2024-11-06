import React from 'react';
import Header from './Header';
import Counter from './Counter';
import Footer from './Footer';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <Header />
      <Message text="Este es un mensaje importante" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
