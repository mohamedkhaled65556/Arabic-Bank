let balance = 0;
let passward = "1234";
let historyTrans = [];
let isOnePassword = false;
let isShowBalance = false;
let span = document.querySelector("#Balance");

const oneTimePass = () => {
  if (isOnePassword == false) {
    let Passward = prompt("أدخل كلمة المرور");

    if (Passward == passward) {
      isOnePassword = true;
    } else {
      alert("كلمة المرور غير صحيحه");
    }
  }
};

const changePassword = () => {
  oneTimePass();
  if (isOnePassword) {
    let input = document.querySelector("#Password");
    let newPassword = input.value;
    input.value = "";
    if (newPassword === "") alert("كلمة المرور الجديده لا يمكن ان تكون فارغه");
    else if (newPassword.length < 4)
      alert("كلمة المرور الجديده لازم ع الاقل تكون مكونه من 4 أحرف");
    else if (newPassword === passward) alert("كلمة المرور هذه مستخدمه من قبل");
    else {
      passward = newPassword;
      alert("تم تغيير كلمة المرور");
      isOnePassword = false;
      span.innerHTML = `<span id="Balance">**** جنيه</span>`;
      isShowBalance = false;
    }
  }
};

const showAndHideBalance = () => {
  oneTimePass();
  if (isOnePassword) {
    if (!isShowBalance) {
      span.innerHTML = `
    <span id="Balance" type="number">${balance} جنيه</span>`;
      isShowBalance = true;
    } else {
      span.innerHTML = `<span id="Balance">**** جنيه</span>`;
      isShowBalance = false;
    }
  }
};

const Deposite = () => {
  oneTimePass();
  if (isOnePassword) {
    let deposite = document.querySelector("#Deposite");
    let amount = +deposite.value;
    deposite.value = "";
    if (amount > 0) {
      let history = {
        رصيدقبل: `${balance} جنيه`,
        عملية: `تم إيداع ${amount} جنيه`,
        رصيدبعد: `${balance + amount} جنيه`,
      };
      balance += amount;
      span.innerHTML = `
    <span id="Balance" type="number">${balance} جنيه</span>`;
      isShowBalance = true;
      historyTrans.push(history);
    } else alert("القيمه التي أدخلتها غير صحيحه");
  }
};

const Withdraw = () => {
  oneTimePass();
  if (isOnePassword) {
    let withdraw = document.querySelector("#Withdraw");
    let amount = +withdraw.value;
    withdraw.value = "";
    if (amount <= 0) alert("القيمه التي أدخلتها غير صحيحه");
    else if (balance < amount) alert("الرصيد غير كافي");
    else {
      let history = {
        رصيدقبل: `${balance} جنيه`,
        عملية: `تم سحب ${amount} جنيه`,
        رصيدبعد: `${balance - amount} جنيه`,
      };
      balance -= amount;
      span.innerHTML = `
    <span id="Balance" type="number">${balance} جنيه</span>`;
      isShowBalance = true;
      historyTrans.push(history);
    }
  }
};

const historyTransaction = () => {
  oneTimePass();
  if (isOnePassword) {
    let table = document.querySelector("#Transaction");
    table.innerHTML = "";
    historyTrans.forEach((el, index) => {
      table.innerHTML += `<tr class="table-dark">
        <td>${index + 1}</td> 
        <td>${el.رصيدقبل}</td> 
        <td>${el.عملية}</td> 
        <td>${el.رصيدبعد}</td>
        </tr>`;
    });
  }
};
