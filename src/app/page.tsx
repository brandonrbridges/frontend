import {
  Cloud,
  ContentWithImages,
  ContentWithList,
  Footer,
  Header,
  Hero,
  Stats,
} from '@/components/Homepage'
import Pricing from '@/components/Pricing'

export default function Example() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <Header />

      <main className='isolate'>
        {/* Hero section */}
        <Hero />

        {/* Content section */}
        <ContentWithImages />

        {/* Stats */}
        <Stats />

        {/* Content section */}
        <ContentWithList />

        {/* Pricing */}
        <Pricing />

        {/* Logo cloud */}
        <Cloud />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
