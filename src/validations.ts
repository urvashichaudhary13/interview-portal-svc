import { validateEmail } from "./libs/utilities/validateEmail";

export const validations = {
    users: {
        email: {
            isEmail: {
              bail: true,
            },
            unique:true,
            custom: {
                options: (email:string) => {
                    if(!email){
                        throw 'Please provide email';
                    } else if (!validateEmail(email)){
                        throw 'Please provide valid email';
                    }
                    return true;
                }
            },
            in: ['body'],
            required: true,
            errorMessage: 'Please provide a valid email id',
          },
          name: {
            custom: {
              options: (name: string) => {
                if (!name) {
                  throw 'Please Provide name';
                } else if (name.length > 200) {
                  throw 'name can not be more than 200 characters.';
                }
                return true;
              },
            },
            errorMessage: 'Name is wrong be must a String',
            exists: {
              errorMessage: 'Please Provide name',
            },
            in: ['body'],
            required: true,
            isString: true,
          },
    }
}