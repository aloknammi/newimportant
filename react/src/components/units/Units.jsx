import React from 'react'
import { Sidebar } from "../../components/sidebar/Sidebar"
import { Navbar } from "../../components/navbar/Navbar"
import { Searchfield } from "../../components/searchfield/Searchfield"
import { Halo } from "../../components/halo/Halo"
import "./units.scss"

const Units = () => {
  return (
    <div className='units'>
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgetsfield">
          <Searchfield />
        </div>

        <div className="charts">
          {/*This place for charts*/}

        </div>

        <div className="widgetsfield">
          <Halo />
        </div>

      </div>
    </div>
  )
}

export default Units