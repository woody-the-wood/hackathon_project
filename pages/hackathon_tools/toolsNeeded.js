import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

export default function ToolsNeeded() {
  return (
    <Layout home>
      <Head>
        <title>Tools Needed</title>
      </Head>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <Typography variant="h4">Tools Needed for Development</Typography>
          <p></p>
          <Typography variant="h5">Visual Studio Code:</Typography>
          <Typography variant="subtitle1">This will be where you actually write your code</Typography>
          <p></p>

          <Typography variant="h5">Github:</Typography>
          <Typography variant="subtitle1">This is how we will work together in tandem without stepping on each others code</Typography>
          <p></p>

          <Typography variant="h5">Postman:</Typography>
          <Typography variant="subtitle1">This is how you can quickly make a call to any API without writing the full javascript code</Typography>
          <p></p>

          <Typography variant="h5">NodeJS:</Typography>
          <Typography variant="subtitle1">This is the underlying code magic stuff to make your app work</Typography>
          <p></p>

          <Typography variant="h5">Discord:</Typography>
          <Typography variant="subtitle1">This is where we will communicate during the hackathon</Typography>
          <p></p>

          <Link href="/">
            <Button variant="contained">
              Home
            </Button> 
          </Link>
      </Box>
    </Layout>
  )
}
