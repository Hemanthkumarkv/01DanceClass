import React from 'react'
import appStore from './utils/appStore'
import Header from './components/Header'
import { Provider } from 'react-redux'

import cart from './components/Cart'

// Provider is bridge 
// provider connect the react and resuc applicaption

const App = () => {
  return (

    <Provider store={appStore}>
      {/* <UserContactxt.provider> */}
      <Header />
      {/* <Outlet/> */}
      {/* </UserContactxt.provider> */}

    </Provider>
    // <>
    // <h1>hemanth</h1>
    // </>

  )
}

export default App
