//next steps: add keys, input types, options to other questions (in questions and in App itself)
//potential issues w/ App: switching back and forth between questions - logic is actually pretty simple
//What to do when finished with questions?

//To do: Add background color to highlight new inputs
//

//Your Name: Matt N
//Your Residence: Vancouver, BC
//Your Executor:
//Your Alternative Executor:
//Your Beneficiaries:
//Your Alternative Beneficiaries

export const questions = [
  {
    id: 1,
    key: "userName",
    name: "What is your full legal name?",
    subQ: "",
    inputType: "text",
    // options: [],
  },

  {
    id: 2,
    key: "userCity",
    name: "What is the name of the town or city where you live?",
    subQ: "Please be mindful of spelling. This web application is designed to only create wills for residents of British Columbia.",
    inputType: "text",
    // options: [],
  },

  {
    id: 3,
    key: "execName",
    name: "What is the full legal name of your executor?",
    subQ: "An executor is the person responsible for administering the instructions in your will after you pass away. An executor can also be called a trustee. You generally want to choose an executor who is responsible, younger than you, and in good health.",
    inputType: "text",
    // options: [],
  },

  {
    id: 4,
    key: "execRelation",
    name: "What is your relationship to your executor? My executor is my: ",
    subQ: "Your executor may be your wife, husband, brother, or sister. Other possible answers: partner, spouse, son, daughter.",
    inputType: "dropDown",
    options: [
      "wife",
      "husband",
      "partner",
      "brother",
      "sister",
      "son",
      "daughter",
      "cousin",
      "friend",
      "son-in-law",
      "brother-in-law",
      "sister-in-law",
    ],
    //Drop-down menu: wife, husband, partner, brother, sister, son, daughter, cousin, friend, son-in-law, daughter-in-law, brother-in-law, sister-in-law
  },

  {
    id: 5,
    key: "execCity",
    name: "What is the name of the town or city where your executor lives?",
    subQ: "",
    inputType: "text",
    //options: [],
    //Text to submit town/city name
    //Drop-down menu: province
  },

  {
    id: 5.1,
    key: "execProvince",
    name: "What is the name of the province or territory where your executor lives?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
  },

  {
    id: 6,
    key: "altExecName",
    name: "What is the full name of your alternate executor?",
    subQ: "An alternate executor is the person responsible for administering your estate if your executor is unwilling or unable to administer your estate.",
    inputType: "text",
  },

  {
    id: 6.1,
    key: "altExecRelation",
    name: "What is your relationship to your alternate executor? My alternate executor is my: ",
    subQ: "Your executor may be your wife, husband, brother, or sister. Other possible answers: partner, spouse, son, daughter.",
    inputType: "dropDown",
    options: [
      "wife",
      "husband",
      "partner",
      "brother",
      "sister",
      "son",
      "daughter",
      "cousin",
      "friend",
      "son-in-law",
      "brother-in-law",
      "sister-in-law",
    ],
    //options:
  },

  {
    id: 7,
    key: "altExecCity",
    name: "In what city or town does your alternate executor reside?",
    subQ: "",
    inputType: "text",
  },

  {
    id: 8,
    key: "altExecProvince",
    name: "In what province or territory does your alternate executor reside?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
  },

  {
    id: 9,
    key: "numOfBeneficiaries",
    name: "How many people do you want to inherit from your estate?",
    subQ: "Your residue includes everything you own: real estate, investments, clothing, vehicles, etc. The residue includes all things you would pass on to the people you specify as the recipients of the residue. The people specified as recipients in this will would receive equal shares of the residue.",
    inputType: "dropDown",
    options: [1, 2, 3],
  },

  {
    id: 10,
    key: "beneficiaryOneName",
    name: "What is the full legal name of the first person to inherit from your estate?",
    subQ: "",
    inputType: "text",
    //options
    //answer = beneficiary1
  },

  {
    id: 11,
    key: "beneficiaryOneRelation",
    name: "What is your relationship to this first beneficiary?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "wife",
      "husband",
      "partner",
      "brother",
      "sister",
      "son",
      "daughter",
      "cousin",
      "friend",
      "son-in-law",
      "brother-in-law",
      "sister-in-law",
    ],
    //Drop-down menu: wife, husband, partner, brother, sister, son, daughter, cousin, friend, son-in-law, daughter-in-law, brother-in-law, sister-in-law
  },

  {
    id: 12,
    key: "beneficiaryOneCity",
    name: "What is the name of the town or city where your first beneficiary lives?",
    subQ: "",
    inputType: "text",
    //Text to submit town/city name
    //Drop-down menu: province
  },

  {
    id: 12.1,
    key: "beneficiaryOneProvince",
    name: "In what province or territory does your first beneficiary reside?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
  },

  {
    id: 13,
    key: "beneficiaryTwoName",
    name: "What is the full legal name of the second person to inherit from your estate?",
    subQ: "",
    inputType: "text",
    //options
    //answer = beneficiary1
  },

  {
    id: 14,
    key: "beneficiaryTwoRelation",
    name: "What is your relationship to this second beneficiary?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "wife",
      "husband",
      "partner",
      "brother",
      "sister",
      "son",
      "daughter",
      "cousin",
      "friend",
      "son-in-law",
      "brother-in-law",
      "sister-in-law",
    ],
    //Drop-down menu: wife, husband, partner, brother, sister, son, daughter, cousin, friend, son-in-law, daughter-in-law, brother-in-law, sister-in-law
  },

  {
    id: 15,
    key: "beneficiaryTwoCity",
    name: "What is the name of the town or city where your second beneficiary lives?",
    subQ: "",
    inputType: "text",
    //Text to submit town/city name
    //Drop-down menu: province
  },

  {
    id: 16,
    key: "beneficiaryTwoProvince",
    name: "In what province or territory does your second beneficiary reside?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "Alberta",
      "British Columbia",
      "Manitoba",
      "New Brunswick",
      "Newfoundland and Labrador",
      "Nova Scotia",
      "Ontario",
      "Prince Edward Island",
      "Quebec",
      "Saskatchewan",
      "Northwest Territories",
      "Nunavut",
      "Yukon",
    ],
  },

  {
    id: 17,
    key: "beneficiaryThreeName",
    name: "What is the full legal name of the third person to inherit from your estate?",
    subQ: "",
    inputType: "text",
    //options
    //answer = beneficiary1
  },

  {
    id: 18,
    key: "beneficiaryThreeRelation",
    name: "What is your relationship to this third beneficiary?",
    subQ: "",
    inputType: "dropDown",
    options: [
      "wife",
      "husband",
      "partner",
      "brother",
      "sister",
      "son",
      "daughter",
      "cousin",
      "friend",
      "son-in-law",
      "brother-in-law",
      "sister-in-law",
    ],
    //Drop-down menu: wife, husband, partner, brother, sister, son, daughter, cousin, friend, son-in-law, daughter-in-law, brother-in-law, sister-in-law
  },

  {
    id: 19,
    key: "beneficiaryThreeCity",
    name: "What is the name of the town or city where your third beneficiary resides?",
    subQ: "",
    inputType: "text",
    //Text to submit town/city name
    //Drop-down menu: province
  },

  {
    id: 20,
    key: "predeceasedPlans",
    name: "If one or more of your beneficiaries predeceases you, what do you want to have happen to that person's share of the residue?",
    subQ: "",
    inputType: "radioButton",
    options: [
      "Have that person's share go to the surviving children of that person",
      "Have that person's share go to my children that survive me",
      "Have that person's share be distributed among my surviving beneficiaries",
      "Have that person's share go to an alternative beneficiary",
    ],
  },

  {
    id: 21,
    key: "termsForMinors",
    name: "If someone young inherits from your estate, do you want to assign a trustee to hold and control that person's share of the estate until that person reaches a certain age?",
    subQ: "",
    inputType: "dropDown",
    options: ["Yes", "No"],
  },

  {
    id: 22,
    key: "minorTrustee",
    name: "Who should be the trustee of the young person inheriting from your estate?",
    subQ: "",
    inputType: "radioButton",
    options: ["The parent of that young person", "My executor"],
  },

  {
    id: 23,
    key: "minorAge",
    name: "What age should any young person be when you want that person to have full control over their share in your estate?",
    subQ: "",
    inputType: "dropDown",
    options: ["18", "19", "20", "21", "22", "23", "24", "25"],
  },

  {
    id: 24,
    key: "remains",
    name: "Do you wish to have your remains buried or cremated?",
    subQ: "",
    inputType: "dropDown",
    options: ["buried", "cremated"],
  },

  {
    id: 25,
    key: "witnessOneName",
    name: "What is the name of the first person who will be present to witness you sign your will?",
    subQ: "You need two people to witness you sign your will and sign immediately after you sign. These people cannot be beneficiaries or trustees named in your will.",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  {
    id: 26,
    key: "witnessOneOccupation",
    name: "What is the occupation of the first person who will witness you sign your will?",
    subQ: "",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  {
    id: 27,
    key: "witnessOneAddress",
    name: "What is the full address of the first person who will witness you sign your will?",
    subQ: "Include the apartment/suite number (if needed), street, city, province/territory, and postal code. A work or residential address can be used.",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  {
    id: 28,
    key: "witnessTwoName",
    name: "What is the name of the first person who will be present to witness you sign your will?",
    subQ: "",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  {
    id: 29,
    key: "witnessTwoOccupation",
    name: "What is the occupation of the first person who will witness you sign your will?",
    subQ: "",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  {
    id: 30,
    key: "witnessTwoAddress",
    name: "What is the full address of the first person who will witness you sign your will?",
    subQ: "Include the apartment/suite number (if needed), street, city, province/territory, and postal code. A work or residential address can be used.",
    inputType: "text",
    // options: ["buried", "cremated"],
  },

  // { id: 3, name: "What is your email address?", subQ: [""] },

  // { id: 4, name: "What is your occupation?", subQ: [""] },

  // { id: 5, name: "What is your date of birth?", subQ: [""] },

  // {
  //   id: 6,
  //   name: "In what country (or countries) do you have citizenship?",
  //   subQ: [""],
  // },

  // {
  //   id: 11,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 12,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 13,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 14,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 15,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 16,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 17,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 18,
  //   question: "",
  //   subQ: [""],
  // },

  // {
  //   id: 19,
  //   question: "",
  //   subQ: [""],
  // },
];

// const Q9 =
//   "Are there any specific items you would like to pass along as part of your estate (for example, jewellry, artwork, vehicles?";
// const Q9sub = "Who would you like to receive these items?";

// const Q10 = "Do you have ...";

// ]

export default questions;
