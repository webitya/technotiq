import PageHeader from "../../../components/layout/PageHeader";
import CourseCatalog from "../../../components/courses/CourseCatalog";

export const metadata = {
  title: "Building Management System (BMS) Courses | HVAC Automation & CCTV Training",
  description:
    "Explore Technotiq's certified Building Management System programs: Diploma In Building Management System, Certified BMS Engineer, CCTV & Security Systems, and CCTV Training.",
};

export default function BuildingManagementSystemCategoryPage() {
  return (
    <div>
      <PageHeader
        title="Building Management System"
        highlight="Training Tracks"
        description="Commercial building automation, environmental control, and mission-critical physical security. Master Honeywell & Schneider BACnet DDC commissioning and optical fiber IP CCTV surveillance."
        breadcrumbs={[
          { name: "Courses", href: "/courses" },
          { name: "Building Management System" },
        ]}
      />

      <section className="py-10 sm:py-14 lg:py-16 bg-white font-normal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseCatalog initialCategory="building-management-system" />
        </div>
      </section>
    </div>
  );
}
