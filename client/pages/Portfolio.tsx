import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink, ArrowRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      category: "Website Design & Development",
      description: "Complete redesign and redevelopment of an e-commerce platform resulting in 40% increase in conversions.",
      image: "🛍️",
      results: ["40% conversion increase", "50% faster load times", "Mobile-first design"],
    },
    {
      title: "AI-Powered Customer Support System",
      category: "AI Automation",
      description: "Implemented intelligent chatbot system reducing support tickets by 60% while improving customer satisfaction.",
      image: "🤖",
      results: ["60% ticket reduction", "24/7 availability", "70% cost savings"],
    },
    {
      title: "Financial SaaS Application",
      category: "Software & System Development",
      description: "Built a scalable financial management platform for a growing fintech startup with 50k+ users.",
      image: "💰",
      results: ["50k+ users", "99.9% uptime", "Industry-leading security"],
    },
    {
      title: "Brand Identity & Marketing Campaign",
      category: "Graphic Design & Digital Marketing",
      description: "Comprehensive rebrand with new visual identity and integrated digital marketing campaign.",
      image: "🎨",
      results: ["250% brand awareness", "35% sales growth", "5 awards won"],
    },
    {
      title: "Product Video Series",
      category: "Video Editing",
      description: "Produced high-quality product demo and explainer videos generating 500k+ views.",
      image: "🎬",
      results: ["500k+ views", "15% click-through rate", "Professional production"],
    },
    {
      title: "UX Redesign for Mobile App",
      category: "UI/UX Design",
      description: "Redesigned mobile app interface improving user retention by 45% and reducing churn.",
      image: "📱",
      results: ["45% retention increase", "4.8★ app rating", "User-centered design"],
    },
  ];

  const testimonials = [
    {
      quote: "SolutionGrid transformed our digital presence. The team delivered exceptional work at half the cost of other agencies.",
      author: "Sarah Johnson",
      title: "CEO, TechStartup Inc.",
    },
    {
      quote: "The AI automation solutions they implemented saved us thousands monthly. Highly recommend!",
      author: "Michael Chen",
      title: "Operations Director, Global Logistics",
    },
    {
      quote: "Professional, efficient, and results-driven. SolutionGrid is now our go-to agency partner.",
      author: "Emma Williams",
      title: "Marketing Manager, Fashion Retail Co.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Showcase of successful projects we've delivered for clients across industries. See what we can create for you.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-40 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                    {project.image}
                  </div>
                  <div className="p-6">
                    <p className="text-sm font-semibold text-primary mb-2">{project.category}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="space-y-2 mb-6">
                      {project.results.map((result, ridx) => (
                        <p key={ridx} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{result}</span>
                        </p>
                      ))}
                    </div>
                    <button className="text-primary font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition">
                      View Case Study
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">What Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200 hover:border-primary transition">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                  <p className="font-bold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">500+</p>
                <p className="text-gray-600">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">95%</p>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">$50M+</p>
                <p className="text-gray-600">Revenue Generated</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">15+</p>
                <p className="text-gray-600">Industries Served</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can create something amazing for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2">
                Get Free Consultation
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold">
                View Our Services
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
