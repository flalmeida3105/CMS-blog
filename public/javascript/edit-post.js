function updatePost(title, post_content, id) {

    const postTitle = title;
    const postContent = post_content;
    const postId = id;
    let getDashboardElement = document.querySelector('#dashboard-content');
    let dashboardContent = '';

    if (postTitle) {
        console.log("title:", postTitle);
        console.log("content:", postContent);
        console.log("id:", postId)
        dashboardContent = `
            <div class="flex justify-center p-10">
                <div
                    class=" w-full max-w-2xl h-full md:h-auto p-6 bg-gray-200 rounded-lg border border-gray-400 shadow-md sm:p-6 lg:p-8">
                    <form class="edit-post-form">
                        <h5 class="mb-8 text-xl font-medium text-gray-900">Edit post!</h5>
                        <div class="relative z-0 w-full mb-6 group mb-8">
                            <input type="text" name="title" id="update-post-title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="">
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title
                            </label>
                        </div>
                        <div class="relative z-0 w-full mb-6 group">
                            <textarea type="text" name="content" id="update-post-content"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required=""></textarea>
                            <label for="content"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Content</label>
                        </div>
                        <button type="button" onClick="editFormHandler(${postId})"
                            class="update-post-btn-1 mt-8 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update
                            Post</button>
                        <button type="button" onClick="deleteFormHandler(${postId})"
                            class="delete-post-btn-1 mt-8 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete
                            Post</button>
                    </form>
                </div>
            </div>
        `
        getDashboardElement.innerHTML =  dashboardContent
       
        document.querySelector('#update-post-title').value = postTitle
        document.querySelector('#update-post-content').value = postContent
    }
}

async function editFormHandler(postId) {
    const title = document.querySelector('#update-post-title').value.trim();
    const post_content = document.querySelector('#update-post-content').value.trim();
    const id = postId

    const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            post_content,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
}


async function deleteFormHandler(postId) {
    const id = postId
    const response = await fetch(`/api/posts/${id}`, {
        method: "DELETE",
    });
    if (response.ok) {
        document.location.replace("/dashboard/");
    } else {
        alert(response.statusText);
    }
}