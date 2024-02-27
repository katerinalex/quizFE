import { Lang } from './types/Lang';

const langOptions: Lang[] = ['English', 'French', 'German', 'Spanish'];

export const configuration = {
  English: {
    quiz1: {
      title: 'What is your preferred language?',
      subTitle: 'Choose language',
      options: langOptions,
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
      title: ['What do you ', 'hate', ' the most in a book?'],
      options: ['Lack of logic', 'A slow speed', 'Lack of humor', 'Way too generic ending'],
      button: 'Next',
    },
    quiz5: {
      title: 'What are your favorite topics?',
      subTitle: 'Choose up to 3 topics you like',
      options: {
        y_18_29 : ['Werewolf', 'Romance', 'Action','Young Adult', 'Royal Obsession', 'Bad Boy','Billionaire'],
        y_30_39  : ['Werewolf', 'Romance', 'Fashion','Witch', 'Jewelry', 'Cowboys','Startups'],
        y_40_49 : ['Animals', 'Romance', 'Dance','Witch', 'Royal Family', 'Cowboys','Billionaire'],
        y_50 : ['Animals', 'Romance', 'Fashion','Young Adult', 'Princess', 'cowboys','Startups'],
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
  French: {
    quiz1: {
      title: 'What is your preferred language?',
      subTitle: 'Choose language',
      options: langOptions,
    },
    quiz2: {
      title: 'À quel genre vous identifiez-vous ??',
      subTitle: 'Veuillez partager comment vous identifiez-vous',
      options: ['Femme', 'Homme', 'Autre'],
    },
    quiz3: {
      title: 'Quel est votre âge ?',
      options: ['18-29 ans', '30-39 ans', '40-49 ans', '50+'],
    },
    quiz4: {
      title: ['Qu\'est-ce que vous ', 'détestez', ' le plus dans un livre ?'],
      options: ['Manque de logique', 'Une vitesse lente', 'Manque d\'humour', 'Fin beaucoup trop générique'],
      button: 'Suivant',
    },
    quiz5: {
      title: 'Quels sont vos sujets favoris ?',
      subTitle: 'Choisissez jusqu\'à 3 sujets que vous aimez',
      options : {
        y_18_29 : ['Loup-garou', 'Romance', 'Action', 'Jeune adulte', 'Obsession royale', 'Bad Boy', 'Milliardaire'],
        y_30_39 : ['Loup-garou', 'Romance', 'Mode', 'Sorcière', 'Bijoux', 'Cowboys', 'Startups'],
        y_40_49 : ['Animaux', 'Romance', 'Danse', 'Sorcière', 'Famille Royale', 'Cowboys', 'Milliardaire'],
        y_50 : ['Animaux', 'Romance', 'Mode', 'Jeune adulte', 'Princesse', 'cowboys', 'Startups'],
      },
      button: 'Suivant',
    },
    quizLoading: {
      title: 'Trouver des collections pour vous...',
    },
    quizEmail: {
      title: 'E-mail',
      subTitle: 'Entrez votre email pour obtenir un accès complet',
      placeholder: 'Votre email',
      warning: 'E-mail invalide',
      agreement: ['En continuant, j\'accepte avec ', 'Politique de confidentialité ', 'et ', 'Conditions d\'utilisation', '.'],
      button: 'Suivant',
    },
    quizResult: {
      title: 'Merci',
      subTitle: 'pour nous avoir soutenus et avoir réussi le quiz',
      text: 'Télécharger mes réponses',
      button: 'Reprendre le quiz',
    },
  },
  German: {
    quiz1: {
      title: 'What is your preferred language?',
      subTitle: 'Choose language',
      options: langOptions,
    },
    quiz2: {
      title: 'Mit welchem Geschlecht identifizierst du dich?',
      subTitle: 'Bitte teilen Sie mit, wie Sie sich identifizieren',
      options: ['Weiblich', 'Männlich', 'Andere'],
    },
    quiz3: {
      title: 'Wie alt bist du?',
      options: ['18-29 Jahre', '30-39 Jahre', '40-49 Jahre', '50+'],
    },
    quiz4: {
      title: ['Was ', 'hassen', ' Sie am meisten in einem Buch?'],
      options: ['Mangel an Logik', 'Eine langsame Geschwindigkeit', 'Mangel an Humor', 'Viel zu allgemeines Ende'],
      button: 'Weiter',
    },
    quiz5: {
      title: 'Was sind deine Lieblingsthemen?',
      subTitle: 'Wählen Sie bis zu 3 Themen aus, die Ihnen gefallen',
      options: {
        y_18_29: ['Werwolf', 'Romanze', 'Action', 'Junger Erwachsener', 'Royal Obsession', 'Bad Boy', 'Milliardär'],
        y_30_39: ['Werwolf', 'Romantik', 'Mode', 'Hexe', 'Schmuck', 'Cowboys', 'Startups'],
        y_40_49: ['Tiere', 'Romantik', 'Tanz', 'Hexe', 'Königliche Familie', 'Cowboys', 'Milliardär'],
        y_50: ['Tiere', 'Romantik', 'Mode', 'Junger Erwachsener', 'Prinzessin', 'Cowboys', 'Startups'],
      },
      button: 'Weiter',
    },
    quizLoading: {
      title: 'Sammlungen für Sie finden...',
    },
    quizEmail: {
      title: 'E-Mail',
      subTitle: 'Geben Sie Ihre E-Mail-Adresse ein, um vollen Zugriff zu erhalten',
      placeholder: 'Ihre E-Mail',
      warning: 'Ungültige E-Mail',
      agreement: ['Indem ich fortfahre, stimme ich mit ', 'Datenschutzerklärung ', 'und ', 'Nutzungsbedingungen', '.'],
      button: 'Weiter',
    },
    quizResult: {
      title: 'Danke',
      subTitle: 'Für deine Unterstützung und das Bestehen des Quizz',
      text: 'Meine Antworten herunterladens',
      button: 'Quiz wiederholen',
    },
  },
  Spanish: {
    quiz1: {
      title: 'What is your preferred language?',
      subTitle: 'Choose language',
      options: langOptions,
    },
    quiz2: {
      title: '¿Con qué género te identificas?',
      subTitle: 'Por favor comparte cómo te identificas',
      options: ['Mujer', 'Hombre', 'Otro'],
    },
    quiz3: {
      title: '¿Cuál es tu edad?',
      options: ['18-29 años', '30-39 años', '40-49 años', '50+'],
    },
    quiz4: {
      title: ['¿Qué es lo que más ', 'odias', ' en un libro?'],
      options: ['Falta de lógica', 'Una velocidad lenta', 'Falta de humor', 'Final demasiado genérico'],
      button: 'Siguiente',
    },
    quiz5: {
      title: '¿Cuáles son tus temas favoritos?',
      subTitle: 'Elige hasta 3 temas que te gusten',
      options: {
        y_18_29: ['Hombre lobo', 'Romance', 'Acción', 'Adulto joven', 'Obsesión real', 'Chico malo', 'Multimillonario'],
        y_30_39: ['Hombre lobo', 'Romance', 'Moda', 'Bruja', 'Joyería', 'Vaqueros', 'Startups'],
        y_40_49: ['Animales', 'Romance', 'Danza', 'Bruja', 'Familia Real', 'Vaqueros', 'Multimillonario'],
        y_50 : ['Animales', 'Romance', 'Moda', 'Adulto Joven', 'Princesa', 'vaqueros', 'Startups'],
      },
      button: 'Siguient',
    },
    quizLoading: {
      title: 'Encontrar colecciones para usted...',
    },
    quizEmail: {
      title: 'Correo electrónico',
      subTitle: 'Ingrese su correo electrónico para obtener acceso completo',
      placeholder: 'Tu correo electrónico',
      warning: 'correo electrónico no válido',
      agreement: ['Al continuar estoy de acuerdo con ', 'Política de privacidad ', 'y ', 'Términos de uso', '.'],
      button: 'Siguiente',
    },
    quizResult: {
      title: 'Gracias',
      subTitle: 'por apoyarnos y aprobar el examen',
      text: 'Descargar mis respuestas',
      button: 'Volver a realizar el cuestionario',
    },
  },
};