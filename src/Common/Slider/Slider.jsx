import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Slider.module.css";
import avatar from "./../../img/avatar.jpg";

const Slider = () => {
  return (
    <div className={style.slider}>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img className='d-block w-100' src={avatar} alt='First slide' />
          <Carousel.Caption className={style.my_caption}>
            <h5>Terekhov Dmytro</h5>
            <p>Front-End Developer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Slider;
