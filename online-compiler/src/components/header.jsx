import React from "react";

// 1- CSS - 
// 2- react dependencies - styled-components, sass
// 3- material UI


// functionalites-
// 1- login page / register page - cookies, backend - java 
// 2- home page - deploy code on common DB/cloud (credentials through)
// 3- compiler page - day/night Toggle, save button to auto complete, download code, chatgpt ai integrate to give autosuggestion,
//                   file upload/code Write, different languages dropdown, I/O stream, code description
// 4- score page, challenges, on the baiss of errors - syntax error, logical, exception handling
// love you riya

const heading={
  backgroundColor: red,
}

function Header() {
  return (
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Header;
