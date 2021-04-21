# upload the code to github

## First time setup

- git config --global user.email johndoe@gmail.com
- git config --global user.name 'John Doe'
- git config --list

## (You need to do this always)

- git init // timeline create for that particular folder
- git add . // add all the files/folders for tracking
- git commit -m "message"
- git log // to list all the commands
- git checkout commitid -> You will go to that version
- git checkout main -> to react latest commit

### Create a repo on github

- git remote add origin **repo name**
- git branch -M main
- git push -u origin main

To ignore any of the folder -> create .gitignore file and put file/folder name in it

### Always git push
