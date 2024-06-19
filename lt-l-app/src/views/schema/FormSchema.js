export const FormSchema = {
    firstName: {
      placeholderText: "Enter your first name",
      key: "firstName",
      options: {
        required: "Please enter a name",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: RegExp(/[^ ][A-Za-z-'.\s]+$/),
          message: "Please enter a valid name.",
        },
      },
    },
    lastName: {
      placeholderText: "Enter your last name",
      key: "lastName",
      options: {
        required: "please enter a name",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: RegExp(/[^ ][A-Za-z-'.\s]+$/),
          message: "please enter a valid name",
        },
      },
    },
    country: {
      placeholderText: "select country",
      key: "country",
      options: {
        required: "please select country",
        maxLength: {
          value: 90,
        },
        pattern: {
          value:RegExp(/[^ ][A-Za-z-'.\s]+$/),
          message: "select country",
        },
      },
    },
    phone: {
      placeholderText: "enter phone number",
      key: "phone",
      options: {
        required: "Enter a phone number",
        maxLength: {
          value: 90,
        },
        pattern: {
          value:RegExp(/[0-9]{10}/),
          message: "Enter a valid phone number.",
        },
      },
    },
    email: {
      placeholderText: "enter your email",
      key: "email",
      options: {
        required: "Enter a email address",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: "",// RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
          message: "Enter a valid email address.",
        },
      },
    },
    username: {
      placeholderText: "enter your username",
      key: "username",
      options: {
        required: "Enter a username",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: RegExp(/[^ ][A-Za-z-'.\s]+$/),
          message: "Enter a valid username",
        },
      },
    },
    id: {
      placeholderText: "Enter username or email address",
      key: "id",
      type: "id",
      options: {
        required: "Please enter username or email address",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: RegExp(/[^ ][A-Za-z-'.\s]+$/),
          message: "Enter a valid username or email address",
        },
      },
    },
    password: {
      placeholderText: "Enter your password",
      key: "password",
      type: "password",
      options: {
        required: "Please enter password",
        maxLength: {
          value: 90,
        },
        pattern: {
          value: RegExp(/[0-9,a-z,A-Z]{8,}/),
          message: "please enter a valid password",
        },
      },
    },
  };  