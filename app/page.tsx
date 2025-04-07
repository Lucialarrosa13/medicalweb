import { Hero } from "@/components/hero"
import { SearchSection } from "@/components/search-section"
import { PopularSpecialties } from "@/components/popular-specialties"
import { TopDoctors } from "@/components/top-doctors"
import { HowItWorks } from "@/components/how-it-works"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <SearchSection />
      <PopularSpecialties />
      <TopDoctors />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </main>
  )
}

