import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import "./halo.scss";
import Chart from "react-apexcharts";

const ddata = [
    {
        "storeNbr": 3571,
        "BenefitListForDepartments": [
            {
                "departmentID": 3336,
                "footage": 15.0,
                "units": 50.0,
                "sales": 50.0,
                "grossMargin": 50.0,
                "comprehensiveProfit": 50.0
            },
            {
                "departmentID": 3436,
                "footage": 27.0,
                "units": 124.0,
                "sales": 124.0,
                "grossMargin": 124.0,
                "comprehensiveProfit": 124.0
            },
            {
                "departmentID": 3320,
                "footage": 0.0,
                "units": 0.0,
                "sales": 0.0,
                "grossMargin": 0.0,
                "comprehensiveProfit": 0.0
            }
        ]
    },
    {
        storeNbr: 3572,
        "BenefitListForDepartments": [
            {
                "departmentID": 3560,
                "footage": 6.0,
                "units": 59.0,
                "sales": 59.0,
                "grossMargin": 59.0,
                "comprehensiveProfit": 59.0
            },
            {
                "departmentID": 3399,
                "footage": 3.0,
                "units": 6.0,
                "sales": 6.0,
                "grossMargin": 6.0,
                "comprehensiveProfit": 6.0
            }
        ]
    }
]

