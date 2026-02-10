export interface FeaturedEventItem {
  id: string;
  title: string;
  date: string;
  shortDescription: string;
  image: string;
  location?: string;
  tag: string;
}

export const featuredEvents: FeaturedEventItem[] = [
  {
    id: "fe-1",
    title: "Pakistan Business Summit @ Davos 2025",
    date: "20–24 January 2025",
    shortDescription:
      "High-level sideline summit during the World Economic Forum week in Davos, focusing on bilateral trade, investment, and Pakistan's economic transformation and strategic partnerships.",
    image: "/image/eventgallery/event-1.jpg",
    location: "Davos, Switzerland",
    tag: "Summit",
  },
  {
    id: "fe-2",
    title: "UK–Pakistan Business Summit 2025",
    date: "21–22 November 2025",
    shortDescription:
      "Flagship bilateral business summit in London with plenary sessions, sector panels, and B2B meetings. Focus on technology, manufacturing, energy, and services.",
    image: "/image/eventgallery/event-2.jpg",
    location: "London, United Kingdom",
    tag: "Summit",
  },
  {
    id: "fe-3",
    title: "DHA Peshawar UK Road Show 2025",
    date: "4–10 May 2025",
    shortDescription:
      "Diaspora investment roadshow connecting UK-based investors with development opportunities across London, Birmingham, Manchester, and Slough.",
    image: "/image/eventgallery/event-3.jpg",
    location: "London, Birmingham, Manchester, Slough",
    tag: "Delegation",
  },
  {
    id: "fe-4",
    title: "Global Business Leadership Forum",
    date: "2025",
    shortDescription:
      "Bringing together global business leaders for dialogue on UK–Pakistan technology and trade, showcasing investment opportunities and sustainable growth.",
    image: "/image/eventgallery/event-4.jpg",
    tag: "Featured",
  },
  {
    id: "fe-5",
    title: "Inspiring Pakistan at Davos Pavilion",
    date: "20–24 January 2025",
    shortDescription:
      "Pakistan Pavilion at the World Economic Forum highlighting the nation's strengths, resilience, and investment opportunities to international leaders and entrepreneurs.",
    image: "/image/events/Pakistan-Business-Summit-Davos-2025.jpg",
    location: "Davos, Switzerland",
    tag: "Summit",
  },
  {
    id: "fe-6",
    title: "Single Country Expo 2025",
    date: "April 2025",
    shortDescription:
      "Month-long expo at Pakistan House Manchester facilitating meetings between Pakistani businesses and UK distributors, organised with the Pak-UK Business Council.",
    image: "/image/past-events/1ev.jpg",
    location: "Pakistan House, Manchester, United Kingdom",
    tag: "Expo",
  },
  {
    id: "fe-7",
    title: "UK–Pakistan Tech & Export Strategies Webinar",
    date: "15 January 2025",
    shortDescription:
      "Export and marketing strategies for the UK market: webinar for Pakistani businesses on entering and scaling in the UK technology and trade landscape.",
    image: "/image/past-events/2ev.jpg",
    tag: "Webinar",
  },
  {
    id: "fe-8",
    title: "UK–Pakistan Technology Partnership Conference",
    date: "2024",
    shortDescription:
      "Conference strengthening technology partnerships and innovation ties between the UK and Pakistan, with sessions on digital trade and startup ecosystems.",
    image: "/image/past-events/4ev.jpg",
    location: "United Kingdom",
    tag: "Conference",
  },
  {
    id: "fe-9",
    title: "Leaders in Islamabad – UK Pakistan Dialogue",
    date: "2024",
    shortDescription:
      "High-level dialogue in Islamabad bringing together UK and Pakistani leaders to advance bilateral technology, trade, and investment collaboration.",
    image: "/image/past-events/5ev.jpg",
    location: "Islamabad, Pakistan",
    tag: "Dialogue",
  },
];
