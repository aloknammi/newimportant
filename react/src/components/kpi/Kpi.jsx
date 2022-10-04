import Box from '@mui/material/Box';
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import React, { useState, useEffect } from "react";
import "./kpi.scss";
import Chart from "react-apexcharts";
import TextField from '@mui/material/TextField';
import { data } from "../searchfield/data"
import { bdata } from "./bdata"
import { mdata } from "./mdata"



export const Kpi = ({ selection, storex }) => {
    //const [store, setStore] = useState(0);
    const [department1, setDepartment1] = useState('');
    const [department2, setDepartment2] = useState('');
    const [department3, setDepartment3] = useState('');
    const [department4, setDepartment4] = useState('');
    const [footage, setFootage] = useState(0)
    const [plot, setPlot] = useState(false)
    const [plot2, setPlot2] = useState(false)
    const [plot3, setPlot3] = useState(false)
    const [plot4, setPlot4] = useState(false)
    const [plotData1, setPlotData1] = useState('')
    const [plotData2, setPlotData2] = useState('')
    const [plotData3, setPlotData3] = useState('')
    const [plotData4, setPlotData4] = useState('')
    const [input, setInput] = useState({
        units: "",
        sales: "",
        margin: "",
        profit: ""
    });
    const [sum, setSum] = React.useState(undefined)
    const handleInput = function (e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        setSum(parseInt(input.units) + parseInt(input.sales) + parseInt(input.margin) + parseInt(input.profit))

    }, [input])
    //const [showkpi, setShowkpi] = useState(false)
    const clearDept = () => {
        setPlotData1();
        setPlotData2();
        setPlotData3();
        setPlotData4();

    }


    const footageChange = (event) => {
        setFootage(event.target.value);
    }

    var ndata = [];

    if (!!storex) {
        var vall = data.find(vv => vv.storeNbr === storex);
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


    const state = {
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

    const seriesDataz = [];

    var itemsz = [];
    if (!!selection) {
        //if (selection != null) {
        itemsz = bdata.find((item) => {
            if (item.departmentID === selection) {
                return true;
                ;
            } else {
                return false;

            }
        });

    }

    if (typeof (itemsz) !== 'undefined' && itemsz != null) {
        seriesDataz.push(itemsz)
    }

    var iitem = seriesDataz.map((item) => {
        return item.STORE_TREND

    });

    function getMax(a) {
        return Math.max(...a.map(e => Array.isArray(e) ? getMax(e) : e));
    }

    const maxv = getMax(iitem)

    var buildOptions = () => {
        var arr = [];

        for (let i = 1; i <= maxv; i++) {
            arr.push(<MenuItem key={i} value={i}>{i}</MenuItem>)
        }

        return arr;
    }



    return (
        <div className="container">
            <div className="wrapper">
                <Box sx={{ minWidth: 120 }} className="fg">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Footage</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={footage}
                            label="Footage"
                            onChange={footageChange}
                        >
                            <MenuItem value="0">Select</MenuItem>
                            {
                                buildOptions()
                            }
                        </Select>
                    </FormControl>
                </Box>

                <Box
                    className="fg"
                    component="form"
                    sx={{ minWidth: 120 }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} onChange={handleInput} name="footage1" value={input.margin} id="outlined-basic" label="Footage 1" variant="outlined" />
                </Box>

                <Box
                    className="fg"
                    component="form"
                    sx={{ minWidth: 120 }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} onChange={handleInput} name="footage2" value={input.margin} id="outlined-basic" label="Footage 2" variant="outlined" />
                </Box>

                <Box
                    className="fg"
                    component="form"
                    sx={{ minWidth: 120 }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }} onChange={handleInput} name="footage3" value={input.margin} id="outlined-basic" label="Footage 3" variant="outlined" />
                </Box>

            </div>
            <div className="halo">



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
                                setPlot3(false)
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
