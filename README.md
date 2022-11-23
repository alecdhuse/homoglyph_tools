# Homoglyph Tools
A JavaScript toolset to help detect homoglyph attacks.

## What is a homoglyph?
A homoglyph is a text character that visualy resembles another character. 

For example a lowercase l looks similar to an uppercase I. 

## What is a homoglyph attack?
A homoglyph attack is the malicious use of similar-looking characters to fool someone. This is often done with Punycode URLs to make them resemble legitimate websites.

## Usage Example
```
  // Instantiate Homoglyph_Tools class
  let homoglyph_tools = new Homoglyph_Tools();

  // Add custom strings to the built-in list of well known strings.
  homoglyph_tools.add_well_known_string("BrandName"); 

  let homoglyph_results = homoglyph_tools.detect_homoglyphs("Some text including a potential homoglyph like: Braոdname");  
```

The result is an JSON object like:
```
{
  "imitation_confidence": 90,
  "character_sets": [
    "Latin",
    "Armenian"
  ],
  "possible_string_imitations": [
    "Brandname"
  ],
  "definite_string_imitations": [
    "Brandname"
  ]
}
```
