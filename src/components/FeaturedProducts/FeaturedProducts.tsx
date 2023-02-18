import { Grid, Typography } from "@mui/material";
import { Card } from "@/components";

interface Props {
  type: string;
}

export const FeatureProducts = ({ type }: Props) => {
  const data = [
    {
      id: 1,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_683829-MCO49543367815_042022-F.webp",
      img2: "https://http2.mlstatic.com/D_NQ_NP_2X_838065-MCO49543468170_042022-F.webp",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_867120-MCO44907951203_022021-F.webp",
      img2: "https://http2.mlstatic.com/D_NQ_NP_2X_639142-MCO45260706738_032021-F.webp",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 16,
      price: 13,
    },
    {
      id: 3,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_757361-MCO51986252783_102022-F.webp",
      img2: "https://http2.mlstatic.com/D_NQ_NP_2X_757361-MCO51986252783_102022-F.webp",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 17,
      price: 12,
    },
    {
      id: 4,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_668908-MCO44849485631_022021-F.webp",
      img2: "https://http2.mlstatic.com/D_NQ_NP_2X_828715-MCO44849495502_022021-F.webp",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 18,
      price: 12,
    },
    {
      id: 5,
      img: "https://http2.mlstatic.com/D_NQ_NP_2X_699331-CBT48129497481_112021-F.webp",
      img2: "https://http2.mlstatic.com/D_NQ_NP_2X_628078-CBT48129497476_112021-F.webp",
      title: "Long Sleeve Graphic T-shirt",
      isNew: false,
      oldPrice: 15,
      price: 10,
    },
  ];

  return (
    <Grid
      container
      aria-label="featured-products"
      sx={{ margin: "100px 200px" }}
    >
      <Grid
        container
        aria-label="top-featured_products"
        sx={{ width: "auto", mb: 5 }}
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        wrap="nowrap"
      >
        <Grid item flex={2}>
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          >
            {type}
          </Typography>
        </Grid>
        <Grid item flex={3}>
          <Typography component="p" variant="body2" sx={{ color: "gray" }}>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum,
            optio architecto. Maxime id repudiandae nostrum, velit voluptas sunt
            nobis fugit veritatis cupiditate neque non quisquam, repellendus,
            animi enim. Aspernatur, porro.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        aria-label="bottom-featured_products"
        justifyContent="center"
        alignItems="center"
        gap={5}
        wrap="wrap"
        flexDirection="row"
      >
        {data.map((item) => (
          <Grid item key={`__${item.id}__`}>
            <Card item={item} key={item.id} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
