import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const ServicePlaceholder = () => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

  const serviceMap: Record<string, { title: string; icon: string; description: string; features: string[] }> = {
    "software-and-system": {
      title: "Software & System Development",
      icon: "🚀",
      description:
        "We build scalable, robust software solutions tailored to your business needs. From web applications to enterprise systems, our expert developers create technology that drives growth.",
      features: ["Custom software development", "System architecture & design", "Full-stack development", "API development", "Database optimization", "Cloud deployment"],
    },
    "ai-automation": {
      title: "AI Automation",
      icon: "🤖",
      description:
        "Transform your operations with intelligent automation. We implement AI-powered solutions that streamline processes, reduce costs, and unlock new business opportunities.",
      features: ["Process automation", "Intelligent chatbots", "Machine learning models", "Workflow optimization", "Data analysis & insights", "AI integration"],
    },
    "website-design": {
      title: "Website Design & Development",
      icon: "🌐",
      description:
        "Beautiful, responsive websites that convert visitors into customers. We combine stunning design with powerful functionality to create digital experiences that matter.",
      features: ["Responsive design", "E-commerce solutions", "CMS integration", "SEO optimization", "Performance tuning", "Security implementation"],
    },
    "video-editing": {
      title: "Video Editing",
      icon: "🎬",
      description:
        "Professional video production and editing services that bring your story to life. Create compelling visual content that engages your audience and amplifies your message.",
      features: ["Video editing & production", "Motion graphics", "Color grading", "Sound design", "Subtitle creation", "Format optimization"],
    },
    "digital-marketing": {
      title: "Digital Marketing",
      icon: "📈",
      description:
        "Strategic digital marketing campaigns that drive measurable results. From SEO to social media, we optimize every channel to maximize your ROI.",
      features: ["SEO strategy", "Content marketing", "Social media management", "PPC campaigns", "Email marketing", "Analytics & reporting"],
    },
    "ui-ux": {
      title: "UI/UX Design",
      icon: "🎨",
      description:
        "User-centered design that delights. We create intuitive, beautiful interfaces that users love and that drive business success through superior user experiences.",
      features: ["User research", "Wireframing & prototyping", "Interface design", "Usability testing", "Design systems", "Interactive prototypes"],
    },
    "graphic-design": {
      title: "Graphic Design",
      icon: "✨",
      description:
        "Visual identity that stands out and resonates with your audience. We create compelling graphics that tell your brand story and make a lasting impression.",
      features: ["Logo design", "Brand guidelines", "Marketing collateral", "Packaging design", "Illustrations", "Print & digital assets"],
    },
    "content-development": {
      title: "Content Development",
      icon: "📝",
      description:
        "High-quality content creation that engages and converts. From blogs to product descriptions, we craft compelling narratives tailored to your audience.",
      features: ["Blog writing", "Copywriting", "Technical writing", "Product descriptions", "Case studies", "Content strategy"],
    },
  };

  const service = serviceMap[pathName] || {
    title: "Our Service",
    icon: "📌",
    description: "Explore our comprehensive service offerings.",
    features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5", "Feature 6"],
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">{service.title}</h1>
            </div>
          </div>
        </section>

        {/* Service Content - Split Layout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              {/* Left Column - Text Content */}
              <div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">{feature}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <button className="bg-primary text-white px-8 py-4 rounded-lg hover:opacity-90 transition font-semibold flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-6">{service.icon}</div>
                    <p className="text-gray-600 text-lg font-medium">{service.title}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Service Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Our {service.title}?</h2>
            <div className="space-y-4">
              {[
                "Expert team with proven track record",
                "Cost-effective solutions without compromising quality",
                "Tailored approach to your specific needs",
                "Transparent communication throughout",
                "24/7 support and maintenance",
                "Latest technology and best practices",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your free consultation and let's discuss how we can help your business thrive.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Schedule Free Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePlaceholder;
