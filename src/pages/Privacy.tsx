import Layout from "../components/layout/Layout";

export default function Privacy() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-secondary via-luminous-white to-secondary dark:from-deep-space dark:via-deep-space dark:to-charcoal-night">
        <div className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
                Polityka Prywatności
              </h1>
              <p className="text-lg text-deep-charcoal/70 dark:text-silver-mist/70">
                Informacje o przetwarzaniu danych osobowych
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-deep-charcoal dark:text-silver-mist">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Informacje ogólne</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Administrator danych</h2>
                <p>
                  Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
                  <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
                  <li>Incidunt ut labore et dolore magnam aliquam quaerat voluptatem</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Rodzaje przetwarzanych danych</h2>
                <p>
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                </p>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Podstawy prawne przetwarzania</h2>
                <p>
                  Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Cele przetwarzania danych</h2>
                <p>
                  Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
                  <li>Ut aut reiciendis voluptatibus maiores alias consequatur</li>
                  <li>Aut perferendis doloribus asperiores repellat</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Odbiorcy danych</h2>
                <p>
                  Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Okres przechowywania danych</h2>
                <p>
                  Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Prawa osób, których dane dotyczą</h2>
                <p>
                  Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prawo dostępu do danych osobowych</li>
                  <li>Prawo do sprostowania danych</li>
                  <li>Prawo do usunięcia danych</li>
                  <li>Prawo do ograniczenia przetwarzania</li>
                  <li>Prawo do przenoszenia danych</li>
                  <li>Prawo do sprzeciwu</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Kontakt</h2>
                <p>
                  W sprawach związanych z polityką prywatności oraz przetwarzaniem danych osobowych, prosimy o kontakt poprzez formularz kontaktowy dostępny na stronie internetowej.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}