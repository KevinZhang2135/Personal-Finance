import React, { useState } from "react";
import {
    Button,
    Divider,
    FormControl,
    InputAdornment,
    InputLabel,
    ListItem,
    OutlinedInput,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";

import { Clear } from "@mui/icons-material";
import { calculateLoanEMI, currencyFormatter } from "../../App";
import Theme from "../../Theme";

const LoanForm = (props) => {
    const { loan, loans, setLoans } = props;
    const [aprFormValue, setAprFormValue] = useState(loan.apr * 100);
    const [aprInvalid, setAprInvalid] = useState(false);

    // Styling
    const formItemWidth = { xs: 1, lg: 0.5 };
    const outputProps = {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
    };

    const formDividerOrientation = useMediaQuery(Theme.breakpoints.down("lg"))
        ? "horizontal"
        : "vertical";

    const handlePrincipalChange = (e) => {
        let principal = parseInt(e.target.value);
        (isNaN(principal) || principal < 0) && (principal = 0);

        const emi = calculateLoanEMI(principal, loan.apr, loan.termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, principal: principal, emi: emi };

        setLoans(loansCopy);
    };

    const handleTermMonthsChange = (e) => {
        let termMonths = parseInt(e.target.value);
        (isNaN(termMonths) || termMonths < 0) && (termMonths = 0);

        const emi = calculateLoanEMI(loan.principal, loan.apr, termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, termMonths: termMonths, emi: emi };

        setLoans(loansCopy);
    };

    const handleAprChange = (e) => {
        setAprFormValue(e.target.value);
        const apr = parseFloat(e.target.value) / 100;

        // Does not continue if apr is invalid
        const regex = /^\d+.?\d*$/;
        const error = !(regex.test(e.target.value) && apr > 0);
        setAprInvalid(error);
        if (error) return;

        const emi = calculateLoanEMI(loan.principal, apr, loan.termMonths);

        const loanIndex = loans.indexOf(loan);
        const loansCopy = [...loans];
        loansCopy[loanIndex] = { ...loan, apr: apr, emi: emi };

        setLoans(loansCopy);
    };

    const formInput = (
        <Stack width={formItemWidth} spacing={4}>
            <FormControl fullWidth>
                <InputLabel>Principal</InputLabel>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Principal"
                    value={loan.principal}
                    onChange={handlePrincipalChange}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel error={loan.termMonths <= 0}>Months</InputLabel>
                <OutlinedInput
                    endAdornment={
                        <InputAdornment position="start">months</InputAdornment>
                    }
                    label="Months"
                    value={loan.termMonths}
                    error={loan.termMonths <= 0}
                    onChange={handleTermMonthsChange}
                />
            </FormControl>

            <FormControl fullWidth>
                <InputLabel error={aprInvalid}>APR</InputLabel>
                <OutlinedInput
                    endAdornment={
                        <InputAdornment position="start">%</InputAdornment>
                    }
                    label="APR"
                    value={aprFormValue}
                    error={aprInvalid}
                    onChange={handleAprChange}
                />
            </FormControl>
        </Stack>
    );

    const formOutput = (
        <Stack width={formItemWidth} spacing={4} divider={<Divider flexItem />}>
            <Stack {...outputProps}>
                <Typography variant="h4">Monthly Payment</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(loan.emi)}
                </Typography>
            </Stack>

            <Stack {...outputProps}>
                <Typography variant="h4">Total Principal Paid</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(loan.principal)}
                </Typography>
            </Stack>

            <Stack {...outputProps}>
                <Typography variant="h4">Total Interest Paid</Typography>

                <Typography variant="h4" color="primary">
                    {currencyFormatter(
                        loan.emi * loan.termMonths - loan.principal
                    )}
                </Typography>
            </Stack>

            <Stack {...outputProps}>
                <Button
                    variant="contained"
                    color="error"
                    size="large"
                    disableElevation
                    startIcon={<Clear fontSize="large" />}
                    sx={{ textTransform: "capitalize" }}
                    onClick={() =>
                        setLoans(loans.filter((e) => e.id !== loan.id))
                    }
                >
                    <Typography variant="p">Remove</Typography>
                </Button>
            </Stack>
        </Stack>
    );

    return (
        <ListItem sx={{ p: 0, pb: 4 }}>
            <Paper elevation={3} sx={{ width: 1, p: 4 }}>
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
                    {formInput}
                    {formOutput}
                </Stack>
            </Paper>
        </ListItem>
    );
};

export default LoanForm;
