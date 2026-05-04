import { ROUTING_PUBLIC_DOMAIN } from '@/lib/routing';
import { JSON_LD_KNOWS_ABOUT } from '@/lib/seo/structured-data';

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${ROUTING_PUBLIC_DOMAIN}/#website`,
      url: ROUTING_PUBLIC_DOMAIN,
      name: 'Dominik Rubröder, Design Engineer',
      description:
        'Portfolio of Dominik Rubröder, a design engineer specialized in interface and design systems.',
      author: {
        '@id': `${ROUTING_PUBLIC_DOMAIN}/#person`
      }
    },
    {
      '@type': 'ProfilePage',
      '@id': `${ROUTING_PUBLIC_DOMAIN}/#profilepage`,
      url: ROUTING_PUBLIC_DOMAIN,
      name: 'Dominik Rubröder, UX Design Engineer',
      dateCreated: '2024-01-15',
      dateModified: '2026-04-27',
      isPartOf: {
        '@id': `${ROUTING_PUBLIC_DOMAIN}/#website`
      },
      mainEntity: {
        '@id': `${ROUTING_PUBLIC_DOMAIN}/#person`
      }
    },
    {
      '@type': 'Person',
      '@id': `${ROUTING_PUBLIC_DOMAIN}/#person`,
      name: 'Dominik Rubröder',
      givenName: 'Dominik',
      familyName: 'Rubröder',
      jobTitle: 'UX Design Engineer',
      description:
        'Design engineer crafting interactive interfaces, design systems, and creative front-end experiences.',
      url: ROUTING_PUBLIC_DOMAIN,
      image: {
        '@type': 'ImageObject',
        url: `${ROUTING_PUBLIC_DOMAIN}/avatar.jpg`,
        width: 800,
        height: 800
      },
      email: 'dominik.rubroeder@icloud.com',
      sameAs: [
        'https://github.com/dominikrubroeder',
        'https://linkedin.com/in/dominik-rubröder-49a63817b',
        'https://x.com/drubroeder'
      ],
      knowsAbout: JSON_LD_KNOWS_ABOUT,
      worksFor: {
        '@type': 'Organization',
        name: 'Dominik Rubröder',
        url: ROUTING_PUBLIC_DOMAIN
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'IU International University of Applied Sciences'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Selected Work',
      description:
        'Featured web design engineering projects by Dominik Rubröder.',
      url: ROUTING_PUBLIC_DOMAIN,
      numberOfItems: 8,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'Uvex'
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'Sautershop'
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'Value Booster'
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'HD+'
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'Segmüller'
        },
        {
          '@type': 'ListItem',
          position: 6,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'alles.auto Service Portal'
        },
        {
          '@type': 'ListItem',
          position: 7,
          url: ROUTING_PUBLIC_DOMAIN,
          name: "IU International University of Applied Sciences, Bachelor's Degree in Media Design"
        },
        {
          '@type': 'ListItem',
          position: 8,
          url: ROUTING_PUBLIC_DOMAIN,
          name: 'Loy GmbH'
        }
      ]
    }
  ]
};
