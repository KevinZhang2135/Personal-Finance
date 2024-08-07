import React from "react";
import {
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import { TabPanel } from "@mui/lab";
import { positiveClamp } from "../../App";

const RentTab = (props) => {
    const { housingCost, setHousingCost } = props;

    const handleRentCostChange = (e) =>
        setHousingCost({
            ...housingCost,
            rent: { ...housingCost.rent, cost: positiveClamp(e.target.value) },
        });

    const handleInsurancePremiumChange = (e) =>
        setHousingCost({
            ...housingCost,
            rent: {
                ...housingCost.rent,
                insurance: positiveClamp(e.target.value),
            },
        });

    const handleUtilitiesChange = (e) =>
        setHousingCost({
            ...housingCost,
            rent: {
                ...housingCost.rent,
                utilities: positiveClamp(e.target.value),
            },
        });

    return (
        <TabPanel value="rent" sx={{ p: 0 }}>
            <Grid container spacing={4}>
                <Grid item xs={12} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Rent</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Rent"
                            value={housingCost.rent.cost}
                            onChange={handleRentCostChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>
                            Monthly Renters Insurance Premium
                        </InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Renters Insurance Premium"
                            value={housingCost.rent.insurance}
                            onChange={handleInsurancePremiumChange}
                        />
                    </FormControl>
                </Grid>

                <Grid item xs={12} lg={4}>
                    <FormControl fullWidth>
                        <InputLabel>Monthly Utilities Fee</InputLabel>
                        <OutlinedInput
                            startAdornment={
                                <InputAdornment position="start">
                                    $
                                </InputAdornment>
                            }
                            label="Monthly Utilities Fee"
                            value={housingCost.rent.utilities}
                            onChange={handleUtilitiesChange}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </TabPanel>
    );
};

export default RentTab;
