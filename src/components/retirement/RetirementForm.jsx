import React, { useState } from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Paper,
    Stack,
} from "@mui/material";

const RetirementForm = (props) => {
    const { retirement, setRetirement, salary } = props;
    const monthlySalary = salary / 12;

    const [salaryPercent, setSalaryPercent] = useState(0);

    const handleInvestmentChange = (e) => {
        let investment = parseInt(e.target.value);
        (isNaN(investment) || investment < 0) && (investment = 0);

        setRetirement(investment);
        setSalaryPercent(investment / monthlySalary);
    };

    const handlePercentChange = (e) => {
        let percent = parseInt(e.target.value) / 100;
        (isNaN(percent) || percent < 0) && (percent = 0);

        setRetirement(monthlySalary * percent);
        setSalaryPercent(percent);
    };

    return (
        <Paper
            id="retirement-info"
            elevation={3}
            sx={{
                width: { xs: 1, lg: 0.5 },
                p: 4,
            }}
        >
            <Stack direction="column" spacing={4}>
                <FormControl fullWidth>
                    <InputLabel>Monthly Retirement Investment</InputLabel>
                    <OutlinedInput
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Retirement Investment per Month"
                        value={Math.round(retirement)}
                        onChange={handleInvestmentChange}
                    />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel>Percentage of Monthly Salary</InputLabel>
                    <OutlinedInput
                        endAdornment={
                            <InputAdornment position="start">%</InputAdornment>
                        }
                        label="Percentage of Monthly Salary"
                        value={Math.round(salaryPercent * 100)}
                        onChange={handlePercentChange}
                    />
                </FormControl>
            </Stack>
        </Paper>
    );
};

export default RetirementForm;