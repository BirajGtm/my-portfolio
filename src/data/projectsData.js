import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Book My Seat',
        projectDesc: 'A cross-platform mobile app for discovering nearby restaurants, browsing menus, and booking seats in real time, using Google Maps integration.',
        tags: ['React Native', 'Node.js', 'Express', 'PostgreSQL', 'Google Maps API'],
        code: 'https://github.com/BirajGtm/book-my-seat', 
        demo: 'https://drive.google.com/drive/folders/1REsbzcMfKNUXP0NjFFPqfeoylAYPX9bb?usp=sharing', 
        image: one
    },
    {
        id: 2,
        projectName: 'Bhansa Ghar - Food Delivery Platform',
        projectDesc: 'A web application designed to simulate a food delivery platform. It allows customers to browse restaurant menus, place orders, and track delivery. Restaurants can manage menus and process incoming orders, while drivers can view and update delivery assignments.',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Passport.js'],
        code: 'https://github.com/BirajGtm/bhansa-ghar', 
        demo: 'https://bhansa-ghar.onrender.com/',
        image: two
    },    
    {
        id: 3,
        projectName: "Thief Detector",
        projectDesc: "A motion detection system that uses OpenCV to identify potential intruders in a video feed by analyzing changes in the scene.",
        tags: ["Python", "OpenCV", "Image Processing", "Machine Learning"],
        code: "https://github.com/BirajGtm/ml-thief-detector",
        demo: "https://github.com/BirajGtm/ml-thief-detector",
        image: three
    },
    {
        id: 4,
        projectName: "PDF Audiobook Creator",
        projectDesc: "A Python application that extracts text from a PDF file, cleans it, and converts it into speech, generating an audiobook.",
        tags: ["Python", "gTTS", "PyPDF2", "NLP", "Machine Learning"],
        code: "https://github.com/BirajGtm/ml-audiobook-creator",
        demo: "https://github.com/BirajGtm/ml-audiobook-creator",
        image: four
    }
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/