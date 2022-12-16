/*
 Copyright (c) 2022 Alec Dhuse. All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 1. Redistributions of source code must retain the above copyright notice,
 this list of conditions and the following disclaimer.

 2. Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in
 the documentation and/or other materials provided with the distribution.

 3. The names of the authors may not be used to endorse or promote products
 derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED ''AS IS'' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JCRAFT,
 INC. OR ANY CONTRIBUTORS TO THIS SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
class Homoglyph_Tools {

  /**
   * Created the default object structure for ths class.
   *
   * @return null
   */
  constructor() {
    this.homoglyph_dictionary = {
      'а': {
        'character_set': "Cyrillic",
        'replacement_characters': ["a"]
      },
      'д': {
        'character_set': "Cyrillic",
        'replacement_characters': ["A"]
      },
      'Ꭺ': {
        'character_set': "Cherokee",
        'replacement_characters': ["A"]
      },
      'ä': {
        'character_set': "Latin Extended",
        'replacement_characters': ["a"]
      },
      'ā': {
        'character_set': "Latin Extended",
        'replacement_characters': ["a"]
      },
      'α': {
        'character_set': "Greek",
        'replacement_characters': ["a"]
      },
      'Α': {
        'character_set': "Greek",
        'replacement_characters': ["A"]
      },
      'ą': {
        'character_set': "Polish",
        'replacement_characters': ["a"]
      },
      'Ą': {
        'character_set': "Polish",
        'replacement_characters': ["A"]
      },
      'ล': {
        'character_set': "Thai",
        'replacement_characters': ["a"]
      },
      'ạ': {
        'character_set': "Vietnamese",
        'replacement_characters': ["a"]
      },
      'ʙ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["B"]
      },
      'Ꮟ': {
        'character_set': "Cherokee",
        'replacement_characters': ["b"]
      },
      'Ᏸ': {
        'character_set': "Cherokee",
        'replacement_characters': ["B"]
      },
      'Ᏼ': {
        'character_set': "Cherokee",
        'replacement_characters': ["B"]
      },
      'в': {
        'character_set': "Cyrillic",
        'replacement_characters': ["B"]
      },
      'ы': {
        'character_set': "Cyrillic",
        'replacement_characters': ["bl"]
      },
      'ḅ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["b"]
      },
      'Ꮯ': {
        'character_set': "Cherokee",
        'replacement_characters': ["c"]
      },
      'с': {
        'character_set': "Cyrillic",
        'replacement_characters': ["c"]
      },
      'ϲ': {
        'character_set': "Greek",
        'replacement_characters': ["c"]
      },
      'ς': {
        'character_set': "Greek",
        'replacement_characters': ["c"]
      },
      'ⅾ': {
        'character_set': "Roman Numeral",
        'replacement_characters': ["d"]
      },
      'ԁ': {
        'character_set': "Cyrillic",
        'replacement_characters': ["d"]
      },
      'Ꭰ': {
        'character_set': "Cherokee",
        'replacement_characters': ["D"]
      },
      'Ꭼ': {
        'character_set': "Cherokee",
        'replacement_characters': ["E"]
      },
      'е': {
        'character_set': "Cyrillic",
        'replacement_characters': ["e"]
      },
      'ε': {
        'character_set': "Greek",
        'replacement_characters': ["E"]
      },
      'e': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'ẹ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["e"]
      },
      'ė': {
        'character_set': "Latin Extended",
        'replacement_characters': ["e"]
      },
      'ê': {
        'character_set': "Latin Extended",
        'replacement_characters': ["e"]
      },
      'Е': {
        'character_set': "Cyrillic",
        'replacement_characters': ["E"]
      },
      'E': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'ƒ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["f"]
      },
      'Ƒ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["F"]
      },
      'g': {
        'character_set': "Armenian",
        'replacement_characters': ["g"]
      },
      'ğ': {
        'character_set': "Turkish",
        'replacement_characters': ["g"]
      },
      'Ꮹ': {
        'character_set': "Cherokee",
        'replacement_characters': ["G"]
      },
      'Ꮆ': {
        'character_set': "Cherokee",
        'replacement_characters': ["G"]
      },
      'Ᏻ': {
        'character_set': "Cherokee",
        'replacement_characters': ["G"]
      },
      'б': {
        'character_set': "Cyrillic",
        'replacement_characters': ["G","6"]
      },
      'ǥ': {
        'character_set': "Latin Skolt Sami",
        'replacement_characters': ["g"]
      },
      'Ǥ': {
        'character_set': "Latin Skolt Sami",
        'replacement_characters': ["G"]
      },
      'ɢ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["G"]
      },
      'ġ': {
        'character_set': "Maltese",
        'replacement_characters': ["g"]
      },
      'H': {
        'character_set': "Greek",
        'replacement_characters': ["H"]
      },
      'н': {
        'character_set': "Cyrillic",
        'replacement_characters': ["H"]
      },
      'ỉ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["i"]
      },
      'ï': {
        'character_set': "Latin Extended",
        'replacement_characters': ["i"]
      },
      'ɨ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["i"]
      },
      'і': {
        'character_set': "Cyrillic",
        'replacement_characters': ["i"]
      },
      'ɨ': {
        'character_set': "Latin",
        'replacement_characters': ["i"]
      },
      'ו': {
        'character_set': "Hebrew",
        'replacement_characters': ["i"]
      },
      'i': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'í': {
        'character_set': "Latin",
        'replacement_characters': ["i"]
      },
      'ı': {
        'character_set': "Latin Extended",
        'replacement_characters': ["i","1"]
      },
      'ӏ': {
        'character_set': "Cyrillic",
        'replacement_characters': ["i","l"]
      },
      'I': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'ป': {
        'character_set': "Thai",
        'replacement_characters': ["J","U"]
      },
      'Ꮶ': {
        'character_set': "Cherokee",
        'replacement_characters': ["K"]
      },
      'к': {
        'character_set': "Cyrillic",
        'replacement_characters': ["K"]
      },
      'Ꮣ': {
        'character_set': "Cherokee",
        'replacement_characters': ["L"]
      },
      'Ꮮ': {
        'character_set': "Cherokee",
        'replacement_characters': ["L"]
      },
      'l': {
        'character_set': "Latin",
        'replacement_characters': ["I"]
      },
      'ł': {
        'character_set': "Polish",
        'replacement_characters': ["l"]
      },
      'ℓ': {
        'character_set': "Mathematics",
        'replacement_characters': ["l"]
      },
      'М': {
        'character_set': "Cyrillic",
        'replacement_characters': ["M"]
      },
      'ⅿ': {
        'character_set': "Roman Numeral",
        'replacement_characters': ["m"]
      },
      'ṃ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["m"]
      },
      'ո': {
        'character_set': "Armenian",
        'replacement_characters': ["n"]
      },
      'п': {
        'character_set': "Cyrillic",
        'replacement_characters': ["n"]
      },
      'η': {
        'character_set': "Greek",
        'replacement_characters': ["n"]
      },
      'ņ': {
        'character_set': "Latvian",
        'replacement_characters': ["n"]
      },
      'ṇ': {
        'character_set': "Indic",
        'replacement_characters': ["n"]
      },
      'ח': {
        'character_set': "Hebrew",
        'replacement_characters': ["n"]
      },
      'ท': {
        'character_set': "Thai",
        'replacement_characters': ["n"]
      },
      'Ν': {
        'character_set': "Greek",
        'replacement_characters': ["N"]
      },
      'օ': {
        'character_set': "Armenian",
        'replacement_characters': ["o"]
      },
      'Ꭴ': {
        'character_set': "Cherokee",
        'replacement_characters': ["O"]
      },
      'о': {
        'character_set': "Cyrillic",
        'replacement_characters': ["o"]
      },
      'ο': {
        'character_set': "Greek",
        'replacement_characters': ["o"]
      },
      'ס': {
        'character_set': "Hebrew",
        'replacement_characters': ["o"]
      },
      'o': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'О': {
        'character_set': "Cyrillic",
        'replacement_characters': ["O"]
      },
      '0': {
        'character_set': "Arabic Numeral",
        'replacement_characters': ["O"]
      },
      'O': {
        'character_set': "Latin",
        'replacement_characters': []
      },
      'ö': {
        'character_set': "Latin",
        'replacement_characters': ["o"]
      },
      'р': {
        'character_set': "Cyrillic",
        'replacement_characters': ["p"]
      },
      'Ꮲ': {
        'character_set': "Cherokee",
        'replacement_characters': ["P"]
      },
      'Ꭱ': {
        'character_set': "Cherokee",
        'replacement_characters': ["R"]
      },
      'Ꮢ': {
        'character_set': "Cherokee",
        'replacement_characters': ["R"]
      },
      'ŗ': {
        'character_set': "Livonian",
        'replacement_characters': ["r"]
      },
      'ș': {
        'character_set': "Romanian",
        'replacement_characters': ["s"]
      },
      'Տ': {
        'character_set': "Armenian",
        'replacement_characters': ["s"]
      },
      'Ꮪ': {
        'character_set': "Cherokee",
        'replacement_characters': ["S"]
      },
      'Ꭲ': {
        'character_set': "Cherokee",
        'replacement_characters': ["T"]
      },
      'Т': {
        'character_set': "Cyrillic",
        'replacement_characters': ["T"]
      },
      'Τ': {
        'character_set': "Greek",
        'replacement_characters': ["T"]
      },
      'ṫ': {
        'character_set': "Latin Extended",
        'replacement_characters': ["t"]
      },
      'ț': {
        'character_set': "Romanian",
        'replacement_characters': ["t"]
      },
      'ṭ': {
        'character_set': "Mizo",
        'replacement_characters': ["t"]
      },
      'ս': {
        'character_set': "Armenian",
        'replacement_characters': ["u"]
      },
      'ü': {
        'character_set': "Latin Extended",
        'replacement_characters': ["u"]
      },
      'น': {
        'character_set': "Thai",
        'replacement_characters': ["u"]
      },
      'บ': {
        'character_set': "Thai",
        'replacement_characters': ["u"]
      },
      'ν': {
        'character_set': "Greek",
        'replacement_characters': ["v"]
      },
      'ⅴ': {
        'character_set': "Roman Numeral",
        'replacement_characters': ["v"]
      },
      'Ꮩ': {
        'character_set': "Cherokee",
        'replacement_characters': ["V"]
      },
      'ѡ': {
        'character_set': "Cyrillic",
        'replacement_characters': ["w"]
      },
      'Ꮃ': {
        'character_set': "Cherokee",
        'replacement_characters': ["W"]
      },
      'Ꮤ': {
        'character_set': "Cherokee",
        'replacement_characters': ["W"]
      },
      'พ': {
        'character_set': "Thai",
        'replacement_characters': ["w"]
      },
      'ԝ': {
        'character_set': "Cyrillic",
        'replacement_characters': ["w"]
      },
      'ω': {
        'character_set': "Greek",
        'replacement_characters': ["w"]
      },
      'Ш': {
        'character_set': "Cyrillic",
        'replacement_characters': ["W"]
      },
      'х': {
        'character_set': "Cyrillic",
        'replacement_characters': ["x"]
      },
      'у': {
        'character_set': "Cyrillic",
        'replacement_characters': ["y"]
      },
      'Ꭹ': {
        'character_set': "Cherokee",
        'replacement_characters': ["y"]
      },
      'ž': {
        'character_set': "Czech",
        'replacement_characters': ["z"]
      },
      'Ꮓ': {
        'character_set': "Cherokee",
        'replacement_characters': ["Z"]
      },
      'Ꮞ': {
        'character_set': "Cherokee",
        'replacement_characters': ["4"]
      }
    };

    // List of strings often targeted for homoglyph attacks.
    this.well_known_strings = [
      "account",
      "Amazon",
      "Apple",
      "Azure",
      "bank",
      "Discord",
      "DropBox",
      "Facebook",
      "Gmail",
      "Google",
      "Instagram",
      "Live",
      "login",
      "Microsoft",
      "Netflix",
      "note",
      "Office",
      "Outlook",
      "PayPal",
      "ProtonMail",
      "Slack",
      "Steam",
      "Telegram",
      "TikTok",
      "Twitter",
      "USPS",
      "verify",
      "Zoom"
    ];
  }


    /**
     * Adds a string to the list of well-known strings targeted for homoglyph attacks.
     * This is useful for adding custom strings and maintaining compatibility for changes to this project.
     *
     * @param  {String} new_string The new string to add to well_known_strings array.
     * @return null
     */
    add_well_known_string(new_string) {
      if (!this.well_known_strings.includes(new_string)) {
        this.well_known_strings.push(new_string);
      }
    }

    /**
     * The main function of this class used to detect homoglyphs.
     *
     * @param  {String} input_string The string to check for homoglyphs.
     * @return {Object}
     */
    detect_homoglyphs(input_string) {
      let homoglyph_tools = this;
      let return_object = {
        'imitation_confidence': 0,
        'character_sets': [],
        'possible_string_imitations': [],
        'definite_string_imitations': []
      };

      // Find possible imitations
      for (const [key, value] of Object.entries(homoglyph_tools.homoglyph_dictionary)) {
        if (input_string.includes(key)) {
          if (!return_object.character_sets.includes(value.character_set)) {
            return_object.character_sets.push(value.character_set);
          }

          value.replacement_characters.forEach(function(character) {
            let imitated_words = homoglyph_tools.get_imitated_word(input_string, key);

            imitated_words.forEach(function(imitated_word) {
              let possible_imitation = imitated_word.replaceAll(key, character);

              if (!return_object.possible_string_imitations.includes(possible_imitation)) {
                return_object.possible_string_imitations.push(possible_imitation);
              }
            });
          });
        }

        return_object.possible_string_imitations.forEach(function(found_imitation) {
          if (found_imitation.includes(key)) {
            if (!return_object.character_sets.includes(value.character_set)) {
              return_object.character_sets.push(value.character_set);
            }

            value.replacement_characters.forEach(function(character2) {
              let possible_imitation2 = found_imitation.replaceAll(key, character2);

              if (!return_object.possible_string_imitations.includes(possible_imitation2)) {
                return_object.possible_string_imitations.push(possible_imitation2);
              }
            });
          }
        });
      }

      // Check possible imitations against well known strings.
      return_object.possible_string_imitations.forEach(function(found_imitation) {
        homoglyph_tools.well_known_strings.forEach(function(well_known_string) {
          if (found_imitation.toLowerCase() == well_known_string.toLowerCase()) {
            // One of the found imitations matches a well known string.
            if (!return_object.definite_string_imitations.includes(found_imitation)) {
              return_object.definite_string_imitations.push(found_imitation);
            }

            if (return_object.character_sets.length > 2) {
              return_object.imitation_confidence = 100;
            } else if (return_object.character_sets.length > 1) {
              return_object.imitation_confidence = 90;
            } else {
              return_object.imitation_confidence = 75;
            }
          } else if (found_imitation.toLowerCase().includes(well_known_string.toLowerCase())) {
            // One of the found imitations partialy matches a well known string.
            if (!return_object.definite_string_imitations.includes(found_imitation)) {
              return_object.definite_string_imitations.push(found_imitation);
            }

            if (return_object.character_sets.length > 2) {
              return_object.imitation_confidence = 90;
            } else if (return_object.character_sets.length > 1) {
              return_object.imitation_confidence = 80;
            } else {
              return_object.imitation_confidence = 60;
            }
          }
        });
      });

      return return_object;
    }

    /**
     * Isolates and returns all possible imitated word in a larger string.
     *
     * @param  {String} input_string  The string to check for homoglyphs.
     * @param  {String} imitated_char The imitated character being checked.
     * @return {Array}  All the unique words with imitated characters.
     */
    get_imitated_word(input_string, imitated_char) {
      let regex_string = "\\s*([^\\s]*\\" + imitated_char + "[^\\s]*)\\s*"
      let regex = new RegExp(regex_string, "gm");
      let matches = input_string.match(regex);
      let word_matches = [];

      if (matches !== undefined && matches !== null) {
        for (let i=0; i<matches.length; i++) {
          if (!word_matches.includes(matches[i].trim())) {
            word_matches.push(matches[i].trim());
          }
        }
      }

      return word_matches;
    }
}
