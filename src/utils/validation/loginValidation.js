import {
    isEmptyObject,
    isEmpty,
    isLengthBetween,
    isEmail,
  } from '../../common/helpers/helpers'
  
export default function validateInput(data, thisCase) {
    const checkEmail = email => {
        if (isEmpty(email)) {
            errors.email = 'Email field is required'
        } else if (!isEmail(email)) {
            errors.email = 'Email is invalid'
        }
    }
    const checkPass = pass => {
        if (isEmpty(pass)) {
            errors.password = 'Password is required'
        } else if (!isLengthBetween(pass, { min: 5, max: 100 })) {
            errors.password = 'Password is not of sufficient Length. It should be atleast 8 characters.'
        }
    }
    const errors = {}
    switch (thisCase) {
        case 'email':
            checkEmail(data.email)
            break
        case 'password':
            checkPass(data.password)
            break
        default:
            checkEmail(data.email)
            checkPass(data.password)
            break

    }   
    return {
        errors,
        isValid: isEmptyObject(errors),
    }
}