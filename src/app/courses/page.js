import PageHeader from "../../components/layout/PageHeader";
import CoursesInteractiveView from "../../components/courses/CoursesInteractiveView";

export const metadata = {
  title: "Courses & Training | Industrial Automation & Building Management Systems",
  description:
    "Explore Technotiq's certified engineering programs across Industrial Automation (PLC, SCADA, HMI, Panel Design) and Building Management Systems (BMS, HVAC, CCTV).",
};

export default function CoursesPage() {
  return (
    <div>
      <PageHeader
        title="Technical Training"
        highlight="Academy"
        description="Master Industrial Automation and Building Management Systems through 100% hands-on laboratory time on live industrial hardware test benches."
        breadcrumbs={[{ name: "Courses" }]}
      />

      {/* Interactive Courses Catalog with Section 1 (Industrial), Section 2 (BMS), Cohorts & Compact Enquiry Desk */}
      <CoursesInteractiveView />
    </div>
  );
}
