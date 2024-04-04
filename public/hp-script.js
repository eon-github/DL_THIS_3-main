  // function next(){
  //   currentIndex = (currentIndex + 1) % images.length;
  //   moveDots(currentIndex+1);
  // }
  
  // function prev(){
  //   currentIndex = (currentIndex - 1 + images.length) % images.length;
  //   moveDots(currentIndex+1);
  // }
  
  function moveDots(index){
    let dots = document.getElementsByClassName("dot");
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    dots[index-1].className += " active";
  }
  
//     var displayImgResto = document.getElementById("display-img-resto");
//     var displayTitleResto = document.getElementById("resto-title");
//     displayTitleResto.innerText = resto_titles[currentIndex];
//     displayImgResto.src = images[currentIndex];
//   }
  
//   function setDefault(index) {
//     // Access the set of users based on the provided index
//     let setOfUsers = users[index];
  
//     for (let i = 0; i < setOfUsers.length; i++) {
//       switch (i){
//         case 0: {
//             document.getElementById("first-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("first-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("first-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//         case 1 : {
//             document.getElementById("second-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("second-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("second-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//         case 2 : {
//             document.getElementById("third-review").querySelector("h3").textContent = setOfUsers[i].name;
//             document.getElementById("third-review").querySelector("p").textContent = setOfUsers[i].feedback;
//             let stars = document.getElementById("third-review").querySelectorAll(".fa-star");
//             setStars(stars, setOfUsers[i].rating);
//             break;
//         }
//       }
//     }
//   }
  
//   function switchFeedback(index){
//     let setOfUsers = users[index]; //index 0 {[1,2,3]}
//     //get user data 
  
//     for (let i = 0; i < setOfUsers.length; i++){ 
//       switch (i){
//         case 0: {
//           document.getElementById("first-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("first-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("first-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//         case 1 : {
//           document.getElementById("second-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("second-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("second-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//         case 2 : {
//           document.getElementById("third-review").querySelector("h3").textContent = setOfUsers[i].name;
//           document.getElementById("third-review").querySelector("p").textContent = setOfUsers[i].feedback;
//           let stars = document.getElementById("third-review").querySelectorAll(".fa-star");
//           setStars(stars, setOfUsers[i].rating);
//           break;
//         }
//       }
//     }
//   }
  
  // Function to set stars based on rating
  function setStars(num_review, rating) {
    let stars = document.getElementById(num_review).querySelectorAll(".fa-star");
    for (let i = 0; i < rating; i++) {
        stars[i].classList.add("checked");
    }
  }

  function showLogIn() {
    document.querySelector(".popup-login-content").style.display = "block";
    document.querySelector(".popup-login").style.display = "flex";
    document.querySelector(".options").style.display = "none";
  }
  
  function closeLogIn() {
    document.querySelector(".popup-login-content").style.display = "none";
    document.querySelector(".popup-login").style.display = "none";
  
    document.querySelector(".options").style.display = "block";
    return false; // Prevent default form submission
  }
  
  function showSignup() {
    document.querySelector(".popup-signup-content").style.display = "block";
    document.querySelector(".popup-signup").style.display = "flex";
    document.querySelector(".options").style.display = "none";
  }
  
  function closeSignup() {
    document.querySelector(".popup-signup-content").style.display = "none";
    document.querySelector(".popup-signup").style.display = "none";

    let email = document.getElementsByName("email1");
    email.value = '';

    let username = document.getElementsByName("sign2");
    username.value = '';

    let password = document.getElementsByName("firstpass");
    password.value = '';

    let v_password = document.getElementById("verify-password-signup");
    v_password.value = '';

    document.querySelector(".options").style.display = "block";
    
    return false; // Prevent default form submission
  }
  
  function verifyPassword(){
    let p1 = document.forms["signup"]["password-signup"].value;
    let p2 = document.forms["signup"]["verify-password-signup"].value;
  
    if (p1 == p2){
      closeSignup();
      return true;
    }
    else {
      alert("Password does not match");
      return false;
    }
  }
  
  function successfulLogin(){
    return closeLogIn();
  }
  
//   window.onload = function () {
//     setDefault(0); // Pass the index of the set you want to use as default
//   };

  function next(i){
    const size = 5;
    i = (i + 1) % size;
    return i;
  }

  function previous(i){
    const size = 5;
    i = (i - 1 + size) % size;
    return i;
  }

  $(document).ready(function(){
    let order = 0;  // Initialize i outside the click handler

    $('#next-button').click(function(){
      $.post(
          '/update-image',
          { input: next(order), sts: "next" },
          function(data, status){
              if(status === 'success'){
                $('#display-img-resto').attr('src', data.url);
                $('#resto-title').text(data.title); // Update restoName

                display(data.commentData);
  
                order = data.index;  // Update the order variable
                moveDots(order+1);
              }
          }
      );
    });
  
    $('#previous-button').click(function(){
      $.post(
          '/update-image',
          { input: previous(order), sts: "previous"},
          function(data, status){
              if(status === 'success'){
                $('#display-img-resto').attr('src', data.url);
                $('#resto-title').text(data.title); // Update restoName

                display(data.commentData);

                order = data.index;  // Update the order variable
                moveDots(order+1);
              }
          }
      );
    });
  });

  function display (commentData){
    if (commentData.length > 0 && commentData[0] != null){
      $('#user1').text(commentData[0].username);
      $('#content1').text(commentData[0].content);
      $("#first-star-1").remove();
      $("#first-star-1").remove();
      $("#first-star-1").remove();
      $("#first-star-1").remove();
      $("#first-star-1").remove();
      commentData[0].ratingCount.forEach(function() {
        $('#first-review .right-review-popup-odd').append('<span id="first-star-1" class="fa fa-star checked"></span>');
      });
      $('#first-review').show();
    } else { 
      $('#first-review').hide();
    }

    if (commentData.length > 1 && commentData[1] != null){
      $('#user2').text(commentData[1].username);
      $('#content2').text(commentData[1].content);
      $("#first-star-2").remove();
      $("#first-star-2").remove();
      $("#first-star-2").remove();
      $("#first-star-2").remove();
      $("#first-star-2").remove();
      commentData[1].ratingCount.forEach(function() {
        $('#second-review .left-review-popup-even').append('<span id="first-star-2" class="fa fa-star checked"></span>');
      });
      $('#second-review').show();
    } else { 
      $('#second-review').hide();
    }

    if (commentData.length > 2 && commentData[2] != null){
      $('#user3').text(commentData[2].username);
      $('#content3').text(commentData[2].content);
      $("#first-star-3").remove();
      $("#first-star-3").remove();
      $("#first-star-3").remove();
      $("#first-star-3").remove();
      $("#first-star-3").remove();
      commentData[2].ratingCount.forEach(function() {
        $('#third-review .right-review-popup-odd').append('<span id="first-star-3" class="fa fa-star checked"></span>');
      });
      $('#third-review').show();
    } else { 
      $('#third-review').hide();
    }

  }

