import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper';
import Link from 'next/link'
import Head from 'next/head'
import FacebookIcon from 'react-icons/lib/fa/facebook-official'
import TwitterIcon from 'react-icons/lib/fa/twitter-square'
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square'
import GitHubIcon from 'react-icons/lib/fa/github'
import CodepenIcon from 'react-icons/lib/fa/codepen'


import EmailIcon from 'react-icons/lib/md/email'
//import Navigation from './Navigation'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Interface, sans-serif',
  display: 'inline-block'
}

const headerStyle = {
  height: 'auto',
  width: '100%',
  margin: '10, 10 ,10 , 10',
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const footerStyle = {
  fontColor: 'black',
  textDecoration: 'false',
  height: 'auto',
  width: '100%',
  margin: '10, 10 ,10 , 10',
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const Layout = (props) => (
  <div>
    <div>
      <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link href="https://rsms.me/interface/interface.css" rel="stylesheet" />
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
    </div>

    <div style={layoutStyle}>
      <MuiThemeProvider>
        <Paper style={headerStyle} zDepth={0} rounded={true}>
          <h3> cody.melton = [ code - contemplate - consult ] </h3>
          <h5> full-stack web developer / consultant / trainer</h5>
        </Paper>
      </MuiThemeProvider>

      {props.children}

      <MuiThemeProvider>
        <Paper style={footerStyle} zDepth={0} rounded={true}>
          <a href='https://www.facebook.com/cmcoding'> <FacebookIcon /> </a>
          <a href='https://www.twitter.com/cmeltonmt'> <TwitterIcon /> </a>
          <a href='https://www.facebook.com/cmcoding'> <LinkedInIcon /> </a>
          <a href='https://www.facebook.com/cmcoding'> <GitHubIcon /> </a>
          <a href='https://www.facebook.com/cmcoding'> <CodepenIcon /> </a>
          <a href='mailto: cody@codymelton.io'> <EmailIcon /> </a>
          <h6>Don't steal my stuff without giving credit or asking - it's not nice.</h6>
        </Paper>
      </MuiThemeProvider>

    </div>
  </div>
)

export default Layout
