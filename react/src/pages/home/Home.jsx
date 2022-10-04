import React, { useState } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Searchfield } from "../../components/searchfield/Searchfield"
import { Kpi } from "../../components/kpi/Kpi"
import { Chartss } from "../../components/chart/Chartss"
import { Halo } from "../../components/halo/Halo"
//import ErrorBoundary from './ErrorBoundary'
import "./home.scss"


const Home = () => {
  const [store, setStore] = useState('');
  const [selection, setSelection] = useState('');

  const onSelectionChanged = index => {
    setSelection(index)
  }

  const onSelectionChanges = index => {
    setStore(index)
  }

  //console.log(store)

  return (
    <div className='home'>

      <div className="homeContainer">
        <Navbar />

        <div className="widgetsfield">
          <Searchfield onSelectionChanged={onSelectionChanged} onSelectionChanges={onSelectionChanges} />
        </div>

        <div className="charts">

          <Chartss selection={selection} />

        </div>

        <div className="widgetsfield">
          <Kpi selection={selection} storex={store} />
        </div>

        <div className="widgetsfield">
          <Halo />
        </div>

      </div>
    </div>
  )
}

export default Home