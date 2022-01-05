function loadmore(){
    var com=document.querySelectorAll('.loadmore');
    for(var i = 0; i < com.length; i++)
    {
        com[i].innerHTML = "";
    }
    var comments_data = {};
    var comments = ""
    fetch('./comments_data.json').then(response => response.json())
    .then(data => {
        comments_data = data;
        for( var i = 0; i< comments_data.length; i++)
        {
            comments += `<div class="comment">
                <img src="./images/profile1.jpeg" alt=""/>
                <div class="com">
                    <div class="com1">
                        <div class="name"><h4>${comments_data[i].name}</h4><p>${comments_data[i].date} .</p><p>${comments_data[i].editedOn}</p></div>
                            <div class="content">
                                <p>${comments_data[i].content}</p>
                                <h4> Question</h4>
                                <p>${comments_data[i].question}</p>
                                <h4> Answer</h4>
                                <p> ${comments_data[i].answer}</p>
                            </div>
                        </div>
                    <div class="response1">
                        <button ><img src="./images/icons8-heart-48.png" alt=""></button><p>Like</p>
                        <button><img src="./images/icons8-comment-50.png" alt=""></button><p>reply</p>
                    </div>
                </div>
            </div>`
            if (i == comments_data.length - 1)
            {
                comments += `<div ><p class="loadmore" onclick="loadmore()">Load more comments...</p></div>`
            }
        }
        console.log(comments);
        var comment_section = document.querySelector('.comments');
        comment_section.innerHTML += comments;
    })
    .catch(error => console.log(error));
    console.log(comments_data);
    
}
function nav(){
const navLinks = document.querySelector(".nav-links");
navLinks.classList.toggle("visible");
console.log("DDD");
}