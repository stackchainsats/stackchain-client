## Getting Started with Stackchain App

To run the app, you will need Node js installed [download here](https://nodejs.org/en/)

Stackchain app uses Node v18.12.0

## Setting up SSH Keys with Github

If you don't already have SSH keys on your computer for use with Github, you will need to generate them

[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

[Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

Open the terminal and use the following commands to generate an SSH key

Replace `your_email@example.com` below with your github email

```
ssh-keygen -t ed25519 -C "your_email@example.com"
```

Once you have generate a SSH key, copy it's contents to your clipboard with the following command in the terminal:

Mac:

```
pbcopy < ~/.ssh/id_ed25519.pub
```

Windows:

```
clip < ~/.ssh/id_ed25519.pub
```

Linux:

```
cat ~/.ssh/id_ed25519.pub
```

In Github navigate to Settings >> SSH and GPG keys >> Click on New SSH Key

Paste your copied key in the text box for Key, and give it a name so you can recognize the device (i.e. windows laptop)

Click `Add SSH Key`

## Clone the App

To clone the app, open your terminal and enter the following

```
git clone git@github.com:stackchainsats/stackchain-client.git
```

Next navigate into the downloaded app with the change directory command

```
cd stackchain-client
```

Install the dependencies locally with the command

```
npm install
```

If all is working you should be able to run the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app.
