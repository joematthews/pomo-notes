import * as fs from "fs";
import { format } from "date-fns";

var dateNow = new Date();

const directory = `notes/${format(dateNow, "yyyy/MM-MMM")}`;

try {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }
} catch (err) {
  console.error("Error creating directory: ", err ?? "");
  process.exit(1);
}

const defaultTemplate = `# Tasks for ${format(dateNow, "PPPP")} :ballot_box_with_check:

- [ ] Refine tasks, check emails, read messages & follow-up :tomato:

## Scratchpad :bulb:

Find something interesting to put here each day.
`;

const fullPath = `${directory}/${format(dateNow, "yyyy-MM-dd-EEE")}.md`;

try {
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, defaultTemplate);
    console.log("Successfully created file: ", fullPath);
  } else {
    console.log(`File ${fullPath} already exists.`);
  }
} catch (err) {
  console.error("Error creating file: ", err ?? "");
  process.exit(1);
}
