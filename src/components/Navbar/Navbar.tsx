import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";

import { styled } from "@mui/material/styles";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link as RouterLink } from "react-router-dom";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const contentCart = 4;

export const Navbar = () => {
  return (
    <Box sx={{ height: 80 }}>
      <Grid
        container
        justifyContent="space-between"
        sx={{ padding: "10px 30px" }}
      >
        <Grid item justifyContent="center" alignItems="center">
          <Typography component="div">
            <Link component={RouterLink} to="/products/1" underline="none">
              Accesorios
            </Link>
          </Typography>
        </Grid>

        <Grid item justifyContent="center" alignItems="center">
          <Typography component="div">
            <Link component={RouterLink} to="/" underline="none">
              PAVILION
            </Link>
          </Typography>
        </Grid>

        <Grid
          container
          sx={{ width: "auto" }}
          justifyContent="center"
          alignItems="center"
          gap={1}
        >
          <Typography component="div">
            <Link component={RouterLink} to="/" underline="none">
              Inicio
            </Link>
          </Typography>
          <Typography component="div">
            <Link component={RouterLink} to="/" underline="none">
              Sobre nosotros
            </Link>
          </Typography>
          <Typography component="div">
            <Link component={RouterLink} to="/" underline="none">
              Contactanos
            </Link>
          </Typography>
          <Typography component="div">
            <Link component={RouterLink} to="/" underline="none">
              Tienda
            </Link>
          </Typography>

          <Grid
            container
            aria-label="icons-navbar"
            sx={{ width: "auto" }}
            justifyContent="center"
            alignContent="center"
          >
            <Grid container sx={{ width: 'auto', mx: 2 }} gap={1} alignItems='center' >
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
            </Grid>

            <Typography>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={contentCart} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
