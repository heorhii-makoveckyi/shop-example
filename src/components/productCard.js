import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  Avatar,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@material-ui/core/'

import { red } from '@material-ui/core/colors'
import { Favorite, ShoppingCart } from '@material-ui/icons/'

const paddingCoef = 0.01041666
const padding = window.innerWidth * paddingCoef
const cardWidth = window.innerWidth / 6 - padding

const useStyles = theme => ({
  root: {
    marginLeft: '1px',
    marginBottom: 5,
    maxWidth: cardWidth,
    maxHeight: '550px'
  },
  media: {
    height: 140
  },
  avatar: {
    backgroundColor: red[500]
  }
})

class ProductCard extends React.Component {
  constructor (props) {
    super(props)
    this.title = props.title
    this.image = props.image
    this.content = props.content
  }

  render () {
    const { classes } = this.props
    const { title, image, content } = this

    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label='recipe' className={classes.avatar}>
              Stephen Hawking
            </Avatar>
          }
          title={title}
          subheader='September 14, 2020'
        />
        <CardActionArea href='/'>
          <CardMedia
            className={classes.media}
            image={image}
          />
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <Favorite />
          </IconButton>
          <IconButton aria-label='share'>
            <ShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(useStyles)(ProductCard)
