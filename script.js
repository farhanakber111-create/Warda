let currentStep = 0;
const messages = [
    { main: "K ye koi bara dawa nhi hai bas sada sa ehsas h k ap mery dill k qareeb ho ❤️‍🩹🎀...", sub:ab zehn kahi or na ly kr jana gandy bachy😂😂dill kaha hai to dil tk he rukna agy oechy na jana🫣 "💌" },
    { main: "khair agy chalty hain  💛", sub: "Ha to mai kya keh rhi thi🤔" },
    { main: "k pata nahi ye kya ehsas hai lekin ap ki ek attention dyna mjhy mera pura din acha bna dyte hai👀to batao ab bhi dosto k psss dair tk mjhy sy dur rahogy ap🥹🫀🫶", sub: "Tap to see..." }
];

function startExperience() {
    document.getElementById('start-page').classList.add('hidden');
    document.getElementById('message-container').classList.remove('hidden');
}

function nextMessage() {
    if (currentStep < messages.length) {
        document.getElementById('message-text').innerText = messages[currentStep].main;
        document.getElementById('sub-text').innerText = messages[currentStep].sub;
        
        let dots = document.querySelectorAll('.dot');
        dots.forEach(d => d.classList.remove('active'));
        dots[currentStep + 1].classList.add('active');
        
        currentStep++;
    } else {
        document.getElementById('message-container').classList.add('hidden');
        document.getElementById('final-page').classList.remove('hidden');
    }
}
