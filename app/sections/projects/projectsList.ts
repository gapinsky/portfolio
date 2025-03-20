export const projectsList = [
  {
    title: "Rawg - copy",
    description:
      "I created a fully responsive application inspired by the RAWG.io platform, using the official RAWG API. The project was designed and built from the ground up, offering a modern interface with support for light and dark modes. The app features a game search with a dynamic list of suggestions, making it easy to quickly find titles of interest. The list of game genres is pulled directly from the API, and each category has its own dedicated sub-page. In order to optimise performance, unlimited scrolling of the games list (Infinite Scroll) has been implemented, allowing successive results to load smoothly. Clicking on a game tile takes the user to a detailed title page with information on platforms, publisher, age category and game rating. In addition, the user has access to a gallery of screenshots and gameplay footage in the form of a carousel, a list of similar titles and links to shops where the game can be purchased. A review chart showing the distribution of user opinions is generated based on community ratings. The app enables library and wishlist management, allowing users to add games and dynamically filter to quickly find items of interest. Thanks to modern technology and performance optimisation, the app provides a smooth and intuitive user experience.",
    image: "/thumbnails/rawgThumbnail.webp",
    tools: [
      "React",
      "Typescript",
      "Tailwind",
      "Shadcn",
      "React Query",
      "React Router",
      "Rest API",
      "Context API",
    ],
    link: "https://rawg-copy-gapinski.vercel.app/",
    github: "https://github.com/gapinsky/rawg-copy",
  },
  {
    title: "EverythingShop",
    description: `An e-commerce application built using FakeStoreAPI. API requests are handled with React Query. Each product category has its own subpage with a list of products and pagination. Products can be sorted by price (ascending or descending) or alphabetically.
       Each product has a dedicated subpage with more details and the option to add it to the cart. React Router is used for routing. The cart state is managed via a custom hook and shared between components using Context API.
        In the cart, users can adjust product quantities, remove items, and apply a discount code. The total cart value and product count are updated in real time. After completing a transaction, the app returns an array of product objects that were added to the cart.`,
    image: "/thumbnails/ecommerceThumbnail.webp",
    tools: [
      "React",
      "Typescript",
      "Tailwind",
      "React Query",
      "React Router",
      "Context API",
      "Rest API",
    ],
    link: "https://fake-store-b4pj.vercel.app/",
    github: "https://github.com/gapinsky/fake-store",
  },
  {
    title: "Kmtech-fix ",
    description:
      "A single-page application created for a real customer. The site is fully responsive and includes 4 sections: main, about us, services and contact. Contact form handling done with react-hook-form, validation - zod. Mail handling - emailJS. Animation using motion. Accordion components and reusable service cards displayed dynamically. The most difficult task for me was to design the application according to the client's guidelines, in order to do this I had to learn Figma, which I didn't know before. This project demonstrates my skills: building responsive web applications using React and Typescript, creating animations, styling using Tailwind, semantics, creating components, knowing JSX, dynamically displaying information, working with forms and working with customers. ",
    image: "/thumbnails/kmtechfixThumbnail.webp",
    tools: [
      "React",
      "Typescript",
      "Tailwind",
      "Motion",
      "Zod",
      "React Hook Form",
      "Figma",
      "EmailJS",
    ],
    link: "https://kmechfix.vercel.app/",
    github: "https://github.com/gapinsky/kmechfix",
  },
  {
    title: "Portfolio Website",
    description:
      "My first project built using nextJS. I chose nextJs because of the AcernityUi component library, which I really wanted to try out. Contact form handling done with react-hook-form, validation - zod. Mail handling - emailJS. I designed the look of the app myself in Figma. I think this is a valuable project demonstrating my ability to work with technologies that are new to me (nextJS), libraries (AcernityUI) and technical documentation.",
    image: "/thumbnails/portfolioThumbnail.webp",
    tools: [
      "NextJS",
      "Typescript",
      "Tailwind",
      "Motion",
      "AcernityUI",
      "Figma",
    ],
    link: "https://kmechfix.vercel.app/",
    github: "https://github.com/gapinsky/portfolio",
  },
];
