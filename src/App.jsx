import React from 'react';
import Button from '@material-ui/core/Button'

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './temaConfig'

import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Navbar2/>
      {/* <Button variant="contained" color="primary">
        Botón
      </Button>
      <Button variant="contained" color="secondary">
        Botón
      </Button> */}
    </ThemeProvider>
  );
}

export default App;