// Auth
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

// Helpers
import { fetcher } from '@/helpers'

// Components
import { PageNavigation } from '@/components/Dashboard'

export const metadata = {
  title: 'Hello Home',
  description: 'The next-generation property management platform',
}

async function getData(id) {
  const { user } = await getServerSession(authOptions)

  const property = await fetcher.GET(`/properties/${id}`, {
    user_id: user._id,
  })

  return { property }
}

export default async function PropertyLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { id: string }
}) {
  const { property } = await getData(params.id)

  return (
    <>
      <div className='space-y-6'>
        <h2 className='font-bold text-white text-4xl'>{property.address.line_1}</h2>
        <PageNavigation id={property._id} params={params} />
      </div>

      {children}
    </>
  )
}
