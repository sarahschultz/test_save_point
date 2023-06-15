function SinglePost(props) {
    return (
        <div className="single-post-container">
        <h3>Post Title: {props.post.title} </h3>
        <h3>Post Description: {props.post.description} </h3>
        </div>
    );
}

export default SinglePost
