import arg from 'arg';
import inquirer from 'inquirer';
const fs = require('fs');
const csv = require('csv');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');

// get the arguments and parse into options
function parseArguments(rawArgs) {
    const args = arg(
        {
            '--input': String,
            '--output': String
        },
        {
            argv: rawArgs.slice(1)
        }
    )
    return {
        input: args['--input'],
        output: args['--output'] || 'output.csv'
    }
}
async function promptForMissingOptions(options) {
    const questions = [];

    if(!options.input) {
        questions.push({
            type: 'input',
            name: 'input',
            message: "Please provide a path for the input CSV."
        })
    }
    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        input: options.input || answers.input
    }
}

// helper func to get endtime 
function elapsed(startTime) {
    var endTime = new Date();
    var timeDiff = endTime - startTime; //in ms
    timeDiff /= 1000;
  
    // get the seconds
    var seconds = timeDiff;
    return seconds;
  }

// get and read from the CSV passed in the first arg
async function readCSV(inputFile, outputFile) {
    let imageData = [];

    await fs.createReadStream(inputFile)
    .pipe(csv.parse({ headers: true }))
    .on('data', row => {
        let startTime = new Date();
        // console.log("rows", row[0], row[1]);
        const img1 = PNG.sync.read(fs.readFileSync(row[0]));
        const img2 = PNG.sync.read(fs.readFileSync(row[1]));
       
        const {width, height} = img1;
        const diff = new PNG({width, height});
        // loop through the rows and compare the two image URLs

        const pixmatch = pixelmatch(img1.data, img2.data, diff.data, img1.width, img1.height, {threshold: 0.1});
        console.log(">> ROW: ", row[0], row[1], "  PIXEL DIFF: ", pixmatch, "  ELAPSED: ", elapsed(startTime));
        // define a comparison algorithm and figure out elapsed time it takes to compare images
        imageData.push(row[0], row[1], pixmatch, elapsed(startTime), '\n');

        // output data about difference between images (0 implies images are the same)
        fs.writeFileSync(outputFile, imageData);
    })
    }

export async function cli(args) {
    let options = parseArguments(args);
    options = await promptForMissingOptions(options);
    // console.log("options:: ", options)
    // write results to csv
    readCSV(options.input, options.output);
    // option to generate a visual diff representation
    // fs.writeFileSync(options['outputCSV'], PNG.sync.write(diff));
}