
import React, { useState, useEffect } from "react";
import './../styles/App.css';

const App = () => {
    const cityList = [
    { name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Darjeeling', country: 'India' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Leh Ladakh', country: 'India' },
    { name: 'Goa', country: 'India' },
    { name: 'Agra', country: 'India' },
    { name: 'Dalhousie', country: 'India' },
    { name: 'Coorg', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    { name: 'Varanasai', country: 'India' },
    { name: 'Jaipur', country: 'India' },
    { name: 'The Hofburg', country: 'Austria' },
    { name: 'Belvedere Palace', country: 'Austria' },
    { name: 'St. Stephen Cathedral', country: 'Austria' },
    { name: 'Kahna National Park', country: 'India' },
    { name: 'Amritsar', country: 'India' },
    { name: 'Mussoorie', country: 'India' },
    { name: 'Mount Abu', country: 'India' },
    { name: 'Tirupati', country: 'India' },
    ]
    
  return (
    <div id="main">
               {/* Do not remove the main div */}
               <ol>
                <li>Goa</li>
                <li>Amsterdam</li>
                <li>New York</li>
                <li>Darjeeling</li>
                <li>Tokyo</li>
                <li>Lonavala</li>
                <li>Brandenburg Gate</li>
                <li>Reichstag Building</li>
                <li>Museum Island</li>
                <li>Munnar</li>
                <li>Leh Ladakh</li>
                <li>Goa</li>
                <li>Agra</li>
                <li>Dalhousie</li>
                <li>Coorg</li>
                <li>Rome</li>
                <li>Milan</li>
                <li>Venice</li>
                <li>Varanasai</li>
                <li>Jaipur</li>
                <li>The Hofburg</li>
                <li>Belvedere Palace</li>
                <li>St. Stephen Cathedral</li>
                <li>Kahna National Park</li>
                <li>Amritsar</li>
                <li>Mussoorie</li>
                <li>Mount Abu</li>
                <li>Tirupati</li>
               </ol>
    </div>
  )
}

export default App
