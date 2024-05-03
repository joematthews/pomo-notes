# Pomo Notes 🍅

Visit the [Wikipedia page for Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) to learn about the technique.

## Getting Started

Execute the following (using Mac or Linux) within the pomo-notes directory:

```sh
./make_today
```

This will create a file with a name like: `dates/2024/05-May/2024-05-03-Fri.md`

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

> [!NOTE]  
> The contents of the `dates/` directory is ignored in the [.gitignore](./.gitignore) file. Therefore all notes will not be pushed with git. This is intentional. If you need to back up your notes please consider a file sync solution or zip up the dates directory.

The default template can be customized in the [./make_today](./make_today) file itself.

The [Tomatobar App](https://github.com/ivoronin/TomatoBar) is an excellent, free and open source, option if you don't want to carry around a kitchen timer.
