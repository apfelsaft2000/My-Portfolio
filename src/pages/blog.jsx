import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import GitHubIcon from '@mui/icons-material/GitHub'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../atom/header'
import MainFeaturedPost from '../atom/mainFeaturedPost'
// import FeaturedPost from './FeaturedPost'
// import Main from '../molecules/main'
import Sidebar from '../atom/sidebar'
import Footer from '../atom/footer'
// import post1 from './blog-post.1.md'
// import post2 from './blog-post.2.md'
// import post3 from './blog-post.3.md'

const sections = [
  { title: 'about', url: '#' },
  { title: 'works', url: '#' },
  { title: 'contact', url: '#' },
]

const mainFeaturedPost = {
  title: 'about',
  description: 'hogehoge',
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
// ]

// const posts = [post1, post2, post3]

const sidebar = {
  title: 'About',
  description: 'hogehoge',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [{ name: 'GitHub', icon: GitHubIcon }],
}

const theme = createTheme()

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="The Tech Gallery of H.K." sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="" />
    </ThemeProvider>
  )
}
