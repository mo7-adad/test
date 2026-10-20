let score = 92;

if (score < 0 || score > 100) {
    console.log("درجة غير صحيحة");
} else if (score >= 85) {
    console.log("ممتاز");
} else if (score >= 75) {
    console.log("جيد جداً");
} else if (score >= 65) {
    console.log("جيد");
} else if (score >= 50) {
    console.log("مقبول");
} else {
    console.log("راسب");
}


// -------------------------------------

let drinkCode = 3;

switch (drinkCode) {
    case 1:
        console.log("طلبك قهوة - السعر: 15 جنيه");
        break;
    case 2:
        console.log("طلبك شاي - السعر: 10 جنيه");
        break;
    case 3:
        console.log("طلبك عصير برتقال - السعر: 20 جنيه");
        break;
    case 4:
        console.log("طلبك مياه - السعر: 5 جنيه");
        break;
    default:
        console.log("اختيار غير موجود");
        break;
}

// -------------------------------------

let distance = 1000;
let total = 0;

for (let day = 1; day <= 7; day++) {
    if (distance >= 3000) {
        console.log("اليوم " + day + ": " + distance + " متر (يوم صعب)");
    } else {
        console.log("اليوم " + day + ": " + distance + " متر");
    }
    
    total += distance;
    distance += 500;
}

console.log("إجمالي المسافة: " + total + " متر");

// -------------------------------------

let price = 1000;
let savings = 0;
let weeks = 0;

while (savings < price) {
    savings += 150;
    weeks++;
    console.log("الأسبوع " + weeks + ": معاك " + savings + " جنيه");
}

console.log("وصلت للهدف بعد " + weeks + " أسابيع، ومعاك " + savings + " جنيه");


// -------------------------------------



const correctPin = "1234";
let balance = 2000;
let pinAttempts = ["1111", "2580", "1234"];
let operation = "withdraw"; // "balance" | "withdraw" | "deposit"
let amount = 500;

let attemptIndex = 0;
let isAuthorized = false;

// الجزء الأول: التحقق من الرقم السري
do {
    let currentPin = pinAttempts[attemptIndex];
    attemptIndex++;

    if (currentPin === correctPin) {
        isAuthorized = true;
        break;
    } else {
        let remainingAttempts = pinAttempts.length - attemptIndex;
        if (remainingAttempts > 0) {
            console.log("رقم سري غلط، فاضلك " + remainingAttempts + " محاولات");
        }
    }
} while (attemptIndex < pinAttempts.length && !isAuthorized);

// الجزء الثاني: تنفيذ العمليات في حال نجاح الدخول
if (isAuthorized) {
    console.log("أهلاً بيك");

    switch (operation) {
        case "balance":
            console.log("رصيدك: " + balance + " جنيه");
            break;
            
        case "withdraw":
            if (amount > balance) {
                console.log("رصيدك لا يكفي");
            } else {
                balance -= amount;
                console.log("تم سحب " + amount + " جنيه، رصيدك الحالي: " + balance + " جنيه");
            }
            break;
            
        case "deposit":
            balance += amount;
            console.log("تم إيداع " + amount + " جنيه، رصيدك الحالي: " + balance + " جنيه");
            break;
            
        default:
            console.log("عملية غير معروفة");
            break;
    }
} else {
    console.log("تم إيقاف الكارت");
}