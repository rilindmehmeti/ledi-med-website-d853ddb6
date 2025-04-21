
import { Phone, Mail, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => (
  <section id="contact" className="w-full py-16 bg-white fade-in">
    <div className="max-w-5xl mx-auto px-4">
      <Card className="rounded-2xl shadow-lg px-6 pt-6 pb-8">
        <CardHeader>
          <CardTitle className="font-playfair text-2xl mb-2">Contact Us</CardTitle>
          <p className="text-gray-600">We'd love to hear from you! Reach out with questions or partnership opportunities.</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="text-vivid-purple" size={20} />
                <span className="text-gray-800">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-vivid-purple" size={20} />
                <span className="text-gray-800">info@oasismedical.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="text-vivid-purple" size={20} />
                <span className="text-gray-800">123 Healthcare Way, City, Country</span>
              </div>
            </div>
            {/* Simple contact form (no backend) */}
            <form className="space-y-4">
              <Input className="rounded" placeholder="Your Name" required />
              <Input className="rounded" placeholder="Your Email" type="email" required />
              <Textarea className="rounded" placeholder="Your Message" required />
              <Button className="w-full bg-vivid-purple text-white font-semibold rounded-full hover:bg-primary">
                Send Message
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ContactSection;
