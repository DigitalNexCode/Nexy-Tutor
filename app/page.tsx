import { Button } from '@/components/ui/button'
import React from 'react'
import CompanionCard from '@/components/CompenionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
          id='123'
          name='Countsy the Number Wizard'
          topic='Derivatives & Integrals'
          duration={45}
          color='#FFDA6E'
          subject='Maths'
        />
        <CompanionCard 
          id='124'
          name='Neura the Brainy Explorer'
          topic='Neural Network of the Brain'
          duration={30}
          color='#E5D0FF'
          subject='Science'
        />
        <CompanionCard
          id='125'
          name='Verba the Vocabulary Builder'
          topic='language'
          duration={60}
          color='#BDE7FF'
          subject='English'
        />
      </section>

      <section className='home-section'>
        <CompanionsList 
          title="Recently Completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page