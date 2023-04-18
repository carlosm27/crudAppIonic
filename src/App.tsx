import React from 'react';
import { IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { BrowserRouter, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <IonRouterOutlet>
        
        <Route path="/" component={Tasks} exact={true} />
      </IonRouterOutlet>
    </BrowserRouter>
  );
};
export default App;