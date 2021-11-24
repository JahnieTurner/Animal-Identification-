function Start() {
    navigator.mediaDevices.getUserMedia({ audio: true })
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4uNbEcWQq/model.json', modelLoaded)
}

function modelLoaded() {
    console.log("model is loaded")
    classifier.classify(gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)

        r = Math.floor(Math.random() * 255)
        g = Math.floor(Math.random() * 255)
        b = Math.floor(Math.random() * 255)

        document.getElementById("label").style.color = "rgb(" + r + "," + g + "," + b + ")"
        document.getElementById("confidence").style.color = "rgb(" + r + "," + g + "," + b + ")"
        label = results[0].label
        document.getElementById("label").innerHTML = "I can hear a " + label
        confidence = (results[0].confidence * 100).toFixed(2)
        document.getElementById("confidence").innerHTML = "Accurecy " + confidence
        if (label == "Moo") {
            document.getElementById("ear").src = "cow'.png"
        } else if (label == "Bark") {
            document.getElementById("ear").src = "dog.png"
        } else if (label == "Roar") {
            document.getElementById("ear").src = "lion.png"
        } else if (label == "Meow") {
            document.getElementById("ear").src = "cat.png"
        } else {
            document.getElementById("ear").src = "ear.png"
        }

    }
}