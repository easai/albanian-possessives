const possessivePronouns = [
  // 1st person singular
  {
    person: "1s",
    gender: "masculine",
    singular: {
      nominative: "im",
      accusative: "tim",
      dative: "tim"
    },
    plural: {
      nominative: "e mi",
      accusative: "e mi",
      dative: "të mi"
    }
  },
  {
    person: "1s",
    gender: "feminine",
    singular: {
      nominative: "ime",
      accusative: "time",
      dative: "sime"
    },
    plural: {
      nominative: "e mia",
      accusative: "e mia",
      dative: "të mia"
    }
  },

  // 2nd person singular
  {
    person: "2s",
    gender: "masculine",
    singular: {
      nominative: "yt",
      accusative: "tënd",
      dative: "tënd"
    },
    plural: {
      nominative: "e tu",
      accusative: "e tu",
      dative: "të tu"
    }
  },
  {
    person: "2s",
    gender: "feminine",
    singular: {
      nominative: "jote",
      accusative: "tënde",
      dative: "sate"
    },
    plural: {
      nominative: "e tua",
      accusative: "e tua",
      dative: "të tua"
    }
  },

  // 3rd person singular (masc. possessor → masc. noun)
  {
    person: "3s(m)",
    gender: "masculine",
    singular: {
      nominative: "i tij",
      accusative: "e tij",
      dative: "të tij"
    },
    plural: {
      nominative: "e tij",
      accusative: "e tij",
      dative: "të tij"
    }
  },

  // 3rd person singular (masc. possessor → fem. noun)
  {
    person: "3s(m)",
    gender: "feminine",
    singular: {
      nominative: "e tij",
      accusative: "e tij",
      dative: "së tij"
    },
    plural: {
      nominative: "e tij",
      accusative: "e tij",
      dative: "të tija"
    }
  },

  // 3rd person singular (fem. possessor → masc. noun)
  {
    person: "3s(f)",
    gender: "masculine",
    singular: {
      nominative: "i saj",
      accusative: "e saj",
      dative: "të saj"
    },
    plural: {
      nominative: "e saj",
      accusative: "e saj",
      dative: "së saj"
    }
  },

  // 3rd person singular (fem. possessor → fem. noun)
  {
    person: "3s(f)",
    gender: "feminine",
    singular: {
      nominative: "e saj",
      accusative: "e saj",
      dative: "të saj"
    },
    plural: {
      nominative: "e saj",
      accusative: "e saj",
      dative: "të saj"
    }
  },

  // 1st person plural
  {
    person: "1p",
    gender: "masculine",
    singular: {
      nominative: "ynë",
      accusative: "tonë",
      dative: "tonë"
    },
    plural: {
      nominative: "tanë",
      accusative: "tanë",
      dative: "tanë"
    }
  },
  {
    person: "1p",
    gender: "feminine",
    singular: {
      nominative: "jonë",
      accusative: "tonë",
      dative: "sonë"
    },
    plural: {
      nominative: "tona",
      accusative: "tona",
      dative: "tona"
    }
  },

  // 2nd person plural
  {
    person: "2p",
    gender: "masculine",
    singular: {
      nominative: "juaj",
      accusative: "tuaj",
      dative: "tuaj"
    },
    plural: {
      nominative: "tuaj",
      accusative: "tuaj",
      dative: "tuaj"
    }
  },
  {
    person: "2p",
    gender: "feminine",
    singular: {
      nominative: "juaj",
      accusative: "tuaj",
      dative: "suaj"
    },
    plural: {
      nominative: "tuaja",
      accusative: "tuaja",
      dative: "tuaja"
    }
  },

  // 3rd person plural (masc. possessor → masc. noun)
  {
    person: "3p(m)",
    gender: "masculine",
    singular: {
      nominative: "i tyre",
      accusative: "e tyre",
      dative: "të tyre"
    },
    plural: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "të tyre"
    }
  },

  // 3rd person plural (masc. possessor → fem. noun)
  {
    person: "3p(m)",
    gender: "feminine",
    singular: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "së tyre"
    },
    plural: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "të tyre"
    }
  },

  // 3rd person plural (fem. possessor → masc. noun)
  {
    person: "3p(f)",
    gender: "masculine",
    singular: {
      nominative: "i tyre",
      accusative: "e tyre",
      dative: "të tyre"
    },
    plural: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "të tyre"
    }
  },

  // 3rd person plural (fem. possessor → fem. noun)
  {
    person: "3p(f)",
    gender: "feminine",
    singular: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "së tyre"
    },
    plural: {
      nominative: "e tyre",
      accusative: "e tyre",
      dative: "të tyre"
    }
  }
];

