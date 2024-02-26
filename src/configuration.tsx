export type ConfigurationType = {
  english: {
    quiz1: {
      title: 'What is your preferred language??',
      subTitle: 'Choose language',
      options: ['English', 'French', 'German', 'Spanish'],
    },
    quiz2: {
      title: 'What gender do you identify with?',
      subTitle: 'Please share how do you identify yourself',
      options: ['Female', 'Male', 'Other'],
    },
    quiz3: {
      title: 'What is your age?',
      options: ['18-29 years', '30-39 years', '40-49 years', '50+'],
    },
    quiz4: {
      title: 'What do you hate the most in a book?',
      options: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
      button: 'Next',
    },
    quiz5: {
      title: 'What are your favorite topics?',
      subTitle: 'Choose up to 3 topics you like',
      options: {
        y_18_29 : ['1', '2', '3','4', '5', '6','7'],
        y_30_39  : ['1', '2', '3','4', '5', '6','7'],
        y_40_49 : ['1', '2', '3','4', '5', '6','7'],
        y_50 : ['1', '2', '3','4', '5', '6','7'],
      },
      button: 'Next',
    },
    quizLoading: {
      title: 'Finding collections for you...',
    },
    quizEmail: {
      title: 'Email',
      subTitle: 'Enter your email to get full access',
      placeholder: 'Your email',
      warning: 'Invalid email',
      agreement: ['By continuing I agree with ', 'Privacy policy ', 'and ', 'Terms of use', '.'],
      button: 'Next',
    },
    quizResult: {
      title: 'Thank you',
      subTitle: 'for supporting us and passing quiz',
      text: 'Download my answers',
      button: 'Retake quiz',
    },
  },
}

export const configuration = {
  english: {
    quiz1: {
      title: 'What is your preferred language??',
      subTitle: 'Choose language',
      options: ['English', 'French', 'German', 'Spanish'],
    },
    quiz2: {
      title: 'What gender do you identify with?',
      subTitle: 'Please share how do you identify yourself',
      options: ['Female', 'Male', 'Other'],
    },
    quiz3: {
      title: 'What is your age?',
      options: ['18-29 years', '30-39 years', '40-49 years', '50+'],
    },
    quiz4: {
      title: 'What do you hate the most in a book?',
      options: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
      button: 'Next',
    },
    quiz5: {
      title: 'What are your favorite topics?',
      subTitle: 'Choose up to 3 topics you like',
      options: {
        y_18_29 : ['1', '2', '3','4', '5', '6','7'],
        y_30_39  : ['1', '2', '3','4', '5', '6','7'],
        y_40_49 : ['1', '2', '3','4', '5', '6','7'],
        y_50 : ['1', '2', '3','4', '5', '6','7'],
      },
      button: 'Next',
    },
    quizLoading: {
      title: 'Finding collections for you...',
    },
    quizEmail: {
      title: 'Email',
      subTitle: 'Enter your email to get full access',
      placeholder: 'Your email',
      warning: 'Invalid email',
      agreement: ['By continuing I agree with ', 'Privacy policy ', 'and ', 'Terms of use', '.'],
      button: 'Next',
    },
    quizResult: {
      title: 'Thank you',
      subTitle: 'for supporting us and passing quiz',
      text: 'Download my answers',
      button: 'Retake quiz',
    },
  },
};