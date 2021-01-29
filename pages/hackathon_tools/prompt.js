import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import React from 'react'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

export default function Prompt() {
  return (
    <Layout home>
      <Head>
        <title>Prompt</title>
      </Head>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <p>We want to compare the legislation in congress to what the constiuents are saying is important to them.</p>
          <p>To accomplish this, we want to create a website that is free for all people to use to easily display the data we are comparing.</p>
          <p>
          </p>
          <Link href="/">
            <Button variant="contained">
                Home
            </Button>
          </Link>
      </Box>
    </Layout>
  )
}
