'use client';

import { Grid, ListItem } from '@mui/material';
import React from 'react';
// import { Grid, Item } from '@mui/material/Grid';

export default function Hero() {
  return (
    <div className="tw-min-h-hero-height tw-bg-landing-hero-bg tw-bg-cover tw-bg-bottom tw-bg-no-repeat">
      <div className="tw-m-auto tw-w-full tw-max-w-7xl">
        <Grid spacing={2}>
          <Grid item lg={6}>
            <ListItem>xs=8</ListItem>
          </Grid>
          <Grid item lg={6}>
            <ListItem>xs=4</ListItem>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
