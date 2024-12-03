// import React from 'react'

import { AppBar, Button } from "@mui/material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import { useSelector } from "react-redux";
import { getItemCount } from "../../utils";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("section")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, .15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, .25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

function SearchBar() {
    return (<Search>
        <Autocomplete
            disablePortal
            options={top100Films}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
        />
    </Search>
    );
}

export default function Header() {
    const cartItems = useSelector((state) => state.cart?.value);
    const count = getItemCount(cartItems);
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" color="inherit" sx={{
                    flexGrow: 1,
                }}>E Shopy Store
                </Typography>
                <SearchBar />
                <Box sx={{ display: { md: "flex" } }}>
                    <IconButton size="large" aria-label="shows cart items count" color="inherit">
                        <Badge badgeContent={count} color="error">
                            <ShoppingCartSharpIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
