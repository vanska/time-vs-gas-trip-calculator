import React from 'react'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import { CarSelection } from '../components/CarSelection/CarSelection'
import { DistanceSelector } from '../components/DistanceSelector/DistanceSelector'
import { SpeedSelector } from '../components/SpeedSelector/SpeedSelector'
import { Results } from '../components/Results/Results'

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Time vs. Gas trip calculator" />
      <CarSelection />
      <DistanceSelector />
      <SpeedSelector />
      <Results />
    </Layout>
  )
}

export default IndexPage
