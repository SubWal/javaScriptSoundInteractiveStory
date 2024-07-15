const storyContainer = document.getElementById('story');
const sfx = document.getElementById('sfx');

const storyData = {
    start: {
        text: "You are standing at a crossroads. Do you want to go left or right?",
        choices: [
            { text: "Go left", next: "leftPath", sound: "sounds/crossroads.mp3" },
            { text: "Go right", next: "rightPath", sound: "sounds/crossroads.mp3" }
        ]
    },
    leftPath: {
        text: "You walked left and found a river. Do you want to swim across or walk along the bank?",
        choices: [
            { text: "Swim across", next: "swim", sound: "sounds/river.mp3" },
            { text: "Walk along the bank", next: "walk", sound: "sounds/forest.mp3" }
        ]
    },
    rightPath: {
        text: "You walked right and found a dense forest. Do you want to enter the forest or stay on the path?",
        choices: [
            { text: "Enter the forest", next: "forest", sound: "sounds/forest.mp3" },
            { text: "Stay on the path", next: "path", sound: "sounds/path.mp3" }
        ]
    },
    swim: {
        text: "You tried to swim across the river but it was too strong. You drowned. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/drown.mp3" }
        ]
    },
    walk: {
        text: "You walked along the bank and found a village. Do you want to explore the village or keep walking?",
        choices: [
            { text: "Explore the village", next: "village", sound: "sounds/village.mp3" },
            { text: "Keep walking", next: "walkFurther", sound: "sounds/forest.mp3" }
        ]
    },
    village: {
        text: "You explored the village and found a friendly community. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/village.mp3" }
        ]
    },
    walkFurther: {
        text: "You walked further and found a mountain. Do you want to climb the mountain or rest?",
        choices: [
            { text: "Climb the mountain", next: "mountain", sound: "sounds/forest.mp3" },
            { text: "Rest", next: "rest", sound: "sounds/path.mp3" }
        ]
    },
    mountain: {
        text: "You climbed the mountain and enjoyed a beautiful view. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/forest.mp3" }
        ]
    },
    rest: {
        text: "You rested and regained your strength. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/path.mp3" }
        ]
    },
    forest: {
        text: "You entered the forest and got lost. Do you want to keep walking or try to find your way out?",
        choices: [
            { text: "Keep walking", next: "lost", sound: "sounds/lost.mp3" },
            { text: "Find your way out", next: "findWayOut", sound: "sounds/forest.mp3" }
        ]
    },
    lost: {
        text: "You wandered for days and eventually found your way out. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/lost.mp3" }
        ]
    },
    findWayOut: {
        text: "You found your way out and discovered a hidden treasure. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/forest.mp3" }
        ]
    },
    path: {
        text: "You stayed on the path and found your way home. You are safe. The end.",
        choices: [
            { text: "Restart", next: "start", sound: "sounds/home.mp3" }
        ]
    }
};

function renderStory(node) {
    const storyNode = storyData[node];
    storyContainer.innerHTML = `<p>${storyNode.text}</p>`;
    const choicesDiv = document.createElement('div');
    choicesDiv.classList.add('choice');
    storyNode.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            playSound(choice.sound);
            renderStory(choice.next);
        };
        choicesDiv.appendChild(button);
    });
    storyContainer.appendChild(choicesDiv);
}

function playSound(src) {
    sfx.src = src;
    sfx.play();
}

// Start the story
renderStory('start');
