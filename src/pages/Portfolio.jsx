import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import portfolioData from '../data/portfolio.json';

const categories = ['Blinds', 'Ceilings', 'Partitions', 'Flooring', 'Decorating'];

const buildInquiryLink = (item) => {
  const params = new URLSearchParams({
    product: item.title,
    category: item.category,
    delivery: item.deliveryEstimate,
  });

  return `/contact?${params.toString()}`;
};

export default function Portfolio() {
  const [filter, setFilter] = useState('Blinds');
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    if (filter !== 'Blinds') {
      return [];
    }

    return portfolioData;
  }, [filter]);

  const currentProducts = filteredProducts.slice(0, visibleCount);
  const showComingSoon = filter !== 'Blinds';

  const loadMore = () => setVisibleCount((prev) => prev + 6);

  return (
    <div className="pt-24 min-h-screen bg-petal dark:bg-brand text-brand dark:text-petal transition-colors duration-300">
      <section className="relative py-24 px-6 text-center bg-[#f4dce5] dark:bg-[#321812]">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand dark:text-petal tracking-widest uppercase mb-6">
          Product<br /><span className="text-brand/50 dark:text-cocoa font-light">Portfolio</span>
        </h1>
        <div className="h-0.5 w-32 bg-brand dark:bg-petal mx-auto mb-6"></div>
        <p className="text-brand/65 dark:text-cocoa-soft max-w-3xl mx-auto text-base font-light leading-relaxed">
          Browse the blind systems we currently supply and install. This page now presents our active product range rather than completed project case studies.
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mb-12 px-6 mt-12 md:gap-x-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setVisibleCount(6);
              setSelectedProduct(null);
            }}
            className={`cursor-pointer border-b-2 pb-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
              filter === cat
                ? 'border-brand text-brand dark:border-petal dark:text-petal'
                : 'border-transparent text-brand/40 hover:text-brand dark:text-cocoa dark:hover:text-petal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="mx-auto max-w-[1600px] rounded-[2rem] bg-[#f8e7ed]/45 px-6 pb-24 dark:bg-[#321812]/35 md:px-12">
        {showComingSoon ? (
          <div className="flex min-h-[420px] items-center justify-center px-6 py-20 text-center">
            <div className="max-w-xl">
              <span className="mb-4 inline-block border border-brand/20 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-brand/60 dark:border-petal/20 dark:text-cocoa-soft">
                {filter}
              </span>
              <h2 className="mb-4 text-3xl font-serif text-brand dark:text-petal">Coming Soon</h2>
              <p className="text-sm leading-relaxed text-brand/60 dark:text-cocoa-soft">
                We&apos;re preparing this category for release. Current enquiries can still be sent through the contact page while the catalogue is being completed.
              </p>
            </div>
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence>
                {currentProducts.map((product) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45 }}
                    key={product.id}
                    className="group overflow-hidden rounded-xl border border-brand/15 bg-petal/40 shadow-xl hover:shadow-brand/20 dark:border-petal/15 dark:bg-brand-muted"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className="block w-full text-left"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-muted/95 via-brand/30 to-transparent opacity-90" />
                        <div className="absolute inset-x-0 bottom-0 p-8">
                          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-petal/70">{product.category}</span>
                          <h3 className="text-2xl font-serif text-petal">{product.title}</h3>
                        </div>
                      </div>
                    </button>

                    <div className="p-6">
                      <p className="min-h-[96px] text-sm leading-relaxed text-brand/65 dark:text-cocoa-soft">
                        {product.overview}
                      </p>

                      <div className="mt-5 rounded-lg border border-brand/12 bg-petal/45 p-4 dark:border-petal/12 dark:bg-[#43231b]">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-brand/45 dark:text-cocoa">
                          Estimated Delivery
                        </span>
                        <p className="text-sm font-medium text-brand dark:text-petal">{product.deliveryEstimate}</p>
                      </div>

                      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 border border-brand/30 px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-brand transition-colors hover:border-brand dark:border-petal/30 dark:text-petal dark:hover:border-petal"
                        >
                          View Details
                        </button>
                        <Link
                          to={buildInquiryLink(product)}
                          className="flex-1 bg-brand px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-petal transition-colors hover:bg-brand-light"
                        >
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>

            {visibleCount < filteredProducts.length && (
              <div className="mt-16 text-center">
                <button
                  onClick={loadMore}
                  className="px-8 py-4 border border-brand text-brand transition-all duration-300 uppercase tracking-widest text-xs font-bold hover:bg-brand hover:text-petal dark:border-petal dark:text-petal dark:hover:bg-petal dark:hover:text-brand"
                >
                  Load More Products
                </button>
              </div>
            )}
          </>
        )}
      </section>

      <Modal open={!!selectedProduct} onClose={() => setSelectedProduct(null)} center classNames={{ modal: 'max-w-5xl w-full p-0 overflow-hidden rounded-xl' }}>
        {selectedProduct && (
          <div className="flex max-h-[90vh] flex-col bg-petal transition-colors duration-300 dark:bg-brand-muted md:flex-row">
            <div className="h-72 w-full md:h-auto md:w-[45%]">
              <img src={selectedProduct.image} alt={selectedProduct.title} className="h-full w-full object-cover" />
            </div>
            <div className="w-full overflow-y-auto p-8 md:w-[55%] md:p-10">
              <span className="mb-3 block text-[11px] font-bold uppercase tracking-[0.24em] text-brand/50 dark:text-cocoa">
                {selectedProduct.category}
              </span>
              <h2 className="mb-4 text-3xl font-serif text-brand dark:text-cocoa-soft">{selectedProduct.title}</h2>
              <p className="mb-6 text-sm leading-relaxed text-brand/65 dark:text-cocoa-soft">{selectedProduct.overview}</p>

              <div className="mb-8 rounded-lg border border-brand/12 bg-petal/50 p-4 dark:border-petal/12 dark:bg-[#43231b]">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.22em] text-brand/45 dark:text-cocoa">
                  Estimated Delivery
                </span>
                <p className="text-sm font-medium text-brand dark:text-petal">{selectedProduct.deliveryEstimate}</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand dark:text-petal">Commonly Used At</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProduct.applications.map((item) => (
                    <span
                      key={item}
                      className="border border-brand/15 px-3 py-2 text-[11px] font-medium uppercase tracking-wide text-brand/70 dark:border-petal/15 dark:text-cocoa-soft"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand dark:text-petal">Key Specs &amp; Components</h3>
                <ul className="space-y-3">
                  {selectedProduct.materials.map((item) => (
                    <li key={item} className="flex items-start text-sm text-brand/65 dark:text-cocoa-soft">
                      <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-brand dark:bg-petal"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to={buildInquiryLink(selectedProduct)}
                  className="flex-1 bg-brand px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-petal transition-colors hover:bg-brand-light"
                  onClick={() => setSelectedProduct(null)}
                >
                  Inquire About This Product
                </Link>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 border border-brand/30 px-5 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-brand transition-colors hover:border-brand dark:border-petal/30 dark:text-petal dark:hover:border-petal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
