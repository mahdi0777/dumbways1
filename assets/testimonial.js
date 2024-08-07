

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

const testimonial1 = new Testimonial("https://id.pinterest.com/pin/784400460096645882/", "Mantap bang!", "Mahdi")

const testimonial2 = new Testimonial("foto", "Mantap keren sekali!", "Lythaa")

const testimonials = [testimonial1, testimonial2] // length => 2

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML