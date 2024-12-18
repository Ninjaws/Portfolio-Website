# Portfolio Website

My portfolio website, used to display my projects.

## Installation
### Install Docker
- On Windows and Mac
```
Install Docker Desktop
Windows: https://docs.docker.com/desktop/install/windows-install/
Mac: https://docs.docker.com/desktop/install/mac-install/
```
- On Linux
```bash
# For Debian-based systems
sudo apt install -y docker.io
sudo apt install docker-compose

#For Arch-based systems
sudo pacman -S docker.io
sudo pacman -S docker-compose

# Making Docker run now and on startup
sudo systemctl start docker
sudo systemctl enable docker

# Using the CLI without sudo 
sudo usermod -aG docker $USER
sudo reboot
```

## How to run
- Navigate to the root of the project
- Open a terminal
- Start the containers: 
```bash
docker compose up
```
- Visit localhost:4400 to visit the website locally
- Or visit https://www.ianvink.nl to find the live version!
