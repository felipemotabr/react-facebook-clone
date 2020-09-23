import React from 'react';

import { Container, Card, Avatar, Title, IconPlus } from './styles';
import ImageProfile from './../../Images/avatar.jpg';
// import CardItem from './Card';

const StoryItem = [
  {
    id: 1,
    name: 'Omid Armin',
    ImageStory: '/image/stories/hayden-hatch-r5rEvenwXGA-unsplash.jpg',
    ImageProfile: '/image/avatar/omid-armin-DeQ7YsiD6v8-unsplash.jpg',
  },
  {
    id: 2,
    name: 'Hunter Matthews',
    ImageStory: 'image/stories/ingmar-gsL1LSDUfHQ-unsplash.jpg',
    ImageProfile: '/image/avatar/hunter-matthews-X7gHHDPlp8U-unsplash.jpg',
  },
  {
    id: 3,
    name: 'Milad Shams',
    ImageStory: 'image/stories/tomas-vydrzal-zHb6Vy7koUc-unsplash.jpg',
    ImageProfile: '/image/avatar/milad-shams-YVGe3s1Qhfw-unsplash.jpg',
  },
  {
    id: 4,
    name: 'Karsten Winegeart',
    ImageStory: 'image/stories/w-8bc5urwbMY0-unsplash.jpg',
    ImageProfile: '/image/avatar/karsten-winegeart-KSqfFHtHpro-unsplash.jpg',
  },
];


const Stories: React.FC = () => {
  return (
    <Container>
      <Card style={{ backgroundImage: `url(${ImageProfile})` }}>
        <div></div>
        <button>
          <IconPlus />
        </button>
        <Title>
          Create a Story
        </Title>
      </Card>
      {/* <Card style={{ backgroundImage: `url(https://wallpapers.moviemania.io/phone/movie/299534/89d58e/avengers-endgame-phone-wallpaper.jpg?w=1536&h=2732)` }}>
        <Avatar>
          <img src={ImageProfile} alt={''} />
        </Avatar>
        <Title>
          Felipe Mota
        </Title>
      </Card> */}

      {StoryItem.map(story => {
        return (
          <Card key={story.id} style={{ backgroundImage: `url(${story.ImageStory})` }}>
            <Avatar>
              <img src={story.ImageProfile} alt={''} />
            </Avatar>
            <Title>
              {story.name}
            </Title>
          </Card>
        );
      })}

    </Container >
  );
}

export default Stories;