import { validateEmail } from "./libs/utilities/validateEmail";

export const validations = {
  users: {
    email: {
      isEmail: {
        bail: true,
      },
      unique: true,
      custom: {
        options: (email: string) => {
          if (!email) {
            throw 'Please provide email';
          } else if (!validateEmail(email)) {
            throw 'Please provide valid email';
          }
          return true;
        }
      },
      in: ['body'],
      required: true,
      errorMessage: 'Please provide a valid email id',
    },
    firstname: {
      custom: {
        options: (name: string) => {
          if (!name) {
            throw 'Please provide first name';
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
    lastname: {
      custom: {
        options: (name: string) => {
          if (!name) {
            throw 'Please provide last name';
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
    password: {
      custom: {
        options: (password: string) => {
          if (!password) {
            throw 'Please provide password';
          }
          return true;
        },
      },
      exists: {
        errorMessage: 'Please Provide password',
      },
      in: ['body'],
      required: true,
      isString: true,
    },
  },
  loginuser: {
    email: {
      isEmail: {
        bail: true,
      },
      unique: true,
      custom: {
        options: (email: string) => {
          if (!email) {
            throw 'Please provide email';
          } else if (!validateEmail(email)) {
            throw 'Please provide valid email';
          }
          return true;
        }
      },
      in: ['body'],
      required: true,
      errorMessage: 'Please provide a valid email id',
    },
    password: {
      custom: {
        options: (password: string) => {
          if (!password) {
            throw 'Please provide password';
          }
          return true;
        },
      },
      exists: {
        errorMessage: 'Please Provide password',
      },
      in: ['body'],
      required: true,
      isString: true,
    },
  },
  createCandidate: {
    name: {
      options: (name: string) => {
        if (!name) {
          throw 'Please provide name';
        } else if (name.length > 200) {
          throw 'name can not be more than 200 characters.';
        }
        return true;
      },
      errorMessage: 'Name is wrong be must a String',
      exists: {
        errorMessage: 'Please Provide name',
      },
      in: ['body'],
      required: true,
      isString: true,
    },
    email: {
      isEmail: {
        bail: true,
      },
      unique: true,
      custom: {
        options: (email: string) => {
          if (!email) {
            throw 'Please provide email';
          } else if (!validateEmail(email)) {
            throw 'Please provide valid email';
          }
          return true;
        }
      },
      in: ['body'],
      required: true,
      errorMessage: 'Please provide a valid email id',
    },
    experience: {
      options: (experience: number) => {
        if (!experience) {
          throw 'Please provide experience in years';
        }
        return true;
      },
      errorMessage: 'Experience is wrong, must be a number',
      exists: {
        errorMessage: 'Please Provide experience',
      },
      in: ['body'],
      required: true,
      isString: true,
    },
    jobProfile: {
      options: (jobProfile: string) => {
        if (!jobProfile) {
          throw 'Please provide jobProfile';
        }
        return true;
      },
      errorMessage: 'jobProfile is wrong, must be a String',
      exists: {
        errorMessage: 'Please Provide jobProfile',
      },
      in: ['body'],
      required: true,
      isString: true,
    },
  },
  getCandidates: {
    
  }
}