pronounExplorer = function () {
  return {
    selectedGender: 'masculine',
    selectedNumber: 'singular',
    genders: ['masculine', 'feminine'],
    numbers: ['singular', 'plural'],
    cases: ['nominative', 'accusative', 'dative'],
    get filteredData() {
      return possessivePronouns.filter(p => p.gender === this.selectedGender);
    }
  };
};


/**
 * Returns Albanian possessive pronouns filtered by person, possessed noun gender, and number.
 * Each entry includes all grammatical cases (nominative, accusative, dative, genitive).
 * Use "all" to include every value for person, gender, or number.
 *
 * @param {Array} pronounsArray - Dataset of possessive pronouns.
 * @param {string} person - e.g., "1s", "3s(m)", or "all" for all persons.
 * @param {string} gender - Gender of possessed noun: "masculine", "feminine", or "all".
 * @param {string} number - "singular", "plural", or "all".
 * @returns {Array} Array of entries with person, possessor gender, and all case forms.
 */
function getAllCasesForPronouns(pronounsArray, person = "all", gender = "all", number = "all") {
  const cases = ["nominative", "accusative", "dative", "genitive"];

  return pronounsArray
    .filter(entry =>
      (person === "all" || entry.person === person) &&
      (gender === "all" || entry.gender === gender)
    )
    .map(entry => {
      const result = {
        person: entry.person,
        possessorGender: entry.gender
      };

      if (number === "all") {
        ["singular", "plural"].forEach(num => {
          cases.forEach(grCase => {
            result[`${num}_${grCase}`] = entry[num]?. [grCase] || null;
          });
        });
      } else {
        cases.forEach(grCase => {
          result[`${number}_${grCase}`] = entry[number]?. [grCase] || null;
        });
      }

      return result;
    });
}

// const table = getAllCasesForPronouns(possessivePronouns, "3p(m)", "all", "all");
// console.table(table);

/**
 * Returns Albanian possessive pronouns filtered by person, possessed noun gender, and number.
 * Each entry includes all grammatical cases (nominative, accusative, dative, genitive).
 * Use "all" to include every value for person, gender, or number.
 *
 * @param {Array} pronounsArray - Dataset of possessive pronouns.
 * @param {string} person - e.g., "1s", "3s(m)", or "all" for all persons.
 * @param {string} gender - Gender of possessed noun: "masculine", "feminine", or "all".
 * @param {string} number - "singular", "plural", or "all".
 * @returns {Array} Array of entries with person, possessor gender, and all case forms.
 */
function getAllCasesForPronouns(pronounsArray, person = "all", gender = "all", number = "all") {
  const cases = ["nominative", "accusative", "dative"];

  return pronounsArray
    .filter(entry =>
      (person === "all" || entry.person === person) &&
      (gender === "all" || entry.gender === gender)
    )
    .map(entry => {
      const result = {
        person: entry.person,
        possessorGender: entry.gender
      };

      if (number === "all") {
        ["singular", "plural"].forEach(num => {
          cases.forEach(grCase => {
            result[`${num}_${grCase}`] = entry[num]?. [grCase] || null;
          });
        });
      } else {
        cases.forEach(grCase => {
          result[`${number}_${grCase}`] = entry[number]?. [grCase] || null;
        });
      }

      return result;
    });
}

