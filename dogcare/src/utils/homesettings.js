import doggroup from "../assets/doggroup.png";
import service from "../assets/service.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
const linklst = [
  { id: 1, text: "home" },

  { id: 2, text: "about" },
  { id: 3, text: "services" },
  { id: 4, text: "breeds" },
  { id: 6, text: "shop" },
  { id: 6, text: "gallery" },
];

const slidelst = [
  { id: 1, url: doggroup },

  {
    id: 2,
    url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1615266508040-7c47f7339963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1581888227599-779811939961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
];

const servicelst = [
  {
    id: 0,
    url: service,

    desc: "We are enhancing our skills, salon, and equipment to meet the challenges of pet grooming.",
    title: "Dog/Cat Grooming",
  },
  {
    id: 1,
    url: service2,
    desc: "Our goal is to ensure pet welfare through home treatment and prompt client response.",
    title: "Home Treatment",
  },
  {
    id: 2,
    url: service3,
    desc: "Our clinic offers professional veterinary care with a focus on disease prevention, diagnosis, and treatment.",
    title: "Clinical Treatment",
  },
  {
    id: 3,
    url: service4,
    desc: "We buy and sell common breed puppies like Golden Retriever, Husky, Pug, etc. 100% guarantee on the breed offered.",
    title: "Puppies Buying & Selling",
  },
  {
    id: 4,
    url: service5,
    desc: "Our team of dog trainers is passionate, dedicated, and has years of professional experience.",
    title: "Dog Training",
  },
  {
    id: 5,
    url: service6,
    desc: "Quality breeding requires experience and passion. We can arrange and facilitate quality breed mating.",
    title: "Dog Matting",
  },
];
export { linklst, slidelst, servicelst };