export const Halo = () => {
    const [store , setStore] = useState(0);
    const [department1, setDepartment1] = useState('');
    const [department2, setDepartment2] = useState('');
    const [department3, setDepartment3] = useState('');
    const [department4, setDepartment4] = useState('');
    const [checked, setChecked] = useState(false)
    const [plot, setPlot] = useState(false)
    const [plot2, setPlot2] = useState(false)
    const [plot3, setPlot3] = useState(false)
    const [plot4, setPlot4] = useState(false)
    const [plotData1, setPlotData1] = useState('')
    const [plotData2, setPlotData2] = useState('')
    const [plotData3, setPlotData3] = useState('')
    const [plotData4, setPlotData4] = useState('')
    //const [showkpi, setShowkpi] = useState(false)
    const clearDept=()=>{
        setPlotData1();
        setPlotData2();
        setPlotData3();
        setPlotData4();
       
    }

    const handleCheck = (event) => {
        setChecked(event.currentTarget.checked);
        //setShowkpi(true)
        //setStore();
    };


    //console.log(showkpi)

    const storeChange = (event) => {
        const { value } = event.target
        console.log('store  ',value)
        setStore(value);
        clearDept();
        
    }



    const departmentChange1 = (event) => {
        const { value } = event.target
        setDepartment1(value);
        if (value === '0') {
            setPlot(false)
        }
        else {
            console.log('value of dept', value)
            setPlot(true)
            setPlotData1(value)
        }

    }

    const departmentChange2 = (event) => {
        const { value } = event.target
        setDepartment2(value);
        if (value === '0') {
            setPlot2(false)
        }
        else {
            setPlot2(true)
            setPlotData2(value)
        }
    }

    const departmentChange3 = (event) => {
        const { value } = event.target
        setDepartment3(value);
        if (value === '0') {
            setPlot3(false)
        }
        else {
            setPlot3(true)
            setPlotData3(value)
        }
    }

    const departmentChange4 = (event) => {
        const { value } = event.target
        setDepartment4(value);
        if (value === '0') {
            setPlot4(false)
        }
        else {
            setPlot4(true)
            setPlotData4(value)
        }

    }
    var ndata=[];
    //console.log('store ',store)
    if(!!store){
        var vall = ddata.find(vv => vv.storeNbr == store);
       
        ndata.push(vall);
    }
    
    //console.log('datassssssssss',ndata)
   

    const buildDepart = (ndata) => {

        if (ndata.length > 0) {
            return ndata[0].BenefitListForDepartments

        } else {
            return [];
        }
    }

    //console.log('sssssssssssssss  ', buildDepart(ndata))

    buildDepart(ddata).map(item => {
        //console.log("item.departmentID ", item.departmentID)
    })

    const seriesData = [];
    const seriesData2 = [];
    const seriesData3 = [];
    const seriesData4 = [];
    //console.log('ndata ',ndata)
    var item = ndata.map((items) => {
        return (items.BenefitListForDepartments)

    });

    const merge3 = item.flat(1)
    //console.log('plotData1 ',plotData1)
    if(!!plotData1){
        var itemm = merge3.find(itema => itema.departmentID === plotData1);
        //console.log('itemm ',itemm)
        seriesData.push(itemm);
    }

    if(!!plotData2){
        var itemm2 = merge3.find(itema => itema.departmentID === plotData2);
        seriesData2.push(itemm2);
    }

    if(!!plotData3){
        var itemm3 = merge3.find(itema => itema.departmentID === plotData3);
        seriesData3.push(itemm3);
    }

    if(!!plotData4){
        var itemm4 = merge3.find(itema => itema.departmentID === plotData4);
        seriesData4.push(itemm4);
    }

 
        var keys = Array.from(seriesData.reduce((s, o) => Object.keys(o), new Set()));
        var km = keys.slice(1)
        
        var values = Array.from(seriesData.reduce((s, o) => Object.values(o), new Set()));
        var vals = values.slice(1)
    
        var state = {
            options: {chart: {id: "basic-bar"}, plotOptions: {
                bar: {
                    distributed: true, // this line is mandatory
                    horizontal: false,
                    barHeight: '85%',
                },
            },colors: [ "#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"], xaxis: {categories: km}},
            series: [{name: "series", data: vals}]
        };
    


    var keys2 = Array.from(seriesData2.reduce((s, o) => Object.keys(o), new Set()));
    var km2 = keys2.slice(1)
    
    var values2 = Array.from(seriesData2.reduce((s, o) => Object.values(o), new Set()));
    var vals2 = values2.slice(1)

    const state2 = {
        options: {chart: {id: "basic-bar"}, plotOptions: {
            bar: {
                distributed: true, // this line is mandatory
                horizontal: false,
                barHeight: '85%',
            },
        },colors: [ "#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"], xaxis: {categories: km2}},
        series: [{name: "series", data: vals2}]
    };

    var keys3 = Array.from(seriesData3.reduce((s, o) => Object.keys(o), new Set()));
    var km3 = keys3.slice(1)
    
    var values3 = Array.from(seriesData3.reduce((s, o) => Object.values(o), new Set()));
    var vals3 = values3.slice(1)

    const state3 = {
        options: {chart: {id: "basic-bar"}, plotOptions: {
            bar: {
                distributed: true, // this line is mandatory
                horizontal: false,
                barHeight: '85%',
            },
        },colors: [ "#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"], xaxis: {categories: km3}},
        series: [{name: "series", data: vals3}]
    };

    var keys4 = Array.from(seriesData4.reduce((s, o) => Object.keys(o), new Set()));
    var km4 = keys4.slice(1)
    
    var values4 = Array.from(seriesData4.reduce((s, o) => Object.values(o), new Set()));
    var vals4 = values4.slice(1)

    const state4 = {
        options: {chart: {id: "basic-bar"}, plotOptions: {
            bar: {
                distributed: true, // this line is mandatory
                horizontal: false,
                barHeight: '85%',
            },
        },colors: [ "#33b2df","#546E7A","#d4526e","#13d8aa","#A5978B"], xaxis: {categories: km4}},
        series: [{name: "series", data: vals4}]
    };

    return (
        <div className="container">
         <div className="wrapper">
  
                    <FormGroup className="fgs">
                        <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheck} />} label="Halo Effect" />

                    </FormGroup>
              
                    {checked && (
            <Box sx={{ minWidth: 120 }} className="fg">
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Store</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={store}
                                    label="Store"
                                    onChange={storeChange}
                                >
                                    <MenuItem value="">Select</MenuItem>
                                    {
                                      
                                     ddata.map((itemt,key) => {
                                        return (
                                            <MenuItem key={key} value={itemt.storeNbr}>{itemt.storeNbr}</MenuItem>
                                        )
                                    })
                                       
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        )}
        </div>
            <div className="halo">
  
                {checked && (

                    <div className="dropdown">
                        <Box sx={{ minWidth: 120 }} className="dd">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={department1}
                                    label="Department"
                                    onChange={departmentChange1}
                                >
                                    <MenuItem value="0">Select</MenuItem>
                                    {
                                     
                                        buildDepart(ndata).map((item,key) => {
                                            return (
                                                <MenuItem key={key} value={item.departmentID}>{item.departmentID}</MenuItem>
                                            )
                                        })
                                       
                                  

                                    }
                                </Select>
                            </FormControl>
                        </Box>




                        <Box sx={{ minWidth: 120 }} className="dd">
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={department2}
                                    label="Department"
                                    onChange={departmentChange2}
                                >
                                    <MenuItem value="0">Select</MenuItem>
                                    {

                                    buildDepart(ndata)?.map((item,key) => {
                                        return (
                                            <MenuItem key={key} value={item.departmentID}>{item.departmentID}</MenuItem>
                                        )
                                    })

                                    }
                                </Select>
                            </FormControl>
                        </Box>




                        <Box sx={{ minWidth: 120 }} className="dd">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={department3}
                                    label="Department"
                                    onChange={departmentChange3}
                                >
                                    <MenuItem value="0">Select</MenuItem>
                                    {

                                    buildDepart(ndata)?.map((item,key) => {
                                        return (
                                            <MenuItem key={key} value={item.departmentID}>{item.departmentID}</MenuItem>
                                        )
                                    })

                                    }
                                </Select>
                            </FormControl>
                        </Box>




                        <Box sx={{ minWidth: 120 }} className="dd">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Department</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={department4}
                                    label="Department"
                                    onChange={departmentChange4}
                                >
                                    <MenuItem value="0">Select</MenuItem>
                                    {

                                    buildDepart(ndata)?.map(item => {
                                        return (
                                            <MenuItem value={item.departmentID}>{item.departmentID}</MenuItem>
                                        )
                                    })

                                    }
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                )}

            </div>

            <div className="containers">
                {plot && (

                    <Chart
                        options={state.options}
                        series={state.series}
                        type="bar"
                        width="450"
                    />
                )

                }

                {plot2 && (

                    <Chart
                        options={state2.options}
                        series={state2.series}
                        type="bar"
                        width="450"
                    />

                )}

                {plot3 && (

                    <Chart
                        options={state3.options}
                        series={state3.series}
                        type="bar"
                        width="450"
                    />

                )}

                {plot4 && (
                    <Chart
                        options={state4.options}
                        series={state4.series}
                        type="bar"
                        width="450"
                    />

                )}
            </div>

        </div>
    )
}
