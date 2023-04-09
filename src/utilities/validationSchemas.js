import * as yup from "yup";

export const emailSchema = yup.object().shape({})

export const contactFormSchema = yup.object().shape({
    name: yup
    .string()
    .required("What's your name?"),

    email: yup
    .string()
    .email()
    .required("What's your email address?"),

    message: yup
    .string()
    .required("What do you want to tell me?")

})



// export const signUpSchema = yup.object().shape({
//     password: yup
//         .string()
//         .required("Password is requried")
//         .min(8, "Password must be 8 characters long")
//         .matches(/[0-9]/, "Password requires a number")
//         .matches(/[a-z]/, "Password requires a lowercase letter")
//         .matches(/[A-Z]/, "Password requires an uppercase letter")
//         .matches(/[^\w]/, "Password requires a symbol")
//         ,
//     passwordConfirm: yup
//         .string()
//         .required("Please confirm password")
//         .oneOf([yup.ref("password"), null], 'Must match "password" field value'),
//     firstname: yup.string().required("First name is requierd"),
//     lastname: yup.string().required("Last name is requierd"),
//     email: yup.string().email("Must be a valid email").required("Email is requierd"),
//     phone: yup
//         .string()
//         .matches(
//             /^0{1}[25]{1}[0-9]{7,12}$|^\+{1}[1-9][0-9]{7,14}$/,
//             "Must be a valid phone number"
//         )
//         .required("Phone number is requierd"),
//     Chapter: yup.string().required("Institution is requierd"),
//     dateofbirth: yup.string().required("Date of birth is requierd"),
//     address: yup.string().required("Address is requierd"),
//     admissionyear: yup
//         .string()
//         .matches(/\d{4}/, "Please select admission year")
//         .required("Admission year is requierd"),
//     completionyear: yup
//         .string()
//         .matches(/\d{4}/, "Please select completion year")
//         .required("Conpletion year is requierd"),
//     Constituency: yup.string().required("Constituency is requierd"),
//     District: yup.string().required("District is requierd"),
//     Region: yup.string().required("Region is required"),
// });
