//Question 1: Merging Author and Comment Data

async function getArticleId(articleId){
 const response=await fetch(`https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user/${articleId}`);
try {

    if(!response.ok){
        throw new Error("HTTP error:",response.status);
      
    }  
    const data=await response.json();
    return data;
} catch (error) {
    console.log("HTTP error:",error);
}
};
getArticleId();

async function articleId(){
    
}


