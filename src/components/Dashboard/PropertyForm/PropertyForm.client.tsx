import { useRef, useState, useEffect } from 'react'

import { Row, TextInput } from '@/components/Form'

// Modules
import { Label } from 'recharts'
import Map from 'react-map-gl'

import { Controller } from 'react-hook-form'

export const PropertyMap = () => {
  return (
    <Map
      initialViewState={{
        latitude: 51.5074,
        longitude: 0.1278,
        zoom: 10,
      }}
      style={{ height: 200, width: '100%' }}
      mapStyle='mapbox://styles/mapbox/streets-v12'
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY}
    />
  )
}
