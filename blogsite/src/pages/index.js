import HeaderCarousel from '@/components/homepage/carousel'
import { client } from '@/lib/contentful/client'

const Homepage = ({carouselPhotos}) => {
  // console.log(carouselPhotos)
  return (
    <div>
      <h1 className="text-3xl font-bold">Home Page</h1>
      <HeaderCarousel carouselPhotos={carouselPhotos} />

    </div>
  );
};
export const getStaticProps = async () => {
  const response = await client.getEntries({content_type:'carouselPhotos'})
    //console.log(response + 'yay I ran')
  return {
  
    props: {
      carouselPhotos: response.items,
      revalidate: 60
    }
  }

}
export default Homepage;