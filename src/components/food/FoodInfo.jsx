import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import FoodForm from "./FoodForm";

const FoodInfo = (props) => {
    const { foodCost, setFoodCost } = props;

    return (
        <Box
            id="food-info"
            className="content-container"
            bgcolor="beige.main"
            py="5vh"
        >
            <Stack direction={{ xs: "column", lg: "row" }} spacing={4}>
                <Box width={{ xs: 1, lg: 0.6 }}>
                    <Typography variant="h1" gutterBottom>
                        Food
                    </Typography>

                    <Typography variant="p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </Typography>
                </Box>
                <FoodForm foodCost={foodCost} setFoodCost={setFoodCost} />
            </Stack>
        </Box>
    );
};

export default FoodInfo;
