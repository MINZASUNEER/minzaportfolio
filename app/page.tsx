import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { FeaturedWork } from '@/components/featured-work'
import { Capabilities } from '@/components/capabilities'
import { ToolsEducation } from '@/components/tools-education'
import { Process } from '@/components/process'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Stats />
      <FeaturedWork />
      <Capabilities />
      <ToolsEducation />
      <Process />
      <ContactFooter />
    </main>
  )
}
