import React from "react";
import { Box, Collapse, List } from "@mui/material";

import { blue } from "@mui/material/colors";
import { TransitionGroup } from "react-transition-group";

import LoanForm from "./LoanForm";

const Loans = (props) => {
    const { loans, setLoans, bgcolor } = props;

    return (
        <Box className="loan-forms" sx={{ bgcolor: bgcolor, px: "10vw" }}>
            <List sx={{ pt: loans.length > 0, pb: 0 }}>
                <TransitionGroup>
                    {loans.map((loan) => (
                        <Collapse key={"loan-form-" + loan.id} >
                            <LoanForm
                                loan={loan}
                                loans={loans}
                                setLoans={setLoans}
                            />
                        </Collapse>
                    ))}
                </TransitionGroup>
            </List>
        </Box>
    );
};

export default Loans;
