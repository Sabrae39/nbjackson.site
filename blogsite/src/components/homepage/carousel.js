import Carousel from "react-material-ui-carousel";
import ContentfulImage from '../ui/ContentfulImage'

const HeaderCarousel= ({carouselPhotos}) => {
    //const { title, slug, excerpt, coverImage, author, pubDate } = post.fields
    //const {id, url, width, height} = carouselPhotos.fields
    console.log(carouselPhotos[0].fields)
    return (
        <div>
            <h1>I AM HERE</h1>
        <Carousel> 
          {carouselPhotos.map(({id, url, width, height}) => (
          <ContentfulImage
          key={id}
          src={url}
          width={width}
          height={height}
          rel="preload"
          priority="true"
      />
        ))} 
        </Carousel>
      </div>
    );
  };
  
  export default HeaderCarousel;