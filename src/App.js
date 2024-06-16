import React from 'react'
import Header from './components/Header'
import styled from 'styled-components'
import HeroSection from './components/HeroSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import BlogSection from './components/BlogSection'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Company from './components/Company'
import Cards from './components/Cards'
import UserSaying from './components/UserSaying'
import RecentBlogs from './components/RecentBlogs'
import Question from './components/Question'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'

const App = () => {
  return (
    <AppContainer>
      <Header />
      <HeroSection />
      <Company />
      <Features />
      <Cards />
      <Testimonials />
      <BlogSection />
      <FAQ />
      <UserSaying />
      <Banner />
      <RecentBlogs />
      <Question />
      <Banner2 />
      <Footer />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
font-family: 'Arial, sans-serif';
`