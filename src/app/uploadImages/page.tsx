import Posts from './posts';
import CreatePost from './CreatePost';

const PostPage = () => {
  return (
    <div className="container mx-auto py-12">
      <CreatePost />
      <div className="mt-12">
        <Posts />
      </div>
    </div>
  );
};

export default PostPage;
