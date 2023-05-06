let posts=[
    {
        title:"post one",
        body:"this is post one"
    },
    {
        title:"post two ",
        body:"this is post two"
    }
]

function getPost(){
    setTimeout(() =>{
        let output='';
        posts.forEach((post,index) => {
            output += post.title;
        });
        console.log(output);
    },1000);
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
    },2000);
}

getPost();

createPost({title:"post three",body:"this is post three"});