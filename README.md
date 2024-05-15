# Pomo Notes 🍅

Visit the [Wikipedia page for Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) to learn about the technique.

## Getting Started

> [!NOTE]  
> Pomo Notes assumes you have, git, bash, and the [date command](https://man7.org/linux/man-pages/man1/date.1.html) installed on your machine (typically macOS & Linux), but should work fine with Windows if using the Git Bash Terminal within VSCode.

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) and then execute the following within the pomo-notes directory:

```
git clone https://github.com/joematthews/pomo-notes.git
cd pomo-notes
./make_today
```

This will create a file with a name like: `notes/2024/05-May/2024-05-03-Fri.md`

The file will contain a basic template including the current date in the title:

```md
# Tasks for Fri May 03 2024

- Refine tasks, check emails, read messages & follow-up 🍅

## Scratchpad

Find something interesting to put here each day.
```

> [!NOTE]  
> Mark tasks with a 🍅 (tomato emoji) for each 25 minute block spent on that task.

Next, set a 25 minute timer at the beginning of the day and fill out the Tasks list! Copy tasks from the previous day to the current if still relevant (including 🍅s).

Put links, snippets, whatever in the Scratchpad section.

## Tips

The [Tomatobar App](https://github.com/ivoronin/TomatoBar) is an excellent, free and open source, option for macOS if you don't want to carry around a kitchen timer.

The default template can be customized in the [./make_today](./make_today) file itself.

Install the [Prettier extension for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and use [the VSCode editor](https://code.visualstudio.com/) for making edits to the markdown file. This project is set up to automatically format the Markdown files on save. Also, files will save automatically after 3 seconds.

The contents of the `notes/` directory is ignored in the [.gitignore](./.gitignore) file, but the files are still searchable within VSCode. This is intentional. If you need to back up your notes please consider a file sync solution (like rsync) or zip up the notes directory.

## Contributions to the Project

[Make a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the https://github.com/joematthews/pomo-notes repository and clone it locally.

Please install the latest version of [NodeJS LTS](https://nodejs.org/en) in whatever way you prefer and install the devDependencies for the project:

```
npm install
```

The [pre-commit hook](./.husky/pre-commit) ensures all project files are properly formatted on commit.

Push changes to your fork and then [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge to the original project.
