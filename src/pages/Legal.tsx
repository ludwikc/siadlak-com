
import React from 'react';
import Layout from '../components/layout/Layout';
import { Separator } from "@/components/ui/separator";

export default function Legal() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
            Informacje Prawne
          </h1>
          
          <Separator className="my-6" />
          
          <div className="prose max-w-none dark:prose-invert">
            <h2>Lorem Ipsum Dolor Sit Amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis.
            </p>
            
            <h2>Pellentesque Dapibus Efficitur</h2>
            <p>
              Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna.
            </p>
            
            <h3>Fusce Dui Lectus</h3>
            <p>
              Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis.
            </p>
            
            <h2>Nam Lacinia Pulvinar</h2>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Nam lacinia pulvinar tortor nec facilisis.</li>
              <li>Pellentesque dapibus efficitur laoreet.</li>
              <li>Nam risus ante, dapibus a molestie consequat, ultrices ac magna.</li>
              <li>Fusce dui lectus, congue vel laoreet ac, dictum vitae odio.</li>
            </ul>
            
            <h2>Donec Aliquet</h2>
            <p>
              Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio.
            </p>
            
            <h3>Ultrices Ac Magna</h3>
            <p>
              Ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis.
            </p>
            
            <h2>Consectetur Adipiscing Elit</h2>
            <p>
              Consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet. Nam risus ante, dapibus a molestie consequat, ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            
            <h3>Dapibus A Molestie</h3>
            <p>
              Dapibus a molestie consequat, ultrices ac magna. Fusce dui lectus, congue vel laoreet ac, dictum vitae odio. Donec aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia pulvinar tortor nec facilisis. Pellentesque dapibus efficitur laoreet.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
