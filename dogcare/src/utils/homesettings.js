import doggroup from "../assets/doggroup.png";
import service from "../assets/service.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import pet from "../assets/pet.png"
import pet1 from "../assets/pet1.png"
import pet2 from "../assets/pet2.png"
import pet3 from "../assets/pet3.png"
import pet4 from "../assets/pet4.png"
import pet5 from "../assets/pet5.png"
import pet6 from "../assets/pet6.png"
import pet7 from "../assets/pet7.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const linklst = [
  { id: 1, text: "home" },

  { id: 2, text: "about" },
  { id: 3, text: "services" },
  { id: 4, text: "breeds" },
  { id: 5, text: "shop" },
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

const petlst = [
  {
    id: 1,
    url: pet,
    name: "Golden Retriever",
    gender: "Male",
    age: "2 months",
  },
  {
    id: 2,
    url: pet1,
    name: "Doberman",
    gender: "Male",
    age: "2 months",
  },
  {
    id: 3,
    url: pet2,
    name: "Apso",
    gender: "Female",
    age: "1 year",
  },
  {
    id: 4,
    url: pet3,
    name: "Chihuahua",
    gender: "FeMale",
    age: "1 year",
  },
  {
    id: 5,
    url: pet4,
    name: "Japanese Spitz",
    gender: "Male",
    age: "2 months",
  },
  {
    id: 6,
    url: pet5,
    name: "German Shepard",
    gender: "Male",
    age: "2 months",
  },
  {
    id: 7,
    url: pet6,
    name: "Husky",
    gender: "Female",
    age: "3 months",
  },
  {
    id: 8,
    url: pet7,
    name: "Pug",
    gender: "Female",
    age: "4 months",
  },

];

const bloglst = [
  {
    id: 1,
    url: blog1,
    title: "How to Choose the Right Bully Stick for Your Dog",
    desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
  },
  {
    id: 2,
    url: blog2,
    title: "Saving Lives: Animal House Shelter And Downtown Pet Supply",
    desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
  },
  {
    id: 3,
    url: blog3,
    title: "Himalayan Yak Chews: 11 Benefits You Need To Know",
    desc: "Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.",
  },
];
export { linklst, slidelst, servicelst, petlst,bloglst };
