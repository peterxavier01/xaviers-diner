import Banner from "../Banner/Banner";
import "./About.css";
import Breakfast from "../../assets/breakfast.png";
import Lunch from "../../assets/lunch.png";
import Dinner from "../../assets/dinner.png";
import Dessert from "../../assets/dessert.png";

const About = () => {
  const cards = [
    { id: 1, src: Breakfast, title: "Refreshing Breakfast", content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit" },
    { id: 2, src: Lunch, title: "Amazing Lunch", content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit" },
    { id: 3, src: Dinner, title: "Delicious Dinner", content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit" },
    { id: 4, src: Dessert, title: "Soothing Dessert", content: "lorem ipsum dolor sit ametcons ecteturadipis icing elit" },
  ];

  return (
    <div className="about">
      <Banner heading="About Us" subHeading="Who We Are" />
      <h2 className="heading">The Best Place to Eat Healthy</h2>
      <div className="container cards">
        {cards.map((card) => (
          <div className="cardBox" key={card.id}>
            <img src={card.src} alt={card.title}/>
            <p className="title">{card.title}</p>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
