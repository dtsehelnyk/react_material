import React from 'react'

import { Nav } from '../../components/Nav/Nav'
import { AppBar, Typography, Toolbar, Box} from '@material-ui/core'

export const Header = () => {

  return (
    <div>
      <AppBar>
        <Toolbar variant="dense">
          <Nav />
        </Toolbar>
      </AppBar>
    </div>
  )
}
