const header = {
  homepage: 'https://sarahmkelly.com'
}

const about = {
  name: 'Sarah Marie Kelly',
  role: 'Software Engineer | Seattle, WA',
  description:
    'Enjoys writing sensible, highly efficient and usable code to solve complex problems and make a difference.',
    resume: 'https://sarahkellyresume.tiiny.site/',
    social: {
  linkedin: 'https://www.linkedin.com/in/sarah-kelly-se/',
  github: 'https://github.com/smkelly1691',
},
}

const projects = [
  {
    name: 'Toddler Time Project',
    description:
      'The Toddler Time Project helps those taking care of small children at home and finding it difficult to keep them entertained and progressively learning leading up to school age. This full stack application allows caregivers of small children to create weekly activity plans and add a variety of activities categorized by the benefit it brings to the child in order to create days full of learning and fun!!',
    stack: ['REACT', 'JAVASCRIPT', 'EXPRESS', 'NODE', 'MONGODB'],
    sourceCode: 'https://github.com/smkelly1691/toddlertime',
    livePreview: 'https://toddlertime.herokuapp.com',
  },
  {
    name: 'Kelly Academy Project',
    description:
      'The Kelly Academy is an activity tracking application where parents of children enrolled in the school program can review data regarding the activity of their child while at school such as specific learning activities while in class and meals served. <br> Sometimes it can be difficult to leave your child, especially those of younger ages, for extended periods of time and being able to access a site/app with recent data about what your child is doing can aid in relieving some of this difficulty',
    stack: ['EXPRESS', 'NODE', 'MONGODB', 'HTML'],
    sourceCode: 'https://github.com/smkelly1691/kelly-academy',
    livePreview: 'https://kelly-academy.onrender.com/',
  },
  {
    name: 'GoalTracker Project',
    description:
      'Worked together with two other Software Engineers to create a Full Stack Application. GoalTracker is an application that allows users to set and track personal goals in order to remain productive and motivated. It can be difficult to remember the plethora of high-achieving goals you would like to complete, that is where GoalTracker comes in. With a (few) click(s) of a button(s), you can create, update, complete your goals AND.. add a reward. While this application cannot hand you a physical reward, you can create your own reward to give to yourself.',
    stack: ['PYTHON', 'HTML', 'CSS'],
    sourceCode: 'https://github.com/smkelly1691/goaltracker',
    livePreview: 'https://goaltracker96.herokuapp.com/',
  },
  {
    name: 'Hangman Project',
    description:
      'Designed a browser game with win/loss logic as Project 1 for General Assembly’s Software Engineering Immersion Program using HTML, CSS, and JavaScript to render a game in the browser within 7 days. Delivered and deployed a working in-browser game of Hangman that satisfied all technical requirements including win/loss logic and rendered win/loss messages using HTML, Used conventional code including proper indentation and white space, sensible naming conventions, and a clean, styled, presentation.',
    stack: ['HTML', 'CSS', 'JAVASCRIPT'],
    sourceCode: 'https://github.com/smkelly1691/hangman',
    livePreview: 'https://smkelly1691.github.io/hangman/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'SQL',
  'React',
  'SASS',
  'Material UI',
  'Git',
  'GitHub',
  'Python',
  'Express',
  'MongoDB',
  'AWS',
  'UNIX',
  'AJAX',
  'oAuth'

]

const contact = {
  email: 'skelly1691@gmail.com',
}

export { header, about, projects, skills, contact }