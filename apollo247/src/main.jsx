import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {ChakraProvider} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom'
import {Provider} from "react-redux"
import {store} from "./redux/store"
import axios from "axios"

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ChakraProvider>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </ChakraProvider>
  // </React.StrictMode>
)
