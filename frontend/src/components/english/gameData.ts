import { Scene, Character } from './types';

export const characters: Record<string, Character> = {
  raven: {
    name: 'Mr. Raven',
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3c31a275-caaa-48bd-8b6e-ae0724452f4d/d69envz-bc4a328f-0002-4cef-876f-fe98de43d30b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNjMzFhMjc1LWNhYWEtNDhiZC04YjZlLWFlMDcyNDQ1MmY0ZFwvZDY5ZW52ei1iYzRhMzI4Zi0wMDAyLTRjZWYtODc2Zi1mZTk4ZGU0M2QzMGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2SwIFRpAcwiDSFPufUQtYIHCxi7WPtoafyllos6IDv4',
    position: 'left'
  },
  fox: {
    name: 'Reynard the Fox',
    image: 'https://art.pixilart.com/sr2b87cbd590b1a.png?w=200',
    position: 'right'
  },
  cheese: {
    name: 'Morsel of Cheese',
    image: 'https://cdn-icons-png.freepik.com/512/411/411038.png?w=100',
    position: 'center'
  }
};

export const scenes: Record<string, Scene> = {
  intro: {
    id: 'forest_intro',
    background: 'https://img.freepik.com/free-photo/8-bit-graphics-pixels-scene-with-forest_23-2151120993.jpg',
    dialogue: [
      {
        text: 'Mr. Raven was perched upon a limb, holding a tasty morsel in his beak.'
      },
      {
        character: characters.fox,
        text: 'Ah, what a handsome bird! Surely, if you could sing, the other birds would call you King!',
        choices: [
          { text: 'Open beak and sing', nextScene: 'raven_sings' },
          { text: 'Ignore the fox', nextScene: 'raven_ignores' }
        ]
      }
    ]
  },
  raven_sings: {
    id: 'raven_sings',
    background: 'https://img.freepik.com/free-photo/8-bit-graphics-pixels-scene-with-forest_23-2151120993.jpg',
    dialogue: [
      {
        character: characters.raven,
        text: 'CAWWW! (The cheese falls to the ground)'
      },
      {
        character: characters.cheese,
        text: '...'
      },
      {
        character: characters.fox,
        text: 'Haha! Thank you for the snack, my foolish friend. Remember, pride is rather unwise!',
        choices: [
          { text: 'View the poem.', nextScene: 'poem' },
        ]
      }
    ]
  },
  raven_ignores: {
    id: 'raven_ignores',
    background: 'https://img.freepik.com/free-photo/8-bit-graphics-pixels-scene-with-forest_23-2151120993.jpg',
    dialogue: [
      {
        character: characters.raven,
        text: '(Stays silent, gripping the cheese tighter)'
      },
      {
        character: characters.fox,
        text: 'Hmm... A wise bird indeed. I shall find my meal elsewhere.',
        choices: [
          { text: 'View the poem.', nextScene: 'poem' },
        ]
      }
        
    ]
  },
  poem: {
    id: 'poem',
    background: 'https://64.media.tumblr.com/5d37ab2aa782462c7aa092f7bd0d27cb/2f374d07287b003b-f4/s500x750/ab1c31d690b186ff81975319b4d49721e194893b.gifv',
    dialogue: [
      {
        text: 'Mr. Raven was perched upon a limb,'
      },
      {
        text: 'And Reynard the Fox looked up at him;'
      },
      {
        text: 'For the Raven held in his great big beak,'
      },
      {
        text: 'A morsel the Fox would go far to seek.'
      },
      {
        text: 'Said the Fox, in admiring tones: “My word!'
      },
      {
        text: 'Sir Raven, you are a handsome bird.'
      },
      {
        text: 'Such feathers! If you would only sing,'
      },
      {
        text: 'The birds of these woods would call you King.”'
      },
      {
        text: 'The Raven, who did not see the joke,'
      },
      {
        text: 'Forgot that his voice was just a croak.'
      },
      {
        text: 'He opened his beak, in his foolish pride–'
      },
      {
        text: 'And down fell the morsel the Fox had eyed.'
      },
      {
        text: '“Ha-ha!” laughed the Fox. “And now you know,'
      },
      {
        text: 'Ignore sweet words that make you glow.'
      },
      {
        text: 'Pride, my friend, is rather unwise;'
      },
      {
        text: 'I’m sure this teaching is quite a surprise.”'
      }
    ]
  }
};