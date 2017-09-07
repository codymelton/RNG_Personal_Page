import React from 'react'
import Paper from 'material-ui/Paper'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Layout from '../components/MyLayout.js'

const style = {
  height: 300,
  width: 300,
  margin: 10,
  textAlign: 'center',
  overflow: 'hidden'
}

const Headshot ={
  maxWidth: '100%',
  maxHeight: '100%',
  position: 'relative',
}

export default () => (
  <Layout>
    <MuiThemeProvider>
      <Paper style={style}
             zDepth={2}
             circle={true}>
        <img style={Headshot} src="/static/images/me.jpg" />
      </Paper>
    </MuiThemeProvider>
  </Layout>
)
