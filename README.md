
# Standalone Frontend Chatbot App

The project aims to create a standalone frontend chatbot app and connect it to a Python Flask backend via REST API for users to interact with the chatbot. The frontend will use Vite, React, HTML, CSS, and Tailwind CSS technologies. Users can ask questions and receive responses asynchronously without the need for page refresh. Additional features can be added to the chatbot based on needs. The backend of this project utilizes Python Flask to create a REST API endpoint, which can be found in this [repository](https://github.com/ndrvndr/chatbot-endpoint). 


## Demo

The live site can be accessed [here](https://chatbot-app-pink.vercel.app/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/ndrvndr/chatbot-app.git
```

Go to the project directory

```bash
  cd chatbot-app
  code .
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

`VITE_ENDPOINT` is obtained after running the flask app with the python app.py command

To obtain these environment variables, you will need to create a Firebase project and obtain the necessary credentials.

`VITE_API_KEY`

`VITE_AUTH_DOMAIN`

`VITE_APP_DATABASE_URL`

`VITE_PROJECT_ID`

`VITE_STORAGE_BUCKET`

`VITE_MESSAGING_SENDER_ID`

`VITE_APP_ID`

`VITE_MEASUREMENT_ID`

Those environment variables are part of the Firebase configuration.

## Tech Stack

**Client:** Vite+React, TailwindCSS

**Server:** Python, Flask


## Attribution
The typing status component was built using code from https://github.com/hitchcliff/front-end-chatjs to get the typing animation effect.

Send button and forms use components from [uiverse.io](https://uiverse.io/) | [Send Button](https://uiverse.io/adamgiebl/smart-moth-68) | [Forms](https://uiverse.io/alexruix/tender-badger-50)

Dialog components created using [headlessui.com](https://headlessui.com/react/dialog) and design inspired by [Aether Design System](https://aether.thcl.dev/). See the repository [here](https://github.com/theodorusclarence/aether-design-system)
## Authors

- [@ndrvndr](https://github.com/ndrvndr)


## Feedback

If you have any feedback, please contact me at andreavindra37@gmail.com

