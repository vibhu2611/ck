// import React,{Fragment} from "react";
// import {useFormik, formik } from "formik";

// const SimpleForm =(props) =>{
//     const {togglelist, ToggleSocial}=props;
//     const initialValues = {
//         name: "",
//         email: "",
//         password: "",
//         confirm_password: "",
//         phone:"",
//         sub:"",
//         mesg:"",
//       };
      
//         const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//           useFormik({
//             initialValues,
//             // validationSchema: '',
//             onSubmit: (values, action) => {
//               console.log(
//                 " ~  ~ values",
//                 values
//               );
//               action.resetForm();
//             togglelist({toggleSocialList:!ToggleSocial})
//             },
//           });
//         console.log(
//         );
//   return (
//     <Fragment>
//        <form onSubmit={()=>{handleSubmit()}}>
//                 <div className="row">
//                   <div className="col-sm-6">
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Your Name"
//                       className="inptFld"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       required
//                     />
//                   </div>

//                   <div className="col-sm-6">
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Email Address"
//                       className="inptFld"
//                       vvalue={values.email}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       required
//                     />
//                   </div>

//                   <div className="col-sm-6">
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder="Phone Number"
//                       className="inptFld"
//                       value={values.phone}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       required
//                     />
//                   </div>

//                   <div className="col-sm-6">
//                     <input
//                       type="text"
//                       id="sub"
//                       name="sub"
//                       placeholder="Subject"
//                       className="inptFld"
//                       required
//                       value={values.sub}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                     />
//                   </div>

//                   <div className="col-12">
//                     <textarea
//                       className="inptFld"
//                       id="mesg"
//                       name="mesg"
//                       rows=""
//                       cols=""
//                       placeholder="Your Message..."
//                       value={values.mesg}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       required
//                     ></textarea>
//                   </div>

//                   <div className="col-12">
//                     <div className=" d-flex justify-content-center">
//                       <input
//                         type="button"
//                         id="subform"
//                         name="submit"
//                          value="SUBMIT"
//                         className="inptBtn reverse-btn"
//                         onClick={()=>handleSubmit()}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </form>
//     </Fragment>
//   );
// }

// export default SimpleForm;
