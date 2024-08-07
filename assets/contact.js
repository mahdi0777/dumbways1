function submitData(event) {
    event.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const phoneNumber = document.getElementById("phoneNumber").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    if (name == "") {
        return alert("Silahkan Masukan Nama Anda")
    } else if (email == "") {
        return alert("Silahkan Masukan Email Anda")
    } else if (phoneNumber == "") {
        return alert("Silahkan Masukan Nomor Anda")
    } else if (subject == "") {
        return alert("Silahkan Mengisi Subjek")
    } else if (message == "") {
        return alert("Silahkan Masukan Pesan")
    }

    console.log(name)
    console.log(email)
    console.log(phoneNumber)
    console.log(subject)
    console.log(message)


    let a = document.createElement('a')

    a.href = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(message)}`

    a.click()

}