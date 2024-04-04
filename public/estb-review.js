// document.querySelectorAll(".post").forEach(post => {
// 	const postId = post.dataset.postId;
// 	const ratings = post.querySelectorAll(".post-rating");
// 	const likeRating = ratings[0];

// 	ratings.forEach(rating => {
// 		const button = rating.querySelector(".post-rating-button");
// 		const count = rating.querySelector(".post-rating-count");

// 		button.addEventListener("click", async () => {
// 			if (rating.classList.contains("post-rating-selected")) {
// 				return;
// 			}

// 			count.textContent = Number(count.textContent) + 1;

// 			ratings.forEach(rating => {
// 				if (rating.classList.contains("post-rating-selected")) {
// 					const count = rating.querySelector(".post-rating-count");

// 					count.textContent = Math.max(0, Number(count.textContent) - 1);
// 					rating.classList.remove("post-rating-selected");
// 				}
// 			});

// 			rating.classList.add("post-rating-selected");

// 			const likeOrDislike = likeRating === rating ? "like" : "dislike";
// 			const response = await fetch(`/posts/${postId}/${likeOrDislike}`);
// 			const body = await response.json();
// 		});
// 	});
// });

function addModalHandlers(buttonClass, modalClass, closeClass, saveClass) {
    const buttons = document.querySelectorAll(buttonClass);
    const modals = document.querySelectorAll(modalClass);
    const closeButtons = document.querySelectorAll(closeClass);
    const saveButtons = document.querySelectorAll(saveClass);

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].showModal();
        });
    });

    closeButtons.forEach((closeButton, index) => {
        closeButton.addEventListener('click', () => {
            modals[index].close();
        });
    });

    if (saveClass) {
        saveButtons.forEach((saveButton, index) => {
            saveButton.addEventListener('click', () => {
                modals[index].close();
            });
        });
    }
}

// For the first set of modals
addModalHandlers('.edit-button', '.edit-popup-container', '.edit-popup-close-button', '.save-post-popup-edit');
addModalHandlers('.del-button', '.delete-popup-container', '.confirm-del-button', '.cancel-del-button');
addModalHandlers('.owner-reply-button', '.owner-reply-container', '.owner-popup-close-button', '.owner-save-post-popup');


 // Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");

 const overallStar = document.querySelectorAll(".stars #overall");
 const serviceStar = document.querySelectorAll(".stars #service");
 const foodStar = document.querySelectorAll(".stars #food");
 const ambianceStar = document.querySelectorAll(".stars #ambiance");
//  // Loop through the "stars" NodeList
//  stars.forEach((star, index1) => {
//    // Add an event listener that runs a function when the "click" event is triggered
//    star.addEventListener("click", () => {
// 	 // Loop through the "stars" NodeList Again
// 	 stars.forEach((star, index2) => {
// 	   // Add the "active" class to the clicked star and any stars with a lower index
// 	   // and remove the "active" class from any stars with a higher index
// 	   index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
// 	 });
//    });
//  });



  // Loop through the "stars" NodeList
  overallStar.forEach((star, index1) => {
	// Add an event listener that runs a function when the "click" event is triggered
	star.addEventListener("click", () => {
	  // Loop through the "stars" NodeList Again
	  overallStar.forEach((star, index2) => {
		// Add the "active" class to the clicked star and any stars with a lower index
		// and remove the "active" class from any stars with a higher index
		index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
		
	  });
	  console.log("index1: ", index1);
		console.log("index2: ",index2);
		console.log("index2: ",star.classList);
	});
  });

    // Loop through the "stars" NodeList
	serviceStar.forEach((star, index1) => {
		// Add an event listener that runs a function when the "click" event is triggered
		star.addEventListener("click", () => {
		  // Loop through the "stars" NodeList Again
		  serviceStar.forEach((star, index2) => {
			// Add the "active" class to the clicked star and any stars with a lower index
			// and remove the "active" class from any stars with a higher index
			index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
		  });
		});
	  });

	  foodStar.forEach((star, index1) => {
		// Add an event listener that runs a function when the "click" event is triggered
		star.addEventListener("click", () => {
		  // Loop through the "stars" NodeList Again
		  foodStar.forEach((star, index2) => {
			// Add the "active" class to the clicked star and any stars with a lower index
			// and remove the "active" class from any stars with a higher index
			index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
		  });
		});
	  });  

	  ambianceStar.forEach((star, index1) => {
		// Add an event listener that runs a function when the "click" event is triggered
		star.addEventListener("click", () => {
		  // Loop through the "stars" NodeList Again
		  ambianceStar.forEach((star, index2) => {
			// Add the "active" class to the clicked star and any stars with a lower index
			// and remove the "active" class from any stars with a higher index
			index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
		  });
		});
	  });