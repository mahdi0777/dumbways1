
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

const testimonial1 = new Testimonial("https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", "Sangat Berguna", "Mahdi")

const testimonial2 = new Testimonial("https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600", "Keren Banget", "Lythaa")

const testimonial3 = new Testimonial ("https://images.pexels.com/photos/932261/pexels-photo-932261.jpeg?auto=compress&cs=tinysrgb&w=600", "berguna miaww", "Neko")

const testimonial4 = new Testimonial ("https://images.pexels.com/photos/946344/pexels-photo-946344.jpeg?auto=compress&cs=tinysrgb&w=600", "Keren sekali kwokkkk", "Karasu")

const testimonial5 = new Testimonial ("https://images.pexels.com/photos/13773494/pexels-photo-13773494.jpeg?auto=compress&cs=tinysrgb&w=600", "Benri Desu", "Wibu Akut")

const testimonials = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5] 

let testimonialHTML = ``

for(let index = 0; index < testimonials.length; index++) {
    testimonialHTML += testimonials[index].html()
}

document.getElementById("testimonials").innerHTML = testimonialHTML