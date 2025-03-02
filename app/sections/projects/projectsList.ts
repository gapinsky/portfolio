export const projectsList = [
  {
    title: "Kmtech-fix - SPA",
    description:
      "A one-page application created for a real customer. The site is fully responsive and includes 4 sections: main, about us, services and contact. Contact form handling done with react-hook-form, validation - zod. Mail handling - emailJS. Animation using motion. Accordion components and reusable service cards displayed dynamically. The most difficult task for me was to design the application according to the client's guidelines, in order to do this I had to learn Figma, which I didn't know before. This project demonstrates my skills: building responsive web applications using React and Typescript, creating animations, styling using Tailwind, semantics, creating components, knowing JSX, dynamically displaying information, working with forms and working with customers. ",
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
  },
  {
    title: "E-commerce",
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
  },
  {
    title: "Portfolio Website",
    description:
      "My first project built with nextJS. I chose nextJs because of the AcernityUi component library which I really wanted to try out. I also didn't want to use external libraries to handle emails (emailJS) as I had done in previous projects, and nextJS has that capability built in. I designed the look of the application myself in Figma. I think this is a valuable project demonstrating my ability to work with new technologies (nextJS), libraries (AcernityUI) and technical documentation.",
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
  },
  {
    title: "Hoodmood - SPA",
    description:
      "Single page app created for a real customer. I made the site over a year ago when I started learning javascript. The application is fully responsive and contains a lot of reactive components, such as an accordion, a sliding graphic (table) on small screens, buttons, links, a map with the location, cards of instructors after clicking which a modal with more information appears. I am most satisfied with the dynamic price list which, after clicking on a category button, displays a list of classes and their price, as this was a challenge for me at the time. In addition, the site includes a contact form, validation using regular expressions in javascript, the emailJS library is responsible for the sending process. For styling and animation I used SCSS. After sending a message from the form, a confirmation modal appears.",
    image: "/thumbnails/hoodThumbnail.webp",
    tools: ["HTML", "SCSS", "JavaScript", "RestAPI", "EmailJS"],
    link: "https://hoodmood.pl",
  },
];
