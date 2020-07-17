import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  foot: {
    paddingTop: '100%',
    textAlign: 'center'
  }
}))

export default () => {
  const classes = useStyles()
  return (
    <h1 className={classes.foot}> 2020 - Sed nec erat et risus rhoncus commodo </h1>
  )
}
