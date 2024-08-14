class Testimonial {
    constructor(image, content, author) {
        this.image = image
        this.content = content
        this.author = author
    }

    html() {
        return `<div class="testimonial">
          <img
            src="${this.image}"
            class="profile-testimonial"
          />
          <p class="quote">${this.content}</p>
          <p class="author">- ${this.author}</p>
        </div>`
    }
}

const testimonials = [
    { image : "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
        content : "Sangat Berguna"
        author : "mahdi"
    }
   
    { image :
        content :
        author :
    }

    { image :
        content :
        author :
    }
]

function allTestimonials() {
    return testimonial = testimonials.map ((testimonial) => {return testimonial.html()})
}

const testimonialHTML = testimonials.map((testimonial) => {
    return `<div class="testimonial">
                <img
                  src="${testimonial.image}"
                  class="profile-testimonial"
                />
                <p class="quote">${testimonial.content}</p>
                <p class="author">- ${testimonial.author}</p>
              </div>`;
  });

  document.getElementById("testimonials").innerHTML =
    testimonialHTML.join(" ");