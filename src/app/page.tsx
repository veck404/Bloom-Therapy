import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { ClinicIntro } from "@/components/sections/clinic-intro";
import { ServicesGrid } from "@/components/sections/services-grid";
import { TherapistsSection } from "@/components/sections/therapists-section";
import { Testimonials } from "@/components/sections/testimonials";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <div className="bg-bloom-blush text-bloom-plum">
      <SiteHeader />
      <main>
        <Hero />
        <ClinicIntro />
        <ServicesGrid />
        <TherapistsSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  );
}
