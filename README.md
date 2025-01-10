# Pomo Notes :tomato:

Visit the [Wikipedia page for Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) to learn about the technique.

## Getting Started

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository), and then change to the `pomo-notes` directory:

```
git clone https://github.com/joematthews/pomo-notes.git
cd pomo-notes
```

Install the dependencies for the project:

```
npm install
```

To create a note for the current day:

```
node make-today.mjs
```

This will create a new markdown file file with a name like: `notes/2025/01-Jan/2025-01-09-Thu.md`

The file will contain a basic template including the current date in the title:

```md
# Tasks for Thursday, January 9th, 2025

- [ ] Refine tasks, check emails, read messages & follow-up :tomato:

## Scratchpad

Find something interesting to put here each day.
```

Mark tasks with a :tomato: (`:tomato:`) for each 25 minute block spent on that task.

Next, set a 25 minute timer at the beginning of the day and fill out the Tasks list!

Put links, snippets, whatever in the Scratchpad section.

## Tips

If using Visual Studio Code, install the extensions listed in [.vscode/extensions.json](.vscode/extensions.json) for the best markdown experience.

The [Tomatobar App](https://github.com/ivoronin/TomatoBar) is an excellent, free and open source, option for macOS if you don't want to carry around a kitchen timer.

The default template can be customized in the [make-today.js](make-today.js) file itself.

Install the [Prettier extension for VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and use [the VSCode editor](https://code.visualstudio.com/) for making edits to the markdown file. This project is set up to automatically format the markdown files on save. Also, files will save automatically after 3 seconds.

All new files are ignored by git. This is intentional. If you need to back up your notes please consider a file sync solution (like rsync) or zip up the notes directory.

## Contributions to the Project

[Make a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) of the https://github.com/joematthews/pomo-notes repository and clone it locally.

The [pre-commit hook](./.husky/pre-commit) calls executes the commands in [lintstagedrc.json](.lintstagedrc.json) ensures all project files do not have spelling mistakes and are properly formatted on commit.

Push changes to your fork and then [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to merge to the original project.

# Future Plans

In the future I will likely add more scripts to sync the notes directory with various cloud providers.
