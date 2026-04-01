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
      <section className="min-h-[70vh] flex items-center justify-center bg-void-glow py-20 px-6">
        <div className="max-w-md w-full text-center space-y-8">
          <img
            src={ludwikPhoto}
            alt="Ludwik Siadlak"
            className="w-32 h-32 rounded-full mx-auto object-cover object-top border-2 border-electric/30"
          />
          <h1 className="text-3xl md:text-4xl font-bold text-text-on-dark">
            OK, przyjąłem 🫡
          </h1>
          <p className="text-lg text-text-dim leading-relaxed">
            Nie będziesz otrzymywać treści na ten temat.
          </p>
          <p className="text-text-dim/70 text-base">
            Dziękuję, że jesteś!
            <br />
            <span className="italic">— Ludwik</span>
          </p>
        </div>
      </section>
    </Layout>
  );
}
