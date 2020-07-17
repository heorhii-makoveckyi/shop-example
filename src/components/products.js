import React from 'react'
import ProductCard from './productCard'

import { withStyles } from '@material-ui/core/styles'

import { getProductsCount, getProductContent, getProductTitle, getProductImage } from '../dbqueries/getProductsData'

const paddingCoef = 0.01041666
const padding = window.innerWidth * paddingCoef / 2

const useStyles = () => ({
  root: {
    paddingTop: '5%',
    paddingLeft: padding,
    // paddingRigh: padding,
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
})

class Products extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      images: [],
      contents: [],
      titles: []
    }
  }

  async componentDidMount () {
    const count = getProductsCount()

    const images = []
    const contents = []
    const titles = []

    for (let i = 0; i < count; ++i) {
      images.push(getProductImage(i))
      contents.push(await getProductContent())
      titles.push(await getProductTitle())
    }

    this.setState({
      images: images,
      contents: contents,
      titles: titles
    })
  }

  render () {
    const { classes } = this.props
    const { images, contents, titles } = this.state

    return (
      <div className={classes.root}>
        {images.map((image, i) => {
          return (
            <ProductCard key={i} image={image} content={contents[i]} title={titles[i]} />
          )
        })}
      </div>
    )
  }
}

export default withStyles(useStyles)(Products)
