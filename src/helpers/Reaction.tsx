import IconLike from '../Images/like.svg'
import IconAngry from '../Images/angry.svg'
import IconCare from '../Images/care.svg'
import IconHaha from '../Images/haha.svg'
import IconLove from '../Images/love.svg'
import IconSad from '../Images/sad.svg'
import IconWow from '../Images/wow.svg'
 
const GetReaction = (icon: any) => {
  const icons: any = {
    'Like': {
      name: 'Like',
      icon: IconLike
    },
    'Love': {
      name: 'Love',
      icon: IconLove
    },
    'Smile': {
      name: 'Smile',
      icon: IconHaha
    },
    'IconCare': {
      name: 'IconCare',
      icon: IconCare
    },
    'IconWow': {
      name: 'IconWow',
      icon: IconWow
    },
    'IconSad': {
      name: 'IconSad',
      icon: IconSad
    },
    'IconAngry': {
      name: 'IconAngry',
      icon: IconAngry
    }
  };

  return icons[icon].icon;
}

export default GetReaction