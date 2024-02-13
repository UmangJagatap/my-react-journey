// import React from 'react'

import { AppBar, Button } from "@mui/material";
import { Box, IconButton, Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Badge } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";

export default function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h6" color="inherit" sx={{
                    flexGrow: 1,
                }}>E Shopy Store
                </Typography>
                <Box sx={{ display: { md: "flex" } }}>
                    <IconButton size="large" aria-label="shows cart items count" color="inherit">
                        <Badge badgeContent={1} color="error">
                            <ShoppingCartSharpIcon />
                        </Badge>
                    </IconButton>
                </Box>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
}
