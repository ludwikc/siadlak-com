import Layout from "../components/layout/Layout";

export default function Terms() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-secondary via-luminous-white to-secondary dark:from-deep-space dark:via-deep-space dark:to-charcoal-night">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
                Regulamin Usług
              </h1>
              <p className="text-lg text-deep-charcoal/70 dark:text-silver-mist/70">
                Warunki korzystania z naszych usług
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-deep-charcoal dark:text-silver-mist">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Postanowienia ogólne</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Definicje</h2>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-semibold">Usługodawca</dt>
                    <dd>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Usługobiorca</dt>
                    <dd>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</dd>
                  </div>
                  <div>
                    <dt className="font-semibold">Regulamin</dt>
                    <dd>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</dd>
                  </div>
                </dl>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Zasady świadczenia usług</h2>
                <p>
                  Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Nisi ut aliquid ex ea commodi consequatur</li>
                  <li>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</li>
                  <li>Quam nihil molestiae consequatur, vel illum qui dolorem eum</li>
                  <li>Fugiat quo voluptas nulla pariatur</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Prawa i obowiązki stron</h2>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">4.1 Prawa Usługodawcy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Similique sunt in culpa qui officia deserunt mollitia animi</li>
                  <li>Id est laborum et dolorum fuga</li>
                  <li>Et harum quidem rerum facilis est et expedita distinctio</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">4.2 Obowiązki Usługobiorcy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nam libero tempore, cum soluta nobis est eligendi optio</li>
                  <li>Cumque nihil impedit quo minus id quod maxime placeat</li>
                  <li>Facere possimus, omnis voluptas assumenda est</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Odpowiedzialność</h2>
                <p>
                  Omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Warunki płatności</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nisi ut aliquip ex ea commodo consequat</li>
                  <li>Duis aute irure dolor in reprehenderit in voluptate</li>
                  <li>Velit esse cillum dolore eu fugiat nulla pariatur</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Rozwiązywanie sporów</h2>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Postanowienia końcowe</h2>
                <p>
                  Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.
                </p>
                <p>
                  Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Kontakt</h2>
                <p>
                  W sprawach związanych z niniejszym regulaminem prosimy o kontakt poprzez formularz kontaktowy dostępny na stronie internetowej lub pod adresem e-mail podanym w stopce strony.
                </p>
                <p className="mt-4 text-sm text-deep-charcoal/60 dark:text-silver-mist/60">
                  Regulamin obowiązuje od dnia jego publikacji na stronie internetowej.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}