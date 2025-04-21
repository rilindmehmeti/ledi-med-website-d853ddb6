
import React, { useState } from "react";
import { removeBackgroundFromImageUrl } from "@/utils/removeBackground";

const LOGO_PATH = "/lovable-uploads/28b69a0a-cf1e-4b53-8f67-6bbef8346284.png";

const HeroSection = () => {
  const [transparentImg, setTransparentImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState<string | null>(null);

  const handleRemoveBG = async () => {
    setLoading(true);
    setFailed(null);
    setTransparentImg(null);
    try {
      const res = await removeBackgroundFromImageUrl(LOGO_PATH);
      setTransparentImg(res);
    } catch (err) {
      setFailed("Failed to remove background. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // "Admin" UI: show the button only if running locally or the deployed site (we can't actually check if it's you)
  const isTesting = typeof window !== "undefined" &&
    (window.location.hostname === "localhost" || window.location.hostname.endsWith(".lovable.app"));

  return (
    <section className="relative py-20 bg-gradient-to-br from-soft-blue via-white to-soft-gray flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center">
        {isTesting && (
          <div className="mb-4 flex flex-col gap-2 items-center">
            <button
              type="button"
              className="px-4 py-2 bg-vivid-purple text-white rounded shadow hover:bg-primary transition"
              onClick={handleRemoveBG}
              disabled={loading}
            >
              {loading ? "Processing..." : "Remove Logo Background"}
            </button>
            {failed && <span className="text-red-500">{failed}</span>}
          </div>
        )}
        <img 
          src={transparentImg || LOGO_PATH}
          alt="Ledi Med Logo"
          className="max-w-xs mx-auto fade-in"
          style={{ maxHeight: '280px', objectFit: 'contain' }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
