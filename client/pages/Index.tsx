import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, Zap, Globe, Users, TrendingUp } from "lucide-react";

const Index = () => {
  const services = [
    {
      title: "Software & System Development",
      description:
        "Scalable, robust software solutions built with cutting-edge technology. From web applications to enterprise systems, we deliver excellence.",
      href: "/software-and-system",
      icon: "🚀",
    },
    {
      title: "AI Automation",
      description:
        "Transform your business with intelligent automation. Streamline workflows, reduce costs, and increase efficiency with AI-powered solutions.",
      href: "/ai-automation",
      icon: "🤖",
    },
    {
      title: "Website Design & Development",
      description:
        "Beautiful, responsive websites that convert. We combine stunning design with powerful functionality to create digital experiences that matter.",
      href: "/website-design",
      icon: "🌐",
    },
    {
      title: "Video Editing",
      description:
        "Professional video production and editing services. Create compelling visual content that engages your audience and tells your brand story.",
      href: "/video-editing",
      icon: "🎬",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that drive results. SEO, social media, content marketing, and more to grow your online presence.",
      href: "/digital-marketing",
      icon: "📈",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that delights. We create intuitive interfaces and experiences that users love and that drive business success.",
      href: "/ui-ux",
      icon: "🎨",
    },
    {
      title: "Graphic Design",
      description:
        "Visual identity that stands out. Logo design, branding, marketing materials, and more to make your brand memorable and recognizable.",
      href: "/graphic-design",
      icon: "✨",
    },
    {
      title: "Content Development",
      description:
        "High-quality content creation that resonates. Blogs, copywriting, product descriptions, and multimedia content tailored to your brand.",
      href: "/content-development",
      icon: "📝",
    },
  ];

  const benefits = [
    {
      title: "50%+ Cost Savings",
      description: "Save more than 50% compared to market-rate agency services without compromising quality.",
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
    },
    {
      title: "Free Consultation",
      description: "Get expert guidance with our complimentary consultation. Let's discuss your project needs.",
      icon: <Users className="w-8 h-8 text-primary" />,
    },
    {
      title: "Global Expertise",
      description: "International offices with highly skilled developers combined with AI-powered solutions.",
      icon: <Globe className="w-8 h-8 text-primary" />,
    },
    {
      title: "24/7 Support",
      description: "Dedicated support team ensuring your business runs smoothly all year round.",
      icon: <Zap className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Digital Transformation
                <span className="text-primary"> Partner</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Cutting-edge digital solutions from a world-class agency. AI-compatible, SEO-friendly, and built for success.
                Save 50%+ on agency services with our international team of expert developers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-red-600 transition font-semibold flex items-center justify-center gap-2">
                  Get Free Consultation
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-red-50 transition font-semibold">
                  View Our Work
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>AI-Compatible Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>SEO-Optimized</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Production-Ready</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose SolutionGrid?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your needs. From AI automation to creative design, we've got you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <Link
                  key={service.href}
                  to={service.href}
                  className="group bg-white p-6 rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free consultation today and discover how SolutionGrid can help you achieve your digital goals.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Schedule Free Consultation
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">40 Winsford Terrace, London, N18 1BS, UK</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                <a href="tel:+441234567890" className="text-primary hover:text-red-600 transition font-medium">
                  +44 07932 506226
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                <a href="mailto:support@solutiongrid.com" className="text-primary hover:text-red-600 transition font-medium">
                  support@solutiongrid.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
