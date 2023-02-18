import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  item: {
    id: number;
    img: string;
    img2: string;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
  };
}

export const Card = ({
  item: { id, img, img2, title, isNew, oldPrice, price },
}: Props) => {
  return (
    <Link component={RouterLink} to={`/product/${id}`} underline="none">
      <Grid
        container
        aria-label="card"
        sx={{ width: "280px" }}
        flexDirection="column"
        gap={4}
      >
        <Grid
          container
          sx={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            position: "relative",
            "&:hover": {
              ".second-img": {
                zIndex: 2,
              },
            },
          }}
          className="image-container"
          aria-label="images"
        >
          {isNew ? (
            <Typography
              component="span"
              variant="body1"
              sx={{
                position: "absolute",
                top: "5px",
                left: "5px ",
                bgcolor: "white",
                color: "teal",
                padding: "3px 5px",
                zIndex: 3,
                fontWeight: '500'
              }}
            >
              Nuevo
            </Typography>
          ) : null}
          <img
            src={img2}
            alt={title}
            className="second-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
            }}
          />
          <img
            src={img}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              zIndex: 1,
            }}
            className="main-img"
          />
        </Grid>
        <Typography component="h2" variant="body1" sx={{ fontSize: '16px', fontWeight: '400',  }} >
          {" "}
          {title}{" "}
        </Typography>
        <Grid container aria-label="prices-products" gap={2} flexDirection='row' justifyContent='left'>
          <Grid item>
            <Typography component="h3" variant="body2" sx={{ fontSize: '18px', fontWeight: '300', color: 'gray', textDecoration: 'line-through' }}>
              ${oldPrice}
            </Typography>
          </Grid>
          <Grid item>
            <Typography component="h2" variant="body2" sx={{ fontSize: '18px', fontWeight: '300' }}>
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Link>
  );
};
