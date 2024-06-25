import React from "react";
import {
    Alert,
    Box,
    Divider,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { Error } from "@mui/icons-material";
import {
    toTitleCase,
    currencyFormatter,
    calculateTax,
    taxBrackets,
} from "./../../App";

import Theme from "../../Theme";

const TaxForm = (props) => {
    const { salary, setSalary, state, setState, taxes, setTaxes } = props;
    const netSalary = salary - taxes.federal - taxes.fica - taxes.state;

    // Styling
    const formItemWidth = { xs: 1, lg: 0.5 };
    const rowProps = {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const formDividerOrientation = useMediaQuery(Theme.breakpoints.down("lg"))
        ? "horizontal"
        : "vertical";

    // Handling input
    const handleSalaryChange = (e) => {
        let annualSalary = parseInt(e.target.value);
        (isNaN(annualSalary) || annualSalary < 0) && (annualSalary = 0);

        const federalTax = calculateTax(annualSalary, "federal");
        const stateTax = calculateTax(annualSalary, state);
        const fica = annualSalary * 0.0765;

        setSalary(annualSalary);
        setTaxes({
            federal: federalTax,
            state: stateTax,
            fica: fica,
        });
    };

    // Gets all states, including D.C, and capitalizes them
    const states = Object.keys(taxBrackets).splice(1);
    const handleStateChange = (e) => {
        setState(e.target.value);
        setTaxes({
            ...taxes,
            state: calculateTax(salary, e.target.value),
        });
    };

    return (
        <Box
            className="tax-form content-container"
            bgcolor="beige.main"
            pb="5vh"
        >
            <Paper elevation={3} sx={{ p: 4 }}>
                <Stack
                    direction={{ xs: "column", lg: "row" }}
                    justifyContent="space-evenly"
                    alignItems="flex-start"
                    divider={
                        <Divider
                            orientation={formDividerOrientation}
                            flexItem
                        />
                    }
                    spacing={4}
                >
                    <Stack width={formItemWidth} spacing={4}>
                        <FormControl fullWidth>
                            <InputLabel htmlFor="annual-salary">
                                Gross Annual Salary
                            </InputLabel>
                            <OutlinedInput
                                id="annual-salary"
                                startAdornment={
                                    <InputAdornment position="start">
                                        $
                                    </InputAdornment>
                                }
                                label="Gross Annual Salary"
                                value={salary}
                                onChange={handleSalaryChange}
                            />
                        </FormControl>

                        <FormControl fullWidth>
                            <InputLabel>State</InputLabel>
                            <Select
                                label="State"
                                value={state}
                                onChange={handleStateChange}
                            >
                                {states.map((inputState) => (
                                    <MenuItem
                                        key={inputState}
                                        value={inputState}
                                    >
                                        {toTitleCase(inputState)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <Box display="flex" justifyContent="center">
                            <Alert
                                icon={<Error fontSize="inherit" />}
                                severity="warning"
                            >
                                Calculations are done assuming a single-filing
                                status without any other exemptions based on
                                2023 tax brackets.
                            </Alert>
                        </Box>
                    </Stack>
                    <Stack
                        width={formItemWidth}
                        spacing={4}
                        divider={<Divider />}
                    >
                        <Stack {...rowProps}>
                            <Typography variant="h4">
                                Gross Monthly Salary
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(salary / 12)}
                            </Typography>
                        </Stack>

                        <Stack {...rowProps}>
                            <Typography variant="h4">
                                Monthy Federal Tax<sup>3</sup>
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(taxes.federal / 12)}
                            </Typography>
                        </Stack>

                        <Stack {...rowProps}>
                            <Typography variant="h4">
                                Monthly FICA Tax<sup>4</sup>
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(taxes.fica / 12)}
                            </Typography>
                        </Stack>

                        <Stack {...rowProps}>
                            <Typography variant="h4">
                                Monthly State Tax<sup>5</sup>
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(taxes.state / 12)}
                            </Typography>
                        </Stack>

                        <Stack {...rowProps}>
                            <Typography variant="h4">
                                Net Monthly Salary
                            </Typography>

                            <Typography variant="h4" color="primary">
                                {currencyFormatter(netSalary / 12)}
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Paper>
        </Box>
    );
};

export default TaxForm;
