export const data = [
    {
        name: '500px',
        image: 'icons8-500px.svg',
        url: 'https://500px.com/ommakana',
        description: '500px is a platform for professional photographers to show case the camera "keeda" within them. Which is nothing new when it comes to such platforms. But ! In here you can also earn $$, by submitting the photos and if it gets licensed, it can be bought by buyers from distribution partners.! Nice right.. I also have one of my photo selected.',
        urlText: 'Photos by me',
        color: {
            r: 149,
            g: 161,
            b: 165
        }
    },
    {
        name: 'instagram',
        image: 'icons8-instagram.svg',
        url: 'https://www.instagram.com/makanaom/',
        description: 'This is the only platform where am most active. I try to keep here all my travel stories, cycling, or any outdoor adventures I have experienced that are worth sharing. I even see "writing" as one fo my adventures, so I sometimes share thoughts running through my mind. You can see all these without following me because its public :P. But if you like please do follow me here',
        urlText: 'Instagram - Om Makana',
        color: {
            r: 236,
            g: 74,
            b: 102
        }
    },
    {
        name: 'linkedin',
        image: 'icons8-linkedin.svg',
        url: 'https://www.linkedin.com/in/om-makana-5a08b510b/',
        description: 'Now since my IT-job is the only source of income as of now, I try to keep up with skills required to work with some intelligent people around (else I look really dumb and I say it with my experience). Only thing that I know am good at is good in learning and observing. I like to make workplace a positive environment and have fun. May be if you know of some vacancy and think I fit in you can get all my details here in my linkedin profile',
        urlText: 'a developing developer - Om Makana',
        color: {
            r: 2,
            g: 97,
            b: 151
        }
    },
    {
        name: 'facebook',
        image: 'icons8-facebook.svg',
        url: 'https://www.linkedin.com/in/om-makana-5a08b510b/',
        description: 'Now since my IT-job is the only source of income as of now, I try to keep up with skills required to work with some intelligent people around (else I look really dumb and I say it with my experience). Only thing that I know am good at is good in learning and observing. I like to make workplace a positive environment and have fun. May be if you know of some vacancy and think I fit in you can get all my details here in my linkedin profile',
        urlText: 'a developing developer - Om Makana',
        color: {
            r: 173,
            g: 216,
            b: 230
        }
    },
];

export function lerp(v1, v2, fraction) {
    return (v2 - v1) * fraction + v1;
  }
  
  export function blend(c1, c2, fraction) {
    return {
      r: Math.floor(lerp(c1.r, c2.r, fraction)),
      g: Math.floor(lerp(c1.g, c2.g, fraction)),
      b: Math.floor(lerp(c1.b, c2.b, fraction)),
    };
  }
  