import React from 'react';
import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Leaves.css';
import './App.css';
import Home from './Pages/Home.js';
import PatchBot from './Pages/PatchBot.js';
import PuzzleGame from './Pages/PuzzleGame.js';
import BirthdayBot from './Pages/BirthdayBot.js';
import ScrollToTop from './ScrollToTop.js';


const colors = {
  brand: {
    100: "#1C2736", //dark blue
    200: "#394250",
    300: "#555D69",
    400: "#8E939B", //gray
    500: "#FFFFFF", //white
    600: "#FED7E2", //light pink
    700: "#FBB6CE",
    800: "#F687B3",
    900: "#ED64A6", //dark pink
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'brand.100',
      },
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          _hover: {
            bg: 'brand.600',
            color: 'brand.100'
          },
          _active: {
            bg: 'brand.100',
            color: 'brand.600',
            transform: 'scale(0.99)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <div>
          <ScrollToTop>
            <Switch>
              <Route path="/patchbot">
                <PatchBot />
              </Route>
              <Route path="/puzzlegame">
                <PuzzleGame />
              </Route>
              <Route path="/birthdaybot">
                <BirthdayBot />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </ScrollToTop>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
