import Box from '@mui/material/Box';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import React, { useState } from "react";
import "./halo.scss";
import Chart from "react-apexcharts";
import { ddata } from "./ddata"
import { mdata } from "./mdata"

export const Halo = () => {
    const [store, setStore] = useState('');
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
    const clearDept = () => {
        setPlotData1();
        setPlotData2();
        setPlotData3();
        setPlotData4();

    }

    const handleCheck = (event) => {
        setChecked(event.currentTarget.checked);
    };

    var ndata = [];
    //console.log('store ',store)
    if (!!store) {
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


    const ser = ddata.map((item) => {
        return item.storeNbr

    });

    var ndata = [];
    if (!!store) {
        var vall = ddata.find(vv => vv.storeNbr === store);
        ndata.push(vall);
    }
    const serz = ndata.map((item) => {
        return item.BenefitListForDepartments

    });
    const mergexx3 = serz.flat(1)

    const ser1 = mergexx3.map((item) => {
        return item.departmentID

    });


    const seriesDatazx = [];
    seriesDatazx.push(mdata);

    const itemszx = seriesDatazx.map((item) => {
        return item.departmentListAndSizes

    });

    const mergex3 = itemszx.flat(1)

    if (!!plotData1) {
        const plotdata11 = mergex3.find((item) => {
            return item.departmentID === plotData1

        });
        if (typeof (plotdata11) !== 'undefined' && plotdata11 != null) {
            const plotdatas11 = plotdata11.benefitsForSizes

            console.log('valulululu', plotdatas11)
            var tmpResult = plotdatas11.reduce((r, o) => {
                Object.entries(o).forEach(([k, v]) => {
                    r[k] = r[k] || []
                    if (!r[k].includes(v)) r[k].push(v)
                });
                return r;
            },
                Object.create(null));

            const obj = JSON.parse(JSON.stringify(tmpResult)); const ser = []; ser.push(obj);

            if (ser.length > 0) {
                for (const [key, value] of Object.entries(ser[0])) {
                    ser.push({
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        data: value
                    })


                }
            }
            var newval1 = ser.slice(1);
        }

    }

    if (!!plotData2) {
        const plotdata12 = mergex3.find((item) => {
            return item.departmentID === plotData2

        });

        if (typeof (plotdata12) !== 'undefined' && plotdata12 != null) {
            const plotdatas12 = plotdata12.benefitsForSizes
            var tmpResult = plotdatas12.reduce((r, o) => {
                Object.entries(o).forEach(([k, v]) => {
                    r[k] = r[k] || []
                    if (!r[k].includes(v)) r[k].push(v)
                });
                return r;
            },
                Object.create(null));

            const obj = JSON.parse(JSON.stringify(tmpResult)); const ser = []; ser.push(obj);

            if (ser.length > 0) {
                for (const [key, value] of Object.entries(ser[0])) {
                    ser.push({
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        data: value
                    })
                }
            }
            var newval2 = ser.slice(1);
        }
    }

    if (!!plotData3) {
        const plotdata13 = mergex3.find((item) => {
            return item.departmentID === plotData3

        });
        if (typeof (plotdata13) !== 'undefined' && plotdata13 != null) {
            const plotdatas13 = plotdata13.benefitsForSizes
            var tmpResult = plotdatas13.reduce((r, o) => {
                Object.entries(o).forEach(([k, v]) => {
                    r[k] = r[k] || []
                    if (!r[k].includes(v)) r[k].push(v)
                });
                return r;
            },
                Object.create(null));

            const obj = JSON.parse(JSON.stringify(tmpResult)); const ser = []; ser.push(obj);

            if (ser.length > 0) {
                for (const [key, value] of Object.entries(ser[0])) {
                    ser.push({
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        data: value
                    })
                }
            }
            var newval3 = ser.slice(1);
        }
    }

    if (!!plotData4) {
        const plotdata14 = mergex3.find((item) => {
            return item.departmentID === plotData4

        });
        if (typeof (plotdata14) !== 'undefined' && plotdata14 != null) {
            const plotdatas14 = plotdata14.benefitsForSizes
            var tmpResult = plotdatas14.reduce((r, o) => {
                Object.entries(o).forEach(([k, v]) => {
                    r[k] = r[k] || []
                    if (!r[k].includes(v)) r[k].push(v)
                });
                return r;
            },
                Object.create(null));

            const obj = JSON.parse(JSON.stringify(tmpResult)); const ser = []; ser.push(obj);

            if (ser.length > 0) {
                for (const [key, value] of Object.entries(ser[0])) {
                    ser.push({
                        name: key.charAt(0).toUpperCase() + key.slice(1),
                        data: value
                    })
                }
            }
            var newval4 = ser.slice(1);
        }
    }


    var state = {
        series: newval1,
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false }, },
            dataLabels: { enabled: false },
            stroke: { width: [5, 5, 5, 5, 5], curve: 'straight', dashArray: [0, 0, 0, 0, 0] },
            title: { text: 'Department - ' + plotData1, align: 'left' },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: { size: 0, hover: { sizeOffset: 6 } },
            xaxis: { categories: ['1', '2', '3'], },
            yaxis: { decimalsInFloat: 0 },
            grid: { borderColor: '#f1f1f1', }
        },
    };



    const state2 = {
        series: newval2,
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false }, },
            dataLabels: { enabled: false },
            stroke: { width: [5, 5, 5, 5, 5], curve: 'straight', dashArray: [0, 0, 0, 0, 0] },
            title: { text: 'Department - ' + plotData2, align: 'left' },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: { size: 0, hover: { sizeOffset: 6 } },
            xaxis: { categories: ['1', '2', '3'], },
            yaxis: { decimalsInFloat: 0 },
            grid: { borderColor: '#f1f1f1', }
        },
    };

    const state3 = {
        series: newval3,
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false }, },
            dataLabels: { enabled: false },
            stroke: { width: [5, 5, 5, 5, 5], curve: 'straight', dashArray: [0, 0, 0, 0, 0] },
            title: { text: 'Department - ' + plotData3, align: 'left' },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: { size: 0, hover: { sizeOffset: 6 } },
            xaxis: { categories: ['1', '2', '3'], },
            yaxis: { decimalsInFloat: 0 },
            grid: { borderColor: '#f1f1f1', }
        },
    };


    const state4 = {
        series: newval4,
        options: {
            chart: { height: 350, type: 'line', zoom: { enabled: false }, },
            dataLabels: { enabled: false },
            stroke: { width: [5, 5, 5, 5, 5], curve: 'straight', dashArray: [0, 0, 0, 0, 0] },
            title: { text: 'Department - ' + plotData4, align: 'left' },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: { size: 0, hover: { sizeOffset: 6 } },
            xaxis: { categories: ['1', '2', '3'], },
            yaxis: { decimalsInFloat: 0 },
            grid: { borderColor: '#f1f1f1', }
        },
    };


    return (
        <div className="container">
            <div className="wrapper">

                <FormGroup className="fgs">
                    <FormControlLabel control={<Checkbox checked={checked} onChange={handleCheck} />} label="Halo Effect" />

                </FormGroup>

                {checked && (

                    <Autocomplete
                        disablePortal
                        className="fg"
                        id="combo-box-demo"
                        options={ser}
                        value={store}
                        onChange={(_event, newTeam) => {
                            setStore(newTeam);

                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Store" />}
                    />


                )}
            </div>
            <div className="halo">

                {checked && (


                    <div className="dropdown">
                        <Autocomplete
                            disablePortal
                            className="dd"
                            id="combo-box-demo"
                            options={ser1}
                            value={department1}
                            onChange={(_event, newTeam) => {
                                setDepartment1(newTeam);
                                if (newTeam === '0') {
                                    setPlot(false)
                                }
                                else {
                                    setPlot(true)
                                    setPlotData1(newTeam)
                                }


                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Department" />}
                        />


                        <Autocomplete
                            disablePortal
                            className="dd"
                            id="combo-box-demo"
                            options={ser1}
                            value={department2}
                            onChange={(_event, newTeam) => {
                                setDepartment2(newTeam);
                                if (newTeam === '0') {
                                    setPlot2(false)
                                }
                                else {
                                    setPlot2(true)
                                    setPlotData2(newTeam)
                                }


                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Department" />}
                        />


                        <Autocomplete
                            disablePortal
                            className="dd"
                            id="combo-box-demo"
                            options={ser1}
                            value={department3}
                            onChange={(_event, newTeam) => {
                                setDepartment3(newTeam);
                                if (newTeam === '0') {
                                    setPlot2(false)
                                }
                                else {
                                    setPlot3(true)
                                    setPlotData3(newTeam)
                                }


                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Department" />}
                        />

                        <Autocomplete
                            disablePortal
                            className="dd"
                            id="combo-box-demo"
                            options={ser1}
                            value={department4}
                            onChange={(_event, newTeam) => {
                                setDepartment4(newTeam);
                                if (newTeam === '0') {
                                    setPlot4(false)
                                }
                                else {
                                    setPlot4(true)
                                    setPlotData4(newTeam)
                                }


                            }}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Department" />}
                        />


                    </div>
                )}

            </div>


            <div className="containers">
                <div>
                    {
                        newval1?.length > 0 ? (
                            <div>
                                {
                                    plot && (
                                        <div id="chart">
                                            <Chart
                                                options={state.options}
                                                series={state.series}
                                                type="line"
                                                width="450"
                                            />
                                        </div>
                                    )

                                }
                            </div>
                        ) : (
                            <p className='nodata'></p>
                        )

                    }
                </div>
                <div>
                    {
                        newval2?.length > 0 ? (
                            <div>
                                {
                                    plot2 && (
                                        <div id="chart">
                                            <Chart
                                                options={state2.options}
                                                series={state2.series}
                                                type="line"
                                                width="450"
                                            />
                                        </div>
                                    )

                                }
                            </div>
                        ) : (
                            <p className='nodata'></p>
                        )

                    }
                </div>
                <div>
                    {
                        newval3?.length > 0 ? (
                            <div>
                                {
                                    plot3 && (
                                        <div id="chart">
                                            <Chart
                                                options={state3.options}
                                                series={state3.series}
                                                type="line"
                                                width="450"
                                            />
                                        </div>
                                    )

                                }
                            </div>
                        ) : (
                            <p className='nodata'></p>
                        )

                    }
                </div>
                <div>
                    {
                        newval4?.length > 0 ? (
                            <div>
                                {
                                    plot4 && (
                                        <div id="chart">
                                            <Chart
                                                options={state4.options}
                                                series={state4.series}
                                                type="line"
                                                width="450"
                                            />
                                        </div>
                                    )

                                }
                            </div>
                        ) : (
                            <p className='nodata'></p>
                        )

                    }
                </div>

            </div>
        </div>
    )
}
