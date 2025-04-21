
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="w-full py-16 bg-white fade-in">
    <div className="max-w-5xl mx-auto px-4">
      <Card className="rounded-2xl shadow-lg px-6 pt-6 pb-8">
        <CardHeader>
          <CardTitle className="font-playfair text-2xl mb-2">Contact Us</CardTitle>
          <p className="text-gray-600">We'd love to hear from you! Reach out with questions or partnership opportunities.</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8 my-6">
            <div className="flex items-center gap-3">
              <MapPin className="text-vivid-purple" size={20} />
              <span className="text-gray-800">Str.28 Nentori, SU1/5, Prishtine 10000, Republika e Kosoves</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-vivid-purple" size={20} />
              <span className="text-gray-800">(383) 44 429 395</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-vivid-purple" size={20} />
              <span className="text-gray-800">arben.alushaj@ledimedks.com</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default ContactSection;
