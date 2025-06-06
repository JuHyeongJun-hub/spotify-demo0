import { Grid ,Typography } from '@mui/material';
import React from 'react'
import useGetNewReleases from '../../../hooks/useGetNewReleases';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import Card from '../../../common/components/Card';

const NewReleases = () => {
  const {data, error, isLoading} = useGetNewReleases();

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    <ErrorMessage errorMessage={error.message}/>
  }

  if(!data) {
    return <ErrorMessage errorMessage="No data found"/>
  }

  console.log("ddd : ", data);
  const items = data?.albums?.items ?? [];
  
  return (
    <div>
        <Typography variant="h1" paddingTop="8px">
            New Releases Albums
        </Typography>
        {data && items.length > 0 ? 
            (<Grid container spacing={2}>
                {items.map((albums, idx) => (
                    <Grid size={{xs:6, sm:4, md:2}} key={albums.id}>
                        <Card image={albums.images[0].url} name={albums.name} artistName={albums.artists[0].name} />
                    </Grid>
                ))}
            </Grid>) : 
            (<Typography variant="h2">No data</Typography>)}  
    </div>
  )
}

export default NewReleases