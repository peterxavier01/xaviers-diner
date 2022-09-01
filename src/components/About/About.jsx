import SectionHeader from "../SectionHeader/SectionHeader";
import Banner from "../Banner/Banner";

import "./About.css";

import Breakfast from "../../assets/breakfast.png";
import Lunch from "../../assets/lunch.png";
import Dinner from "../../assets/dinner.png";
import Dessert from "../../assets/dessert.png";
import ChefOne from "../../assets/chef.jpg";
import ChefTwo from "../../assets/chef1.jpg";
import ChefThree from "../../assets/chef2.jpg";

const About = () => {
  const cards = [
    {
      id: 1,
      src: Breakfast,
      title: "Refreshing Breakfast",
      content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
    },
    {
      id: 2,
      src: Lunch,
      title: "Amazing Lunch",
      content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
    },
    {
      id: 3,
      src: Dinner,
      title: "Delicious Dinner",
      content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
    },
    {
      id: 4,
      src: Dessert,
      title: "Soothing Dessert",
      content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit",
    },
  ];

  const chefs = [
    { src: ChefOne, name: "Jimmy Chang", title: "Head Chef" },
    { src: ChefTwo, name: "John Shinobu", title: "Assistant Chef" },
    { src: ChefThree, name: "Alex Rodrigo", title: "Assistant Chef" },
  ];

  return (
    <div className="about">
      <Banner heading="About Us" subHeading="Who We Are" />

      <div className="about-heading-container container">
        <h2>Xavier's Diner</h2>
        <p>
          The European languages are members of the same family. Their separate
          existence is a myth. For science, music, sport, etc, Europe uses the
          same vocabulary. The languages only differ in their grammar, their
          pronunciation and their most common words. Everyone realizes why a new
          common language would be desirable: one could refuse to pay expensive
          translators. To achieve this, it would be necessary to have uniform
          grammar, pronunciation and more common words. If several languages
          coalesce, the grammar of the resulting language is more simple and
          regular than that of the individual languages.
        </p>
      </div>

      <div className="cards-container">
        <h2 className="heading container">The Best Place to Eat Healthy</h2>
        <div className="container cards">
          {cards.map((card) => (
            <div className="cardBox" key={card.id}>
              <img src={card.src} alt={card.title} />
              <p className="title">{card.title}</p>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="chefs-container container">
        <div className="chefs-header-container">
          <SectionHeader
            header="Our qualified Chefs"
            subHeader="Meet the chefs who put in their all to serve you the most tasty meals"
          />
        </div>
        <div className="chefs-grid-container">
          {chefs.map((chef, index) => (
            <div key={index} className="chefs-grid">
              <img src={chef.src} alt="chef" />
              <h4>{chef.name}</h4>
              <p>{chef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
