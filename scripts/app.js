const data = document.querySelector('#data');
const userList = document.querySelector('#userList');
const postBtn = document.querySelector('#postBtn');


// evenListener on the Post button
postBtn.addEventListener('click',addComment);

//User code
let count = 0;
function addComment() {
    let userData = data.value;
    let html =  '<div class="row" id="data'+count+'" style="margin-bottom:15px;">'+
    '<div class="col-md-6 col-sm-12 col-xs-12">'+
      '<input type="text" class="form-control" value="'+userData+'" disabled>'+
    '</div>'+
    // '<div class="col-md-2 col-sm-4 col-xs-4">'+
    //   '<button type="button" class="btn btn-success" onclick="edit(this.id)" id="edit'+count+'">Edit Comment</button>'+
    // '</div>'+

    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-success" onclick="update(this.id)" id="update'+count+'">Update Comment</button>'+
    '</div>'+
    '<div class="col-md-2 col-sm-4 col-xs-4">'+
      '<button type="button" class="btn btn-danger" onclick="remove(this.id)" id="delete'+count+'">Delete Comment</button>'+
    '</div>'+
  '</div>';

  document.querySelector('#userList').insertAdjacentHTML('beforeend', html);
  count++;

}

function update(updateId) {
    let parent = document.getElementById(updateId).parentNode.parentNode;
    let child = parent.firstChild.firstChild;
    child.removeAttribute("disabled",'disabled');
}

function remove(deleteId) {
    let parent = document.getElementById(deleteId).parentNode.parentNode;
    parent.remove();
}