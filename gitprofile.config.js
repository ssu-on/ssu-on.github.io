// gitprofile.config.js

const config = {
  github: {
    username: 'ssu-on', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 5, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    facebook: '',
    instagram: 'https://instagram/ssu__on',
    behance: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'archblossom@g.skku.edu',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'Git',
    'CSS',
    'Android Studio',
    'Unity',
    'Blender',
  ],
  experiences: [
    {
      company: 'AutoSemantics',
      position: 'AI model developer, UI/UX developer',
      from: 'April 2022',
      to: 'December 2022',
      companyLink: 'https://www.autosemantics.co.kr/',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ],
  education: [
    {
      institution: "Seo2 Element School",
      degree: 'Degree',
      from: '2007',
      to: '2012',
    },
    {
      institution: "Seoun Middle School",
      degree: 'Degree',
      from: '2012',
      to: '2015',
    },
    {
      institution: "Sehwa Girls' High School",
      degree: 'Degree',
      from: '2015',
      to: '2018',
    },
    {
      institution: 'Department of Software at Sungkyunkwan University',
      degree: 'Bachelor Degree',
      from: '2020',
      to: 'present',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'About me',
      description:
        "Hi! I am Suyeon Jeon, a senior at SKKU, majoring in software. My interests are computer graphics, game development, and deep learning. I am currently developing a game as a member of feRia's team.",
      imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Fkr%2Ffree-icon%2Fsnowflake_1842576&psig=AOvVaw25KtShSQC9FbaCxXLfF_VT&ust=1685256656805000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLDxvLf0lP8CFQAAAAAdAAAAABAD',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
};

export default config;
