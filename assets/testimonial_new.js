const testimonials = [
    {
        image : "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Mantap bang",
        author : "Mahdi",
        rating : 4,
    },

    {
        image : "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Keren Banget",
        author : "Lythaa",
        rating : 5,
    },

    {
        image : "https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Berguna Meow",
        author : "Neko",
        rating : 3,
    },

    {
        image : "https://images.pexels.com/photos/946344/pexels-photo-946344.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Keren Sekali Kwokk",
        author : "Karasu",
        rating : 4,
    },

    {
        image : "https://images.pexels.com/photos/13773494/pexels-photo-13773494.jpeg?auto=compress&cs=tinysrgb&w=600",
        content : "Benri Desu",
        author : "Wibu Akut",
        rating : 2,
    }
]

//     let testimonialHTML = ``

//     testimonials.forEach (testimonial => {
//         testimonialHTML += `<div class="testimonial">
//                <img
//                  src="${testimonial.image}"
//                  class="profile-testimonial"
//                />
//                <p class="quote">${testimonial.content}</p>
//               <p class="author">- ${testimonial.author}</p>
//            </div>`
        
//     });

 function allTestimonial() {
    const testimonialHTML = testimonials.map ((testimonial) => { 
        return `<div class="testimonial">
             <img
               src="${testimonial.image}"
               class="profile-testimonial"
             />
             <p class="quote">${testimonial.content}</p>
             <p class="author">- ${testimonial.author}</p>
           </div>`
    })
    ;
    
    console.log(testimonialHTML.join (" "))

    document.getElementById ("testimonials"). innerHTML = testimonialHTML.join (" ")
   
 }

 function filterTestimonial(rating) {
    const filteredTestimonialRating = testimonials.filter ((testimonial) => {
        return testimonial.rating == rating
    });

    const testimonialHTML = filteredTestimonialRating.map ((testimonial) => {
        return `<div class="testimonial">
             <img
               src="${testimonial.image}"
               class="profile-testimonial"
             />
             <p class="quote">${testimonial.content}</p>
             <p class="author">- ${testimonial.author}</p>
           </div>`;
    })
    document.getElementById ("testimonials") . innerHTML = testimonialHTML.join (" ")
 }

 allTestimonial()