import { useState } from 'react';
import Header from './Header.jsx';
import Section1 from './Section1.jsx';
import Section2 from './Section2.jsx';
import Section3 from './Section3.jsx';
import Section4 from './Section4.jsx';
import Section5 from './Section5.jsx';
import Section6 from './Section6.jsx';
import Section7 from './Section7.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Header />
        <div id='Home'>
          <Section1 />
        </div>
        <div id='About'>
          <Section2 />
        </div>
        <div id='Offering'>
          <Section3 />
        </div>
        <div id='Subjects'>
          <Section4 />
        </div>
        <div id='Testimonials'>
          <Section5 />
        </div>
        <div id='6'>
          <Section6 />  
        </div>  
        <div id='7'>  
          <Section7 />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;