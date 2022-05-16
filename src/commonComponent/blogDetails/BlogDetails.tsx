import { Grid } from '@mui/material'
import React from 'react'
import styles from "../../../styles/BlogPagesDetails.module.css"
interface allDataProps{
    allData:any;
   }

   const BlogDetails: React.FC<allDataProps> = ({allData}: allDataProps) => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <img src={"allData.image"} alt="image not found" />
                </Grid>
                <Grid item xs={12}>
                    <p className={styles.description}>{allData.description}</p>
                    <p className={styles.date}>{allData.date}</p>
                </Grid>
            </Grid>

        </div>
    )
}

export default BlogDetails