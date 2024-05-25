let inr,dir
const getValue = () =>{
    inr = parseFloat(document.querySelector('#currency').value);
    dir = parseFloat(document.querySelector('#dir').value);
}
document.querySelector('#usd').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.12
})
document.querySelector('#yen').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*1.87
})
document.querySelector('#euro').addEventListener('click',()=>{
    document.querySelector('#result').innerText = inr*0.11
})
document.querySelector('#dihram').addEventListener('click',()=>{
    document.querySelector('#result').innerText = 22.68/dir
})


function calculateAge() {
    const birthDate = new Date(document.getElementById('birthDate').value);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    document.getElementById('result2').innerText = `You are ${age} years old.`;
}

function convertToFar() {
    const degreeC = parseFloat(document.getElementById('degree').value);
    const degreeF = (degreeC * 9/5) + 32;
    document.getElementById('result3').innerText = `${degreeC}°C is equal to ${degreeF.toFixed(2)}°F.`;
}

function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var time = parseFloat(document.getElementById("time").value);

    var simpleInterest = (principal * rate * time) / 100;
    document.getElementById("simpleInterestResult").innerText = "Simple Interest: " + simpleInterest;
}

function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById("principalCompound").value);
    var rate = parseFloat(document.getElementById("rateCompound").value);
    var time = parseFloat(document.getElementById("timeCompound").value);

    var compoundInterest = principal * Math.pow(1 + (rate / 100), time) - principal;
    document.getElementById("compoundInterestResult").innerText = "Compound Interest: " + compoundInterest;
}