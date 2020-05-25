import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        margin: theme.spacing(1),
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
  },
}));

export default function ButtonLink() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                SIGNIN
              </Link>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                SIGNUP
              </Link>
            </Grid>
          </Grid>
    </div>
  );
}

