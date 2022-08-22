import "./Banner.css";

const Banner = ({heading, subHeading}) => {
    return ( 
        <div className="banner-container">
            <div className="banner">
                <h2>{heading}</h2>
                <p>{subHeading}</p>
            </div>
        </div>
     );
}
 
export default Banner;