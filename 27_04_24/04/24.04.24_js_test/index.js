
let options = parseInt(prompt("Enter operator 1. Currency convert \n 2. Normal Calculator \n 3.Age Calculor \n 4.Area and surface of clinder \n 5.Simple interest and compound interest"));

switch (options) {
    case 1:

        const pound = 103.8;
        const dollar = 83.47;
        const yen = 0.54;
        const euro = 88.89;
        const dinar = 272.79;
        let result1;
        let userINR = parseInt(prompt("Enter INR"));
        let convert = parseInt(
            prompt(
                " INR To Pound Enter .1 \n INR To Dollar Enter .2 \n INR To Japanes Yen Enter .3 \n Euro To INR Enter .4 \n Dinar To INR "
            )
        );
        switch (convert) {
            case 1:
                {
                    console.log(".... INR to Pound ....");
                    result1 = userINR / pound;
                    console.log(`${userINR} in pound = ${result1} pound`);
                }
                break;
            case 2:
                {
                    console.log(".... INR to US Dollar ....");
                    result1 = userINR / dollar;
                    console.log(`${userINR} in US Dollar = ${result1} dollar`);
                }
                break;
            case 3:
                {
                    console.log(".... INR to Japanes Yen ....");
                    result1 = userINR / yen;
                    console.log(`${userINR} in Japanes Yen = ${result1} Yen`);
                }
                break;
            case 4:
                {
                    console.log(".... Euro to INR ....");
                    result1 = userINR * euro;
                    console.log(`${userINR} in Euro = ${result1} Rupees`);
                }
                break;
            case 5:
                {
                    console.log(".... Dinar to INR ....");
                    result1 = userINR * dinar;
                    console.log(`${userINR} in Dinar = ${result1} Rupees`);
                }
                break;
            default:
                console.log("Invalid Currency");
        }
        break;


    case 2:
        let calc = parseInt(prompt('press 1 for addition\npress 2 for substraction\npress 3 for modulus\npress 4 for multiplication'))
        let a, b, result2;
        switch (calc) {
            case 1:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result2 = a + b;
                console.log(`Sum of ${a} and ${b} = ${result2}`)
                break;
            case 2:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result2 = a - b;
                console.log(`Subtraction of ${a} and ${b} = ${result2}`)
                break;
            case 3:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result2 = a % b;
                console.log(`Modulus of ${a} and ${b} = ${result2}`)
                break;
            case 4:
                a = parseInt(prompt('Enter first Number'))
                b = parseInt(prompt('Enter second Number'))
                result2 = a * b;
                console.log(`Multiplication of ${a} and ${b} = ${result2}`)
                break;
            default:
                console.log("Wrong Input")
        }
        break;


    case 3:
        let dobString = prompt("Enter your date of birth (MM/DD/YYYY):");
        let dob = new Date(dobString);
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);
        console.log("Age: " + age + " years");

        break;
    case 4:
        let cylinder = parseInt(prompt('press 1 for area of cylinder \npress 2 for surfaceareaof cylinder\n'))

        switch (cylinder) {
            case 1:
                const Area = (r, h) => (2 * Math.PI * r * r + 2 * Math.PI * r * h)
                r = parseInt(prompt('Enter radius'))
                h = parseInt(prompt('Enter first height'))
                const result4 = Area(r, h)

                console.log(`the surface area of cylinder with radius "${r}" and height "${h}" = ${result4}`)
                break;
            case 2:
                const sArea = (r, h) => (2 * Math.PI * r * r + 2 * Math.PI * r * h)
                r = parseInt(prompt('Enter radius'))
                h = parseInt(prompt('Enter first height'))
                const result = sArea(r, h)

                console.log(`the surface area of cylinder with radius "${r}" and height "${h}" = ${result}`)
                break;
            default:
                console.log("Wrong Input")

        }
        break;
    case 5:
        let interest = parseInt(prompt('press 1 for SIMPLE INTEREST \npress 2 for COMPOUND INTEREST\n'))

        switch (interest) {
            case 1:
                const SI = (P, R, T) => (P * R * T)
                P = parseInt(prompt('Enter PRINCIPAL'))
                R = parseInt(prompt('Enter first RATE'))
                T = parseInt(prompt('Enter first TIME'))
                
                const result4 = SI(P, R, T)

                console.log(`the SIMPLE INTEREST I\S" = ${result4}`)
                break;
            case 2:
                const principal = parseFloat(prompt('Enter principal amount'))
                const rate = parseFloat(prompt('Enter annual interest rate'))
                const time = parseFloat(prompt('Enter time period in years'))
                const n = parseFloat(prompt('Enter number of times interest applied per time period'))
                const compoundInterest = principal * Math.pow((1 + rate / (100 * n)), n * time) - principal;
                console.log(`Compound Interest: ${compoundInterest}`);
                break;



            default:
                printf("Error: Invalid operator.\n");
        }
        break;
}