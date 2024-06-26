import React from "react";
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Typography,
} from "@mui/material";

import { TabPanel } from "@mui/lab";
import { positiveClamp } from "../../App";

const CarLeaseTab = (props) => {
    const { carCost, setCarCost } = props;

    const handleCarLeaseChange = (e) => {
        setCarCost({
            ...carCost,
            lease: { ...carCost.lease, cost: positiveClamp(e.target.value) },
        });

        console.log({
            ...carCost,
            lease: { ...carCost.lease, cost: positiveClamp(e.target.value) },
        });
    };

    const handleGasChange = (e) =>
        setCarCost({
            ...carCost,
            lease: { ...carCost.lease, gas: positiveClamp(e.target.value) },
        });

    const handleMaintenanceChange = (e) =>
        setCarCost({
            ...carCost,
            lease: {
                ...carCost.lease,
                maintenance: positiveClamp(e.target.value),
            },
        });

    const handleInsuranceChange = (e) =>
        setCarCost({
            ...carCost,
            lease: {
                ...carCost.lease,
                insurance: positiveClamp(e.target.value),
            },
        });

    return (
        <TabPanel value="lease" sx={{ p: 0, pt: 4 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Lease Payment
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Lease Payment</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Lease Payment"
                                value={carCost.lease.cost}
                                onChange={handleCarLeaseChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Gas
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Gas Expenses</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Gas Expenses"
                                value={carCost.lease.gas}
                                onChange={handleGasChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Maintenance
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Maintenance Savings</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Maintenance Savings"
                                value={carCost.lease.maintenance}
                                onChange={handleMaintenanceChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper variant="outlined" sx={{ p: 4 }}>
                        <Typography variant="h3" mb={4}>
                            Car Insurance
                        </Typography>
                        <FormControl fullWidth>
                            <InputLabel>Monthly Premium</InputLabel>
                            <OutlinedInput
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Monthly Premium"
                                value={carCost.lease.insurance}
                                onChange={handleInsuranceChange}
                            />
                        </FormControl>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default CarLeaseTab;
