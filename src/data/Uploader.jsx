import Button from '../components/Button';

function Uploader() {
  async function upload() {
    const postsPromise = createPosts();
    const followsPromise = createFollows();
    const result = await Promise.all([postsPromise, followsPromise]);
    console.log('Uploaded');
    console.log(result);
    const res = await createFollows();
    console.log(res);
  }
  return null;
  return (
    <Button className="order-last" disabled={true} onClick={upload}>
      Upload
    </Button>
  );
}

export default Uploader;
