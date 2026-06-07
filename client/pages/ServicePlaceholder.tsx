import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const ServicePlaceholder = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  const serviceMap: Record<string, { title: string; icon: string }> = {
    "software-and-system": { title: "Software & System Development", icon: "🚀" },
    "ai-automation": { title: "AI Automation", icon: "🤖" },
    "website-design": { title: "Website Design & Development", icon: "🌐" },
    "video-editing": { title: "Video Editing", icon: "🎬" },
    "digital-marketing": { title: "Digital Marketing", icon: "📈" },
    "ui-ux": { title: "UI/UX Design", icon: "🎨" },
    "graphic-design": { title: "Graphic Design", icon: "✨" },
    "content-development": { title: "Content Development", icon: "📝" },
  };

  const service = serviceMap[pathName] || { title: "Our Service", icon: "📌" };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">{service.title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              This page is ready to be enhanced with detailed service information, case studies, and testimonials.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
              <p className="text-blue-900 font-medium mb-3">📝 Coming Soon</p>
              <p className="text-blue-800 mb-4">
                Continue prompting us to add detailed content for this service page, including:
              </p>
              <ul className="list-disc list-inside text-blue-800 space-y-2 mb-4">
                <li>Service overview and capabilities</li>
                <li>Process and methodology</li>
                <li>Case studies and portfolio examples</li>
                <li>Team expertise and qualifications</li>
                <li>Pricing and package options</li>
                <li>Client testimonials and success metrics</li>
              </ul>
            </div>
            <div className="mt-12">
              <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-semibold flex items-center justify-center gap-2 mx-auto">
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePlaceholder;
