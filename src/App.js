//import logo from './logo.svg';
import './App.css';
const countapi = require('countapi-js');

// or with ES6
import countapi from 'countapi-js';

countapi.visits().then((result) => {
  console.log(result.value);
});

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div></div>
  )
}
import React from 'react';

function MyComponent() {

  // Define the downloadPDF function
  const downloadPDF = () => {
    const pdfUrl = 'path_to_your_pdf.pdf'; // Replace with the actual URL or path to your PDF file
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = 'my_custom_filename.pdf'; // You can specify the filename here
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div>
      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default MyComponent;

export default App;

