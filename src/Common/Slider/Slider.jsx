import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={style.slider}>
      <Carousel fade indicators={false}>
        <Carousel.Item>
          <img
            width='200'
            className='d-block w-100'
            src='https://ik.imagekit.io/ikmedia/backlit.jpg'
            alt='First slide'
          />
          <Carousel.Caption className={style.myCaption}>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg'
            alt='Third slide'
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Slider;
