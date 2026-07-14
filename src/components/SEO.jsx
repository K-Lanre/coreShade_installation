import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteName = 'Coreshade Installation';
const defaultDescription = 'Commercial interior fit-out, blind supply, and installation services for offices, residential developments, and project teams across the UK.';

const routeMeta = {
  '/': {
    title: `${siteName} | Commercial Interior Fit-Out & Blinds UK`,
    description: 'Commercial blind supply, installation, and fit-out support for modern offices, hospitality spaces, and residential interiors across the UK.',
  },
  '/about': {
    title: `About | ${siteName}`,
    description: 'Learn about Coreshade Installation, our fit-out approach, and the interior solutions we deliver for commercial and residential projects in the UK.',
  },
  '/services': {
    title: `Services | ${siteName}`,
    description: 'Explore commercial blind supply, professional installation, project coordination, and future fit-out services from Coreshade Installation.',
  },
  '/portfolio': {
    title: `Portfolio | ${siteName}`,
    description: 'Browse blind systems and interior product options from Coreshade Installation, including practical solutions for privacy, glare control, and comfort.',
  },
  '/process': {
    title: `Process | ${siteName}`,
    description: 'See how Coreshade Installation manages consultation, site review, supply, installation, and project handover for UK interior projects.',
  },
  '/contact': {
    title: `Contact | ${siteName}`,
    description: 'Contact Coreshade Installation for quotations, blind specifications, fit-out planning, and installation support for projects across the UK.',
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SEO() {
  const location = useLocation();

  useEffect(() => {
    const meta = routeMeta[location.pathname] || {
      title: siteName,
      description: defaultDescription,
    };

    const origin = window.location.origin;
    const canonicalUrl = `${origin}${location.pathname}`;
    const imageUrl = `${origin}/logo.png`;

    document.title = meta.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: meta.description,
    });

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow',
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: siteName,
    });

    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'en_GB',
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: meta.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: meta.description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: imageUrl,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: meta.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: meta.description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: imageUrl,
    });

    upsertLink('canonical', canonicalUrl);
  }, [location.pathname]);

  return null;
}
