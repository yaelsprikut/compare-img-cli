# Bjorn's Compare Image CLI 
A useful CLI designed to compare two images and output some meaningful data.

Used with the help of Pixelmatch: (https://www.npmjs.com/package/pixelmatch).

## Getting Started
```
npm i && compare-img-cli

arguments:

    --input=[name of CSV file to be read]
    --output=[name of CSV file that we're writing to (defaults to output.csv)]

```

## Example

```
$ compare-img-cli --input=path/to/file1.csv --output=file2.csv
```

## Running Tests
For testing I used Mocha; tests can be run using the `npm test` command. 

### Considerations
Pixelmatch accepts images in PNG format and the compared image dimensions must be equal.

### Steps
I originally planned to create this tool as a web app with a UI (I'm a visual learner so I find UIs to be
very straight forward), however when it was time to implement [File System](https://www.npmjs.com/package/file-system)
I encountered a roadblock since I've built my application client-side. I then decided to do a bit of research
to find a much more quick, efficient, and simple method of writing this, so I decided to write it as a CLI.
