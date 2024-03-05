import Carousel from "react-material-ui-carousel";
import ContentfulImage from '../ui/ContentfulImage'

const HeaderCarousel= ({carouselPhotos}) => {
    //const { title, slug, excerpt, coverImage, author, pubDate } = post.fields
    //const {id, url, width, height} = carouselPhotos.fields
    console.log('carousel '+ carouselPhotos[0].fields.photo.fields.file.url)


    return (
      <div>
        <Carousel> 
          {carouselPhotos.map((photo, i) => (
          <ContentfulImage
          key={photo.fields.name}
          alt={photo.fields.name}
          src={photo.fields.photo.fields.file.url}
          width={photo.fields.photo.fields.file.details.image.width}
          height={photo.fields.photo.fields.file.details.image.height}
          rel="preload"
          priority="true"
          />
          ))} 
        </Carousel>
      </div>
    );
};
  
export default HeaderCarousel;