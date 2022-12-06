// comment area
function comment(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}

function displayComment(dscomment){
    const ul=document.getElementById('comments')
    for(const comment of dscomment){
        // console.log(comment)
     const li=document.createElement('li')
     li.classList.add('comment-li')
     li.innerText=`name:${comment.name} email:${comment.eamil} postid:${comment.postId}`
     ul.appendChild(li)
    }

}
// albums area
function album(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data=>displayAlbum(data))
}
function displayAlbum(showAlbum){
    const ul=document.getElementById('albums')
for(const album of showAlbum){
    // console.log(album)
  const li =  document.createElement('li')
  li.classList.add('album-li')
  li.innerText=`tittle:${album.title} id:${album.id} userId:${album.userId}`
  ul.appendChild(li)
}
}

// photo ara
function photo(){
    fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data => displayPhotos(data))
}

function displayPhotos(showphoto){
    const ul = document.getElementById('photos')
for(const photo of showphoto){
    // console.log(photo)
const li=document.createElement('li')
li.classList.add('photo-li')
li.innerText=`Title:${photo.title} albumId:${photo.albumId}`
ul.appendChild(li)
}
}

