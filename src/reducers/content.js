const initialState = {
    content: [
        {
            id: 0,
            title: "Problem of modern frontend",
            body: "was also going to mention how our other friend was passed out on the street and I was absolutely shitfaced (you encouraged me to drink away my heartbreak and told me you’d make sure I got home safe, and I did because I trusted you since you were my friend for seven years) and you were pretty sober, of course. I was physically incapacitated, but still had enough wits about me to say no and even record myself saying no on my phone’s voice memo app while you were begging me to make out because something in me sensed danger, even though I didn’t want to believe it (right before things escalated and you decided fuck it, I’ll just force her). I felt that I couldn’t leave because my other friend was a crumpled heap on the floor and it was a two-person job to move him, and you used him to keep me around."
        },
        {
            id: 1,
            title: "Problem of modern frontend",
            body: "was also going to mention how our other friend was passed out on the street and I was absolutely shitfaced (you encouraged me to drink away my heartbreak and told me you’d make sure I got home safe, and I did because I trusted you since you were my friend for seven years) and you were pretty sober, of course. I was physically incapacitated, but still had enough wits about me to say no and even record myself saying no on my phone’s voice memo app while you were begging me to make out because something in me sensed danger, even though I didn’t want to believe it (right before things escalated and you decided fuck it, I’ll just force her). I felt that I couldn’t leave because my other friend was a crumpled heap on the floor and it was a two-person job to move him, and you used him to keep me around."
        },
        {
            id: 2,
            title: "Problem of modern frontend",
            body: "was also going to mention how our other friend was passed out on the street and I was absolutely shitfaced (you encouraged me to drink away my heartbreak and told me you’d make sure I got home safe, and I did because I trusted you since you were my friend for seven years) and you were pretty sober, of course. I was physically incapacitated, but still had enough wits about me to say no and even record myself saying no on my phone’s voice memo app while you were begging me to make out because something in me sensed danger, even though I didn’t want to believe it (right before things escalated and you decided fuck it, I’ll just force her). I felt that I couldn’t leave because my other friend was a crumpled heap on the floor and it was a two-person job to move him, and you used him to keep me around."
        },
        {
            id: 3,
            title: "Problem of modern frontend",
            body: "was also going to mention how our other friend was passed out on the street and I was absolutely shitfaced (you encouraged me to drink away my heartbreak and told me you’d make sure I got home safe, and I did because I trusted you since you were my friend for seven years) and you were pretty sober, of course. I was physically incapacitated, but still had enough wits about me to say no and even record myself saying no on my phone’s voice memo app while you were begging me to make out because something in me sensed danger, even though I didn’t want to believe it (right before things escalated and you decided fuck it, I’ll just force her). I felt that I couldn’t leave because my other friend was a crumpled heap on the floor and it was a two-person job to move him, and you used him to keep me around."
        }

    ]
};

export default function content(state = initialState, action) {

    let newState = Object.assign({}, state);

    switch (action.type) {
        case 'DELETE_POST':
            console.log(newState.content);
            newState.content.splice(action.payload, 1);

            return newState;

        case 'ADD_POST':
            // load to db, after adding we can add it in our local storage
            newState.content.push(action.payload);
            return newState;

        default:
            return newState;
    }

}
