import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      gap={2}
      flexDirection="column"
    >
      <Grid
        container
        aria-label="top-footer"
        flexDirection="row"
        justifyContent="center"
        gap={2}
      >
        <Grid item lg={2}>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Typography component="h2" variant="h5">
              Categorias
            </Typography>
            <Typography component="span" variant="body2">
              <Link component={RouterLink} to="/faq" underline="none">
                Accesorios
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg={2}>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={1}
          >
            <Typography component="h2" variant="h5">
              Links
            </Typography>
            <Typography component="span" variant="body2">
              <Link component={RouterLink} to="/faq" underline="none">
                FAQ
              </Link>
            </Typography>
            <Typography component="span" variant="body2">
              <Link component={RouterLink} to="/faq" underline="none">
                Paginas
              </Link>
            </Typography>
            <Typography component="span" variant="body2">
              <Link component={RouterLink} to="/faq" underline="none">
                Tiendas
              </Link>
            </Typography>
            <Typography component="span" variant="body2">
              <Link component={RouterLink} to="/faq" underline="none">
                Cookies
              </Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg={3}>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography component="h2" variant="h5">
              Sobre Nosotros
            </Typography>
            <Typography component="span" variant="body2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              nemo harum error dignissimos, eligendi ratione itaque suscipit
              fugiat laboriosam temporibus mollitia non impedit nesciunt
              consequuntur beatae ipsa voluptatem.
            </Typography>
          </Grid>
        </Grid>

        <Grid item lg={3}>
          <Grid
            container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={2}
          >
            <Typography component="h2" variant="h5">
              Contactanos
            </Typography>
            <Typography component="span" variant="body2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              nemo harum error dignissimos, eligendi ratione itaque suscipit
              fugiat laboriosam temporibus mollitia non impedit nesciunt
              consequuntur beatae ipsa voluptatem.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        aria-label="bottom-footer"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item aria-label="left-botton__footer" lg={5}>
          <Grid
            justifyItems="center"
            alignItems="center"
            gap={2}
            flexDirection="row"
            sx={{ display: 'flex', justifyContent: 'center', alignItems:'center' }}
          >
            <Typography component="h2" variant="h5">
              THE PAVILION
            </Typography>
            <Typography component="span" variant="body2">
              {" "}
              © Copyright 2023. All Rights Reserved{" "}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          aria-label="rigth-botton__footer"
          alignItems="center"
          justifyItems="center"
          lg={5}
        >
          <img
            src="/img/payment.png"
            alt="payment-logos"
            style={{ height: "50px" }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
