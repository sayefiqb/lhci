const profiles = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Christoforos Christoforou",
    title: "Faculty",
    about:
      "Christoforos Christoforou currently works at the Department of Computer Science, Mathematics and Science, St. John's University. Christoforos does research in Computational Neuroscience, Machine learning, Artificial Intelligence and Data Mining. Their current project is 'Neural-based predictive analytics.' Their most recent publication is 'Your Brain on Movies:A Computational Approach for Predicting Box-office Performance from Viewer’s Brain Responses to Movie Trailers",
    image_url: "./chris.jpg",
    designation: ["Assitant Professor"],
    department: "Computer Science and Mathematics",
    education: [
      "PhD, Computer Science , City University of New York - The Graduate Center",
      "MPhil, Computer Science, City University of New York - The Graduate Center",
      "MS, Computer Science, The City College of the City University of New York"
    ],
    contact: {
      address: "St.Augustine Hall Queens 2-098",
      phone: "718-990-7998",
      email: "chris@stjohns.edu"
    },
    website: "https://scholar.google.com/citations?user=0PkTM-MAAAAJ&hl=en",
    publications: [
      {
        title:
          "In a blink of an eye and a switch of a transistor: cortically coupled computer vision",
        authors:
          "Paul Sajda, Eric Pohlmeyer, Jun Wang, Lucas C Parra, Christoforos Christoforou, Jacek Dmochowski, Barbara Hanna, Claus Bahlmann, Maneesh Kumar Singh, Shih-Fu Chang",
        proceeding: "Proceedings of the IEEE 98 (3), 462-478"
      },
      {
        title: "Spatiotemporal linear decoding of brain state",
        authors:
          "Lucas C Parra, Christoforos Christoforou, Adam C Gerson, Mads Dyrholm, An Luo, Mark Wagner, Marios G Philiastides, Paul Sajda",
        proceeding: "IEEE Signal Processing Magazine 25 (1), 107-115"
      },
      {
        title: "Bilinear discriminant component analysis",
        authors: "M Dyrholm, C Christoforou, LC Parra",
        proceeding: "Journal of Machine Learning Research 8 (May), 1097-1111"
      },
      {
        title: "Second-order bilinear discriminant analysis",
        authors: "C Christoforou, R Haralick, P Sajda, LC Parra",
        proceeding: "Journal of Machine Learning Research 11 (Feb), 665-685"
      },
      {
        title: "Cognitive and Linguistic Dynamics of Reading Remediation",
        authors: "TC Papadopoulos, C Ktisti, C Christoforou, M Loizou",
        proceeding:
          "Cognition, Intelligence, and Achievement: A Tribute to J. P. Das, 331-343"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "John Doe",
    title: "Lab Assistant",
    about: "John Doe is a lab assistant at St. John's university",
    image_url: "./john.jpg",
    designation: ["Assitant Professor"],
    department: "Computer Science and Mathematics",
    education: [
      "PhD, Computer Science , City University of New York - The Graduate Center",
      "MPhil, Computer Science, City University of New York - The Graduate Center",
      "MS, Computer Science, The City College of the City University of New York"
    ],
    contact: {
      address: "St.Augustine Hall Queens 2-098",
      phone: "718-990-7998",
      email: "chris@stjohns.edu"
    },
    website: "https://scholar.google.com/citations?user=0PkTM-MAAAAJ&hl=en",
    publications: [
      {
        title:
          "Neural correlates of inspection time task performance: A developmental study",
        authors: "TC Papadopoulos, C Ktisti, C Christoforou, M Loizou",
        proceeding:
          "Cognition, Intelligence, and Achievement: A Tribute to J. P. Das, 331-343"
      },
      {
        title:
          "The bilinear brain: Bilinear methods for EEG analysis and brain computer interfaces",
        authors: "C Christoforou",
        proceeding: "City University of New York"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbccd471884",
    name: "Linda Ray",
    title: "Student",
    about: "John Doe is a lab assistant at St. John's university",
    image_url: "./linda.jpeg",
    designation: ["Assitant Professor"],
    department: "Computer Science and Mathematics",
    education: [
      "PhD, Computer Science , City University of New York - The Graduate Center",
      "MPhil, Computer Science, City University of New York - The Graduate Center",
      "MS, Computer Science, The City College of the City University of New York"
    ],
    contact: {
      address: "St.Augustine Hall Queens 2-098",
      phone: "718-990-7998",
      email: "chris@stjohns.edu"
    },
    website: "https://scholar.google.com/citations?user=0PkTM-MAAAAJ&hl=en",
    publications: [
      {
        title:
          "Neural correlates of inspection time task performance: A developmental study",
        authors: "TC Papadopoulos, C Ktisti, C Christoforou, M Loizou",
        proceeding:
          "Cognition, Intelligence, and Achievement: A Tribute to J. P. Das, 331-343"
      },
      {
        title:
          "The bilinear brain: Bilinear methods for EEG analysis and brain computer interfaces",
        authors: "C Christoforou",
        proceeding: "City University of New York"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbccd5921824",
    name: "Michio Kaku",
    title: "Assistant Professor",
    about: "John Doe is a lab assistant at St. John's university",
    image_url: "./kaku.jpg",
    designation: ["Assitant Professor"],
    department: "Computer Science and Mathematics",
    education: [
      "PhD, Computer Science , City University of New York - The Graduate Center",
      "MPhil, Computer Science, City University of New York - The Graduate Center",
      "MS, Computer Science, The City College of the City University of New York"
    ],
    contact: {
      address: "St.Augustine Hall Queens 2-098",
      phone: "718-990-7998",
      email: "chris@stjohns.edu"
    },
    website: "https://scholar.google.com/citations?user=0PkTM-MAAAAJ&hl=en",
    publications: [
      {
        title:
          "Neural correlates of inspection time task performance: A developmental study",
        authors: "TC Papadopoulos, C Ktisti, C Christoforou, M Loizou",
        proceeding:
          "Cognition, Intelligence, and Achievement: A Tribute to J. P. Das, 331-343"
      },
      {
        title:
          "The bilinear brain: Bilinear methods for EEG analysis and brain computer interfaces",
        authors: "C Christoforou",
        proceeding: "City University of New York"
      }
    ]
  }
];

const projects = [
  {
    id: "101",
    title:
      "From the eyes and the heart: A novel eye-gaze metric that predicts video preferences of a large audience",
    abstract:
      "Eye-tracking has been extensively used to quantify audience preferences in the context of marketing and advertising research, primarily in methodologies involving static images or stimuli (i.e., advertising, shelf testing, and website usability). However, these methodologies do not generalize to narrative-based video stimuli where a specific storyline is meant to be communicated to the audience. In this paper, a novel metric based on eye-gaze dispersion (both within and across viewings) that quantifies the impact of narrative-based video stimuli to the preferences of large audiences is presented. The metric is validated in predicting the performance of video advertisements aired during the 2014 Super Bowl final. In particular, the metric is shown to explain 70% of the variance in likeability scores of the 2014 Super Bowl ads as measured by the USA TODAY Ad-Meter. In addition, by comparing the proposed metric with Heart Rate Variability (HRV) indices, we have associated the metric with biological processes relating to attention allocation. The underlying idea behind the proposed metric suggests a shift in perspective when it comes to evaluating narrative-based video stimuli. In particular, it suggests that audience preferences on video are modulated by the level of viewers lack of attention allocation. The proposed metric can be calculated on any narrative-based video stimuli (i.e., movie, narrative content, emotional content, etc.), and thus has the potential to facilitate the use of such stimuli in several contexts: prediction of audience preferences of movies, quantitative assessment of entertainment pieces, prediction of the impact of movie trailers, identification of group, and individual differences in the study of attention-deficit disorders, and the study of desensitization to media violence."
  },
  {
    id: "102",
    title: "Predicts video preferences of a large audience",
    abstract:
      "Eye-tracking has been extensively used to quantify audience preferences in the context of marketing and advertising research, primarily in methodologies involving static images or stimuli (i.e., advertising, shelf testing, and website usability). However, these methodologies do not generalize to narrative-based video stimuli where a specific storyline is meant to be communicated to the audience. In this paper, a novel metric based on eye-gaze dispersion (both within and across viewings) that quantifies the impact of narrative-based video stimuli to the preferences of large audiences is presented. The metric is validated in predicting the performance of video advertisements aired during the 2014 Super Bowl final. In particular, the metric is shown to explain 70% of the variance in likeability scores of the 2014 Super Bowl ads as measured by the USA TODAY Ad-Meter. In addition, by comparing the proposed metric with Heart Rate Variability (HRV) indices, we have associated the metric with biological processes relating to attention allocation. The underlying idea behind the proposed metric suggests a shift in perspective when it comes to evaluating narrative-based video stimuli. In particular, it suggests that audience preferences on video are modulated by the level of viewers lack of attention allocation. The proposed metric can be calculated on any narrative-based video stimuli (i.e., movie, narrative content, emotional content, etc.), and thus has the potential to facilitate the use of such stimuli in several contexts: prediction of audience preferences of movies, quantitative assessment of entertainment pieces, prediction of the impact of movie trailers, identification of group, and individual differences in the study of attention-deficit disorders, and the study of desensitization to media violence."
  }
];

const area_of_interests = [
  {
    id: "aoi101",
    title: "Brain Computer Interfaces",
    summary:
      "We are developing brain computer interfaces (BCIs) which opportunistically measure neural engagement.",
    description:
      "When we interact and cooperate with other humans, they usually understand and predict what we will do. The same cannot be said of computers, which usually wait to be told what to do next. Using the latest technology, our research explores computer-human interactions with data and the world. We want computers to understand what users’ goals are when they perform specific tasks, and to enhance their user experience. Our goal is to make computers to 'think ahead', and be responsive in their interactions with humans.",
    image_url: "./cardpic1.png"
  },
  {
    id: "aoi102",
    title: "Machine Learning",
    summary:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    description:
      "We conduct interdisciplinary research, combining computing, art, science, music, security, psychology, social network analysis, digital humanities and biologically inspired computing. We aim to produce more robust, scalable and flexible computational tools that can interact with humans effectively. We are particularly interested in: interactive tools for supporting creativity in music and art; the use of wearable and mobile devices; control gestures for computer systems; health applications; virtual and augmented reality; and the use of eye-gaze and physiological signals to infer humans’ mental states.",
    image_url: "./cardpic2.jpg"
  },
  {
    id: "aoi103",
    title: "Robotics",
    summary:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    description:
      "Robotics is an interdisciplinary branch of engineering and science that includes mechanical engineering, electronic engineering, information engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control, sensory feedback, and information processing.",
    image_url: "./cardpic3.jpg"
  },
  {
    id: "aoi104",
    title: "Quantum Computing",
    summary:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    description:
      "Quantum computing is essentially harnessing and exploiting the amazing laws of quantum mechanics to process information. A traditional computer uses long strings of “bits,” which encode either a zero or a one. A quantum computer, on the other hand, uses quantum bits, or qubits.",
    image_url: "./cardpic4.jpg"
  }
];

export function getProfiles() {
  return profiles;
}

export function getProfileById(id) {
  return profiles.find(p => p._id === id);
}

export function getProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find(p => p.id === id);
}

export function getAreaOfInterests() {
  return area_of_interests;
}

export function getAreaOfInterestById(id) {
  return area_of_interests.find(a => a.id === id);
}
