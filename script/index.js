var ip = document.getElementById("ip")
function getGithubUser() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("userdetails").style.display = "block";
    
      console.log(this.response)
    var userobj = JSON.parse(this.response);
    name.innerHTML = userobj.name
    console.log(userobj.name)
    document.getElementById("name").innerHTML = userobj.name
    document.getElementById("login").innerHTML = "@"+userobj.login
    document.getElementById("date").innerHTML = new Date(userobj.created_at)
    document.getElementById("bio").innerHTML = userobj.bio
    document.getElementById("followers").innerHTML = "Followers : "+userobj.followers
    document.getElementById("following").innerHTML = "Following : "+userobj.following
    document.getElementById("pic").src =userobj.avatar_url ;

    }
    if (this.readyState == 4 && this.status == 404) {
        document.getElementById("userdetails").style.display = "block";
        document.getElementById("name").innerHTML = " USER NOT FOUND !!"
      }
  };
  
  xhttp.open("GET", "http://api.github.com/users/"+ip.value, true);
  xhttp.send();
}
