async function commentPost(postId) {
    const { title, post_content, comments, user_id } = await fetch(`/api/posts/${postId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((postContentData) => postContentData.json());

    let getCommentElement = document.querySelector('.post-list');
    let commentContent = '';
    let commentData = [];

    // iterate over all comments for a post and push the required information into a new array
    for (let i = 0; i < comments.length; i++) {
        commentData.push("Commented by: " + comments[i].user.username + ' - ' + comments[i].comment_content)
    }

    if (postId) {
        // generate comment page
        commentContent = `
            <div class="flex flex-col  justify-center p-10" id="dashboard-content">
                <div class=" w-full h-full md:h-auto p-6 bg-gray-200 rounded-lg border border-gray-400 shadow-md sm:p-6 lg:p-8">
                    <h2 class="text-center text-3xl font-bold">Comment Posts</h2>
                    <div class="m-10 max-w-full border border-gray-600">
                        <div class="max-w-full p-4 bg-gray-400 border border-gray-400 shadow-lg text-2xl flex justify-between items-center">${title}</div>
                        <p class="m-4">
                        ${post_content}
                        </p>
                    </div>
                    <div class="m-10 max-w-full border border-gray-600"><span STYLE="font-weight:bold">Comments</span>
                        <p class="m-4">${commentData.join('<br/><br/>')}</p> 
                    </div>
                    <div class="m-10 max-w-full border border-gray-600">
                        <div class="max-w-full p-4 bg-gray-400 border border-gray-400 shadow-lg text-2xl flex justify-between items-center">Leave a comment!</div>
                        <p class="m-4">
                        <textarea type="text" name="content" id="comment-post-content"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder="Leave a comment! " required=""></textarea>
                            <label for="content"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
                        <button type="button" onClick="submitCommentFormHandler(${postId}, ${user_id})"
                            class="update-post-btn-1 mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                            Comment</button>
                        </p>
                    </div>
                </div>
            </div>
        `
        getCommentElement.innerHTML = commentContent
    }
}

// Create a comment
async function submitCommentFormHandler(postId, user_id) {
    const commentPostData = document.querySelector('#comment-post-content').value.trim();
    const id = postId
    const response = await fetch(`/api/comments/`, {
        method: "POST",
        body: JSON.stringify({
            comment_content: commentPostData,
            post_id: id,
            user_id: user_id
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (response.ok) {
        document.location.replace("/");
    } else {
        alert(response.statusText);
    }
}

