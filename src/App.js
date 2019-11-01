import React from 'react';
import 'App.css';
import Router from 'Router';

import TemplateLayout from 'template/TemplateLayout';


const App = () => {
  return (
    <div className="App">
      <TemplateLayout>
        <Router />
      </TemplateLayout>

    </div>
  );
};

export default App;