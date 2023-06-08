import * as Yup from 'yup';

export const contactUsSchema = Yup.object({
    name: Yup.string().min(2).max(20).required('Please Enter Your Name'),
    email: Yup.string().email().required('Please enter your email'),
    phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required('A phone number is required'),
    mesg: Yup.string().min(2).max(20).required('Please enter your message'),
    sub:  Yup.string().min(2).max(10).required('Please enter your message'),
    submit:('please fill all blank fileds')
});
