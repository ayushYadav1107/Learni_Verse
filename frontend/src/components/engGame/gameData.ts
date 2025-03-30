import { Scene, Character } from './types';

export const characters: Record<string, Character> = {
  mei: {
    name: 'Mei',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400',
    position: 'left'
  },
  kai: {
    name: 'Kai',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    position: 'right'
  }
};

export const scenes: Record<string, Scene> = {
  intro: {
    id: 'intro',
    background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200',
    dialogue: [
      {
        text: 'It was a beautiful spring morning in the city...'
      },
      {
        character: characters.mei,
        text: "I can't believe I'm late for my first day!"
      },
      {
        character: characters.kai,
        text: "Hey! Watch where you're going!"
      },
      {
        character: characters.mei,
        text: "I'm so sorry! I'm in a hurry and...",
        choices: [
          { text: "Apologize and keep running", nextScene: 'scene2a' },
          { text: "Stop and help them up", nextScene: 'scene2b' }
        ]
      }
    ]
  },
  scene2a: {
    id: 'scene2a',
    background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200',
    dialogue: [
      {
        character: characters.mei,
        text: "Sorry again! I really have to go!"
      },
      {
        character: characters.kai,
        text: "Wait... *sigh* They're gone..."
      }
    ]
  },
  scene2b: {
    id: 'scene2b',
    background: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1200',
    dialogue: [
      {
        character: characters.mei,
        text: "Here, let me help you up. I'm really sorry about that."
      },
      {
        character: characters.kai,
        text: "Thanks... Hey, you look familiar. Do you go to Central Academy?"
      },
      {
        character: characters.mei,
        text: "Yes! Actually, today's my first day!"
      }
    ]
  }
};