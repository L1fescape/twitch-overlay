# Twitch Overlay

![Twitch Overlay with marquee text](http://i.imgur.com/lRDQK5D.jpg)

## Install

1. Install the [Browser Source Plugin](https://obsproject.com/forum/resources/browser-plugin.115/) for [OBS](https://obsproject.com/)
2. Install dependencies: 

  ```
  $ npm install
  ```

3. Start the webpack dev server:

  ```
  $ npm start
  ```

4. Add a new browser media source inside of OBS and point the url to `http://localhost:3000`
5. Start streaming!

## TODO

- I've written an expressjs backend to recieve and display the current song I'm listening to in Chrome. Inside the `CurrentSong` component in `src/components` I'm fetching the current song from that server and displaying it on the overlay. I should create a separate module for this that you can install.
- Style all the things! It's really ugly right now...
