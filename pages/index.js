import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Link from 'next/link'

export default function Home() {
  return (
    <React.Fragment>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
      </Layout>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <p>
            Welcome to the hackathon! Click the buttons below to find instructions on how to get started.
          </p>
          <p></p>
        <Box display="flex" justifyContent="space-evenly" width="45%">
          <Link href="hackathon_tools/prompt">
            <Button variant="contained">
              Hackathon prompt
            </Button>
          </Link>
          <Link href="hackathon_tools/toolsNeeded">
            <Button variant="contained">
              Tools Needed
            </Button>
          </Link>
          <Link href="https://github.com/jstanford2013/ForThePeople">
            <Button variant="contained">
              Github Link
            </Button>
          </Link>
          </Box>
       </Box>
    </React.Fragment>
  )
}
