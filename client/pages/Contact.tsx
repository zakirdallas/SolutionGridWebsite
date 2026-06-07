import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission - integrate with backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 via-gray-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Have questions? We'd love to hear from you. Get your free consultation today.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">40 Winsford Terrace</p>
                    <p className="text-gray-600">London, N18 1BS</p>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:+441234567890" className="text-primary hover:text-gray-900 transition">
                      +44 07932 506226
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:support@solutiongrid.com" className="text-primary hover:text-gray-900 transition">
                      support@solutiongrid.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                    <p className="text-gray-600">24/7 Support Available</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                          placeholder="+44 123 456 7890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-900 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                      >
                        <option value="">Select a service</option>
                        <option value="software">Software & System Development</option>
                        <option value="ai">AI Automation</option>
                        <option value="website">Website Design & Development</option>
                        <option value="video">Video Editing</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="ui-ux">UI/UX Design</option>
                        <option value="graphic">Graphic Design</option>
                        <option value="content">Content Development</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "What is the typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. Typically, we provide a detailed timeline during the free consultation. Most projects range from 4 weeks to 6 months.",
                },
                {
                  q: "Do you offer ongoing support after project completion?",
                  a: "Yes! We offer various support packages including maintenance, updates, and enhancements. We're committed to your long-term success.",
                },
                {
                  q: "How do you ensure quality and security?",
                  a: "We follow industry best practices, conduct thorough testing, implement security protocols, and use modern development standards. All code is reviewed before delivery.",
                },
                {
                  q: "What is your pricing model?",
                  a: "We offer flexible pricing models including fixed-price projects, time & materials, and retainer arrangements. We're transparent about costs and provide detailed estimates upfront.",
                },
                {
                  q: "Can you work with our existing technology stack?",
                  a: "Absolutely! We have expertise across multiple technologies and platforms. We can integrate seamlessly with your existing systems.",
                },
                {
                  q: "How do I get started?",
                  a: "Simply contact us or request a free consultation. We'll discuss your needs, provide recommendations, and outline next steps.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule your free consultation with our team today.
            </p>
            <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg">
              Get Free Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
