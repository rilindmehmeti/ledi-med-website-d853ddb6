
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Magnet, Circle, Computer, Headphones } from "lucide-react";
import React from "react";

const PRODUCTS = [
  {
    name: "Magnetic Resonance",
    description: "Advanced imaging using magnetic fields and radio waves for precise diagnostics.",
    icon: Magnet,
  },
  {
    name: "Angiography",
    description: "Detailed vascular imaging for identifying blood vessel conditions.",
    icon: Circle,
  },
  {
    name: "Computed Tomography",
    description: "Cross-sectional images offering in-depth anatomical detail.",
    icon: Computer,
  },
  {
    name: "Ultrasound",
    description: "Non-invasive, real-time imaging using sound waves for various medical needs.",
    icon: Headphones,
  },
];

const ProductsSection = () => (
  <section id="products" className="w-full bg-soft-gray py-16 fade-in">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {PRODUCTS.map((p) => (
          <Card
            key={p.name}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition animate-scale-in flex flex-col items-center"
          >
            <CardHeader className="flex flex-col items-center justify-center">
              <div className="mb-2 bg-soft-purple/30 rounded-full p-3">
                <p.icon size={36} color="#4C7B4C" />
              </div>
              <CardTitle className="font-bold text-lg text-center">{p.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">{p.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
