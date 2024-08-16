import React from 'react'

import { Endpoint } from '../partials/Docs/Endpoint'
import { Header } from '../partials/Docs/Header'
import { endpoints } from '../data/endpoints'

export const Docs = () => {
  return (
    <>
      <Header />
      <Endpoint endpoints={endpoints} />
    </>
  )
}
