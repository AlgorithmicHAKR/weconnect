var ID,USERID
$(function(){
       const table=$('#full')
        $.get('/routes/posts',(listOfPosts)=>{
        refilltable(listOfPost)   
    })
    function refilltable(listOfPosts){
       for(singlepost of listOfPosts){
           this.ID=singlepost.id
           this.USERID=singlepost.userId
           console.log(this.ID+" "+this.USERID+" "+ID);
           table.append(`
           <div class="card mx-3 mt-3 p-4"  id='card' style="width:48rem;height:21rem; ">
             <h2>${singlepost.title}</h2>
             <h5><br><br>${singlepost.body.substring(0,300)}</h5>
             <a href="postdetails.html?id=${singlepost.id}" id="a">...Read More</a> 
            </div>
           `)
       }
    }

},

 
)