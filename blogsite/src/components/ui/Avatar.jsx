import ContentfulImage from './ContentfulImage'

const Avatar = ({ name, picture }) => {
  // console.log(picture +' its me')
  return (
    <div className='flex items-center'>
      <div className='relative w-10 h-10 mr-4'>
        <ContentfulImage
          src={picture.fields.file.url}
          // layout='fill'
          width={picture.fields.file.details.image.width}
          height={picture.fields.file.details.image.height}
          className='rounded-full m-0'
          alt={name}
        />
      </div>
      <div className='font-semibold'>{name}</div>
    </div>
  )
}

export default Avatar