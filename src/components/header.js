import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Link } from '@material-ui/core/'
import {
  Search as SearchIcon,
  AccountCircle as AccountCircleIcon,
  ShoppingCart as ShoppingCartIcon,
  Favorite as FavoriteIcon,
  MoreVert as MoreVertIcon,
  Store as StoreIcon 
} from '@material-ui/icons/'
import { blue } from '@material-ui/core/colors/'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  appBar: {
    backgroundColor: blue[400]
  },
  toolBar: {
    paddingLeft: '15%',
    paddingRight: '15%'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up(1922)]: {
      width: '70em'
    },
    [theme.breakpoints.down(1921)]: {
      width: '55em'
    },
    [theme.breakpoints.down(1681)]: {
      width: '45em'
    },
    [theme.breakpoints.down(1601)]: {
      width: '41em'
    },
    [theme.breakpoints.down(1367)]: {
      width: '31em'
    },
    [theme.breakpoints.down(1281)]: {
      width: '27em'
    },
    [theme.breakpoints.down(1153)]: {
      width: '22em'
    },
    [theme.breakpoints.down(1025)]: {
      width: '16em'
    },
    [theme.breakpoints.down(801)]: {
      width: '10em'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}))

export default function PrimarySearchAppBar () {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
    </Menu>
  )

  const mobileMenuId = 'primary-search-account-menu-mobile'
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          aria-label='show 0 products'
          color='inherit'
          href='/cart'
        >
          <Badge badgeContent={0} color='secondary'>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Link className={classes.link} href='/cart'> Cart </Link>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label='show 0 favourite'
          color='inherit'
          href='/favourite'
        >
          <Badge badgeContent={0} color='secondary'>
            <FavoriteIcon />
          </Badge>
        </IconButton>
        <Link className={classes.link} href='/favourite'>Favourite</Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label='account of current user'
          aria-controls='primary-search-account-menu'
          aria-haspopup='true'
          color='inherit'
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <AppBar position='fixed'>
        <Toolbar className={classes.toolBar}>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenuClose}
            color='inherit'
            href='/'
          >
            <StoreIcon />
          </IconButton>
          <Typography className={classes.title} variant='h6' noWrap>
            LoremIpsumShop
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label='show 0 products'
              color='inherit'
              href='/cart'
            >
              <Badge badgeContent={0} color='secondary'>
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              aria-label='show 1 favourites'
              color='inherit'
              href='/favourites'
            >
              <Badge badgeContent={1} color='secondary'>
                <FavoriteIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge='end'
              aria-label='account of current user'
              aria-controls={menuId}
              aria-haspopup='true'
              onClick={handleProfileMenuOpen}
              color='inherit'
            >
              <AccountCircleIcon />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label='show more'
              aria-controls={mobileMenuId}
              aria-haspopup='true'
              onClick={handleMobileMenuOpen}
              color='inherit'
            >
              <MoreVertIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  )
}
