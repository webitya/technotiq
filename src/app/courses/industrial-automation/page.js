import PageHeader from "../../../components/layout/PageHeader";
import CourseCatalog from "../../../components/courses/CourseCatalog";

export const metadata = {
  title: "Industrial Automation Courses | PLC, SCADA, Panel Designing Training",
  description:
    "Explore Technotiq's specialized Industrial Automation programs: Automation System Engineer, Advanced Automation System Professional, Advanced PLC Program Professional, and Electrical Control & Panel Designing.",
};

export default function IndustrialAutomationCategoryPage() {
  return (
    <div>
      <PageHeader
        title="Industrial Automation"
        highlight="Training Tracks"
        description="Comprehensive plant automation and electrical control systems engineering. Master 24VDC wiring, Siemens & Allen-Bradley PLC programming, SCADA supervisory mimics, and panel fabrication."
        breadcrumbs={[
          { name: "Courses", href: "/courses" },
          { name: "Industrial Automation" },
        ]}
      />

      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseCatalog initialCategory="industrial-automation" />
        </div>
      </section>
    </div>
  );
}
