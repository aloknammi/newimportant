import Box from '@mui/material/Box';
import Autocomplete from "@mui/material/Autocomplete";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./searchfield.scss";
import { data } from "./data"


export const Searchfield = ({ onSelectionChanged, onSelectionChanges }) => {
    const [store, setStore] = useState('');
    const [department, setDepartment] = useState('');
    const [disable, setDisable] = useState(false);
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

    //console.log('sum.......',sum)

    const ser = data.map((item) => {
        return item.storeNbr

    });

    var ndata = [];
    if (!!store) {
        var vall = data.find(vv => vv.storeNbr === store);
        ndata.push(vall);
    }
    const serz = ndata.map((item) => {
        return item.BenefitListForDepartments

    });
    const mergex3 = serz.flat(1)

    const ser1 = mergex3.map((item) => {
        return item.departmentID

    });

    const handleSubmit = (e) => {
        e.preventDefault();
    };



    return (
        <div className="searchfield">
            <form
                id="registrationForm"
                action="/"
                method="POST"
                onSubmit={handleSubmit}
            >
                <div className="wrapper">

                    <Autocomplete
                        disablePortal
                        className=""
                        id="combo-box-demo"
                        options={ser}
                        value={store}
                        onChange={(_event, newTeam) => {
                            setStore(newTeam);
                        }}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Store" />}
                    />

                    <Autocomplete
                        disablePortal
                        className=""
                        id="combo-box-demo"
                        options={ser1}
                        value={department}
                        onChange={(_event, newTeam) => {
                            setDepartment(newTeam);
                        }}
                        sx={{ width: 200 }}
                        renderInput={(params) => <TextField {...params} label="Department" />}
                    />

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '13ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} onChange={handleInput} name="units" value={input.units} id="outlined-basic" label="Units" variant="outlined" />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '13ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} onChange={handleInput} name="sales" value={input.sales} id="outlined-basic" label="Sales" variant="outlined" />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '13ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} onChange={handleInput} name="margin" value={input.margin} id="outlined-basic" label="Margin" variant="outlined" />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '13ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }} onChange={handleInput} name="profit" value={input.profit} id="outlined-basic" label="Profit" variant="outlined" />
                    </Box>

                    <Button variant="contained" className="button" disabled={sum !== 100} onClick={() => onSelectionChanged(department, onSelectionChanges(store))}>Go</Button>


                </div>
            </form>
        </div>
    )
}
