import {cleaning, drivers, electrician, gardeners, groceries, painters, plumbers, tutors} from '../../assets/companyBackgrounds'
import food from '../../assets/food.jpeg'

const companies = [
  {
    name: 'Vonnect Sample0',
    location: 'Jawalakhel',
    distance: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 5,
    servicesOffered: {
      'Cooking':  {
        offered: false,
        price: undefined,
        picture: food,
      },
      'Cleaning':  {
        offered: false,
        price: undefined,
        picture: cleaning,
      },
      'Driving':  {
        offered: true,
        price: 600,
        picture: drivers
      },
      'Electricity':  {
        offered: false,
        price: undefined,
        picture: electrician
      },
      'Gardeners':  {
        offered: false,
        price: undefined,
        picture: gardeners
      },
      'Grocery': {
        offered: true,
        price: 10,
        picture: groceries
      },
      'Painter':  {
        offered: false,
        price: undefined,
        picture: painters
      },
      'Plumber':  {
        offered: false,
        price: undefined,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  },
  {
    name: 'Vonnect Sample1',
    location: 'Bhaisepati',
    distance: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 4.9,
    servicesOffered: {
      'Cooking': {
        offered: false,
        price: undefined,
        picture: food,
      },
      'Cleaning': {
        offered: false,
        price: undefined,
        picture: cleaning,
      },
      'Driving': {
        offered: true,
        price: 600,
        picture: drivers
      },
      'Electricity': {
        offered: false,
        price: undefined,
        picture: electrician
      },
      'Gardeners': {
        offered: true,
        price: 890,
        picture: gardeners
      },
      'Grocery': {
        offered: true,
        price: 10,
        picture: groceries
      },
      'Painter': {
        offered: false,
        price: undefined,
        picture: painters
      },
      'Plumber': {
        offered: false,
        price: undefined,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  },
  {
    name: 'Vonnect Sample2',
    location: 'Jawalakhel',
    distance: 4.9,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 1.8,
    servicesOffered: {
      'Cooking':  {
        offered: true,
        price: 1000,
        picture: food,
      },
      'Cleaning':  {
        offered: true,
        price: 1200,
        picture: cleaning,
      },
      'Driving': {
        offered: true,
        price: 2000,
        picture: drivers
      },
      'Electricity':  {
        offered: true,
        price: 900,
        picture: electrician
      },
      'Gardeners':  {
        offered: false,
        price: undefined,
        picture: gardeners
      },
      'Grocery': {
        offered: true,
        price: 14,
        picture: groceries
      },
      'Painter':  {
        offered: false,
        price: undefined,
        picture: painters
      },
      'Plumber':  {
        offered: false,
        price: undefined,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  },
  {
    name: 'Vonnect Sample3',
    location: 'Outer-Space',
    distance: 9.0,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 2.3,
    servicesOffered: {
      'Cooking':  {
        offered: false,
        price: undefined,
        picture: food,
      },
      'Cleaning':  {
        offered: false,
        price: undefined,
        picture: cleaning,
      },
      'Driving':  {
        offered: false,
        price: undefined,
        picture: drivers
      },
      'Electricity':  {
        offered: false,
        price: undefined,
        picture: electrician
      },
      'Gardeners':  {
        offered: false,
        price: undefined,
        picture: gardeners
      },
      'Grocery':  {
        offered: false,
        price: undefined,
        picture: groceries
      },
      'Painter': {
        offered: true,
        price: 600,
        picture: painters
      },
      'Plumber': {
        offered: true,
        price: 1100,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  },
  {
    name: 'Vonnect Sample4',
    location: 'Pepsi Cola',
    distance: 3.4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 3.9,
    servicesOffered: {
      'Cooking': {
        offered: true,
        price: 1900,
        picture: food,
      },
      'Cleaning': {
        offered: true,
        price: 1200,
        picture: cleaning,
      },
      'Driving': {
        offered: true,
        price: 2000,
        picture: drivers
      },
      'Electricity': {
        offered: true,
        price: 1000,
        picture: electrician
      },
      'Gardeners':  {
        offered: false,
        price: undefined,
        picture: gardeners
      },
      'Grocery': {
        offered: true,
        price: 9,
        picture: groceries
      },
      'Painter': {
        offered: false,
        price: undefined,
        picture: painters
      },
      'Plumber':  {
        offered: false,
        price: undefined,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  },
  {
    name: 'Vonnect Sample5',
    location: 'Rabi Bhawan',
    distance: 2.4,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet sapien neque. Nam scelerisque ante et dui ullamcorper tristique. Pellentesque venenatis tempus volutpat. Mauris venenatis tortor at urna rhoncus,',
    rating: 4.3,
    servicesOffered: {
      'Cooking': {
        offered: false,
        price: undefined,
        picture: food,
      },
      'Cleaning': {
        offered: false,
        price: undefined,
        picture: cleaning,
      },
      'Driving': {
        offered: true,
        price: 1450,
        picture: drivers
      },
      'Electricity': {
        offered: false,
        price: undefined,
        picture: electrician
      },
      'Gardeners': {
        offered: false,
        price: undefined,
        picture: gardeners
      },
      'Grocery': {
        offered: true,
        price: 13,
        picture: groceries
      },
      'Painter': {
        offered: false,
        price: undefined,
        picture: painters
      },
      'Plumber': {
        offered: false,
        price: undefined,
        picture: plumbers
      },
      'Tutor': {
        offered: true,
        price: 1000,
        picture: tutors
      }
    },
  }
]

export default companies