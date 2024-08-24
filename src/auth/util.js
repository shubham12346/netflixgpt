import { getAuth } from "firebase/auth";

export const auth = getAuth();
// Initialize the Vertex AI service
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

export const checkEmailAndPassword = (email, password) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const checkEmail = emailPattern.test(email);

  const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,15}$/;

  const checkPassword = passwordPattern.test(password);
  console.log(email, password);
  if (!checkEmail) {
    return `Email not valid`;
  }
  if (!checkPassword) {
    return `Password not valid`;
  }
  return null;
};

export function cleanStringList(stringList) {
  // Join the array into a single string
  let combinedString = stringList.join("");

  // Remove newline characters
  combinedString = combinedString.replace(/\n/g, "");

  // Ensure spaces after commas are consistent
  // Convert the cleaned string back to an array
  // let resultArray;
  // try {
  //   resultArray = JSON.parse(combinedString);
  // } catch (e) {
  //   console.error("Error parsing JSON:", e);
  //   return [];
  // }
  let newArr = combinedString?.split(",");
  console.log("newArr");
  return newArr;
}
