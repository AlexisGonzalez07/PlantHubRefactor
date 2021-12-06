
function GetPosts(props) {

  return (
    <div class="ui minimal comments">
      <h3 class="ui dividing header">Comments</h3>
      {props.allPost.map((post) => (
        <div class="comment" key={`post = ${post._id}`}>
          <div class="content post">
            <a class="author">{post.postCreator}</a>
            <div class="metadata">
              <span class="date">{post.createdAt}</span>
            </div>
            <div class="text">{post.postText}</div>
            <div class="actions">
              <a class="reply">Reply</a>
            </div>
          </div>
          {post.comments.map((comment) => (
            <div class="comments comment">
              <div class="comment">
                <div class="content">
                  <a class="author">{comment.commentCreator}</a>
                  <div class="metadata">
                    <span class="date">{comment.createdAt}</span>
                  </div>
                  <div class="text">{comment.commentText}</div>
                  <div class="actions">
                    <a class="reply">Reply</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GetPosts;