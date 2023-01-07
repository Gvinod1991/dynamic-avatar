# dynamic-avatar

## Project Requiremnts

build an `<Avatar>` component similar to github profile picture

The problem that we're solving is building an avatar component, similar to the one on GitHub. The requirements for this component are as follows. It should take an optional URL for the avatar photo. If none is provided, use the default avatar photo.

It should check if the avatar URL is valid. If it's not, it should use the default avatar photo. In terms of the API, we're going to combine JSDoc plus TypeScript to provide good documentation.

In terms of TSX, the avatar is going to look something like this, where you pass in the URL, which is the URL of an image to render in the avatar. Those are the requirements for this project. Let's get to it.