# Pomo-Notes 1.0

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is done to fulfill one of the requirements of the course CMSC173, Human Computer Interaction.

This is a simple note-taking app inspired by the Pomodoro Technique but is simpler in functionality, and with added categorization of tasks through the packs. Users can add/remove packs and add/remove tasks in their respective packs. Once the timer has started, the interface is locked in order for the users to focus in accomplishing the tasks. The task will gray out when deleted while the timer is running. Tasks can only be deleted completely once the timer has been paused/reset.

## Developers
- ### John Joseph Macalalad
- ### John Michael Tugay
- ### Quin Grace Sabado
- ### Alina Väthbrückner

## How to Run
### Online
You can visit the [Pomo-Notes site](https://pomo-notes.netlify.app/)
### Locally
1. Clone the repository
2. Go to the project directory
3. In the project directory, you can run:
	### `yarn start` or `npm start`
	*Runs the app in the development mode.*
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Limitations
This is a simple project and does not exhaust all the possibilities that the developers envision. As such, there are limitations on the app such as:
1. The session will not be saved, a simple refresh on the page will lose all progress.
2. The timer is fixed at 25 minutes, and has no timers dedicated for short and long breaks in-between tasks.
3. No option to choose colors in creating packs, as the pack colors are chosen by the app randomly upon creation.
4. The web UI is made for desktop screens only, and using this in mobile may result in UI inconsistencies/misplacements.
5. This app is purely front-end, no back-end and database implementations are present in this app.