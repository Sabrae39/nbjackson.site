import RichText from '../RichText'

const PostBody = ({ post }) => {
  const { content } = post.fields

  return (
    <div className='mx-a prose'>
      <RichText content={content} />
    </div>
  )
}

export default PostBody