import React from "react";
import { Alert, Box, Link, Paper, Tab } from "@mui/material";

import { TabContext, TabList } from "@mui/lab";

import MortgageTab from "./MortgageTab";
import RentTab from "./RentTab";

const HousingForm = (props) => {
    const { housingType, setHousingType, housingCost, setHousingCost } = props;

    return (
        <Box id="tax-info" className="content-container" pb="5vh">
            <Paper elevation={3} sx={{ p: 4 }}>
                <TabContext value={housingType}>
                    <Box borderBottom={1} borderColor="divider">
                        <TabList
                            onChange={(e, type) => setHousingType(type)}
                            aria-label="lab API tabs example"
                        >
                            <Tab label="Rent" value="rent" />
                            <Tab label="Mortgage" value="mortgage" />
                        </TabList>
                    </Box>

                    <RentTab
                        housingCost={housingCost}
                        setHousingCost={setHousingCost}
                    />
                    <MortgageTab
                        housingCost={housingCost}
                        setHousingCost={setHousingCost}
                    />
                </TabContext>

                <Alert severity="info">
                    For financing furniture, appliances, and household supplies,
                    use the{" "}
                    <Link href="#misc-info">
                        miscellaneous loans and expenses section.
                    </Link>
                </Alert>
            </Paper>
        </Box>
    );
};

export default HousingForm;