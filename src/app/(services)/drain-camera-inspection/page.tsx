import { Metadata } from "next";
import { CameraInspectionClient } from "./camera-inspection-client";

export const metadata: Metadata = {
  title: "Professional Drain Camera Inspection Services",
  description: "Professional drain inspection services & sewer inspection near you. Accurate video camera drain inspection for homes & commercial sites. 24/7 nationwide across USA. Get fast help!",
  alternates: {
    canonical: "https://www.draincleaningnearme.us/drain-camera-inspection",
  },
};

export default function CameraInspectionPage() {
  return <CameraInspectionClient />;
}
