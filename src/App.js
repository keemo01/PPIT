import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'


function App() {
  //state that represetns list of coins, has empty array
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  //hooks that run immediatly wehn page rerenders
  useEffect(() => {

    //axios is used to get http request // api shows coins and their data, you can change the number of coins that are shown on the page by achanging the "page=20" to how ever aamount you want shown
    axios.get(url).then((response) => {
      setCoins(response.data)
    })
      //lets you know if there are any errors
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div className='App'>

      <Navbar />
      <Routes>
        <Route path='/' element={<Coins coins={coins} />} />
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />

        </Route>
      </Routes>

    </div>
  );
}

export default App;