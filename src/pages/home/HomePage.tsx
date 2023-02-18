import { Grid } from "@mui/material"
import { FeatureProducts, Sidebar } from "@/components"

export const HomePage = () => {
  return (
    <Grid container aria-label="home-page">
      <Sidebar />
      <FeatureProducts  type="destacadas" />
      <FeatureProducts  type="Tendencias" />
    </Grid>    
  )
}
