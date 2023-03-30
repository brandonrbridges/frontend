import {
  Cloud,
  ContentWithImages,
  ContentWithList,
  Footer,
  Header,
  Hero,
  Stats,
} from '@/components/Homepage'

export default function Example() {
  return (
    <div className='bg-white'>
      {/* Header */}
      <Header />

      <main className='isolate'>
        {/* Hero section */}
        <Hero />

        {/* Timeline section */}

        {/* Logo cloud */}
        <Cloud />

        {/* Content section */}
        <ContentWithImages />

        {/* Stats */}
        <Stats />

        {/* Content section */}
        <ContentWithList />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
