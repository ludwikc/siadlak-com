import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import ludwikPhoto from "@/assets/ludwikc-selfie.png";

export default function MailingMute() {
  return (
    <Layout>
      <SEO
        title="Wyciszono temat | Siadlak.com"
        description="Potwierdzenie wyciszenia tematu mailingu."
        noindex
      />
      <section className="min-h-[70vh] flex items-center bg-void-glow">
        <div className="container mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text - left */}
            <div className="space-y-6 text-center md:text-left py-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-on-dark">
                OK, przyjąłem 🫡
              </h1>
              <p className="text-lg md:text-xl text-text-dim leading-relaxed">
                Nie będziesz otrzymywać treści na ten temat.
              </p>
              <p className="text-text-dim/70 text-base md:text-lg">
                Dziękuję, że jesteś!
                <br />
                <span className="italic">— Ludwik</span>
              </p>
            </div>

            {/* Photo - right */}
            <div className="hidden md:flex justify-end">
              <img
                src={ludwikPhoto}
                alt="Ludwik Siadlak"
                className="max-h-[70vh] w-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
