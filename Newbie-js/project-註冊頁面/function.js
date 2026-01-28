function isValidEmail(email) {
  return email.includes("@") && email.includes(".");
}

function isValidName(firstname) {
  return firstname.trim().length > 6; // 非空
}

function isValidName(lastname) {
  return lastname.trim().length >= 3; // 非空
}

function isValidPassword(password) {
  return password.length >= 6; // 最少6碼
}

// 這個只有針對值有沒有填寫做判斷
// function send() {
//   const inputs = document.querySelectorAll("[data-required]");
//   // console.log(inputs, "222222");
//   let isValid = true;
//   inputs.forEach((input) => {
//     // console.log(input, "1111111");
//     const errorE1 = input.closest(".field").querySelector(".input-error-text");
//     // console.log(errorE1, "33333333");
//     if (!input.value.trim()) {
//       errorE1.textContent = input.dataset.error;
//       errorE1.style.display = "flex";
//       console.log(errorE1.textContent);
//       isValid = false;
//     } else {
//       errorE1.textContent = "";
//     }
//   });
//   return isValid;
// }

function send() {
  const inputs = document.querySelectorAll("[data-required]");
  let isValid = true;

  inputs.forEach((input) => {
    const errorEl = input.closest(".field").querySelector(".input-error-text");
    const value = input.value.trim();
    const type = input.dataset.type;

    let fieldValid = true;

    // 1️⃣ 必填檢查（所有欄位）
    if (!value) {
      fieldValid = false;
      errorEl.textContent = input.dataset.error || "此欄位必填";
    }

    // 2️⃣ 類型檢查（只在有值時）
    if (fieldValid && type === "email" && !isValidEmail(value)) {
      fieldValid = false;
      errorEl.textContent = "Email 格式不正確";
    }

    if (fieldValid && type === "password" && !isValidPassword(value)) {
      fieldValid = false;
      errorEl.textContent = "密碼至少 6 碼";
    }

    if (fieldValid && type === "lastname" && !isValidName(value)) {
      fieldValid = false;
      errorEl.textContent = "姓名格式不正確";
    }

    if (fieldValid && type === "firstname" && !isValidName(value)) {
      fieldValid = false;
      errorEl.textContent = "姓名格式不正確";
    }

    // 3️⃣ UI 統一處理
    if (!fieldValid) {
      errorEl.style.display = "flex";
      isValid = false;
    } else {
      errorEl.textContent = "";
      errorEl.style.display = "none";
    }
    // alert("Update successful");
  });

  return isValid;
}
