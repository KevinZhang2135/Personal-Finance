import React from "react";
import { Box, Typography } from "@mui/material";

const RetirementInfo = (props) => {
    return (
        <Box id="retirement-info" width={{ xs: 1, lg: 0.5 }}>
            <Typography variant="h1" gutterBottom>
                Retirement
            </Typography>

            <Typography variant="p" display="block" gutterBottom>
                Millions of Americans rely on Social Security to produce income
                during retirement. To ensure finanical well-being, most American
                adults also invest in retirement assets such as 401(k) plans
                offerred by their employer, pensions, or IRAs.
            </Typography>

            <Typography variant="p">
                However, no matter the type of retirement investment, starting
                early is imperative to take advantage of immense wealth
                generated by time and compounded interest.
            </Typography>
        </Box>
    );
};

export default RetirementInfo;
