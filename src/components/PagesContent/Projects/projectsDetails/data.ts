import { Language } from "../../../../Translation";


export type ITech = {
  id: string;
  name: string;
  color?: string;
  icon?: string;
};

export type Project = {
  id: string;
  name: { [lang in Language]: string };
  image?: string;
  abstract: { [lang in Language]: string[] };
  techs?: string[];
  github?: string;
  live?: string;
};

export enum Tech {
  Javascript = "1",
  Typescript = "2",
  HTML5 = "3",
  CSS3 = "4",
  Git = "5",
  ReactJs = "6",
  ReactRouter = "7",
  StyledComponents = "8",
  HTMLCanvas = "9",
  PHP = "10",
  JQuery = "11",
  Moodle = "12",
  Rollup = "13",
  npm = "14",
  dompurify = "15",
  ReactNative = "16",
  ReactNativeSlider = "17",
  ReactNativeCameraRoll = "18",
  ReactNativeScreenBrightness = "19",
  ReactNativeShake = "20",
  ReactNativeTorch = "21",
  ReactNativeVectorIcons = "22",
  ReactNativeVsionCamera= "23",
  ReactIcons = "24",
  MockServiceworker = "25",
  AxeCore = "26",
  FontAwesome = "27",
  NoFramework = "28",
  InProduction = "29",
  ReactHookForm = "30",
  Yup = "31",
  Express = "32",
  NodeJs = "33",
  TypeORM = "34",
  Postgres = "35",
  MySQL = "36",
  JWT = "37",
  RestAPI = "38",
  SocketIO = "39",
  AudioContextAPI = "40",
}

export const techs: ITech[] = [
  {
    id: "1",
    name: "Javascript",
  },
  {
    id: "2",
    name: "Typescript",
  },
  {
    id: "3",
    name: "HTML5",
  },
  {
    id: "4",
    name: "CSS",
  },
  {
    id: "5",
    name: "Git",
  },
  {
    id: "6",
    name: "ReactJs",
  },
  {
    id: "7",
    name: "React Router V6",
  },
  {
    id: "8",
    name: "Styled Components",
  },
  {
    id: "9",
    name: "HTML Canvas elements",
  },
  {
    id: "10",
    name: "PHP",
  },
  {
    id: "11",
    name: "JQuery",
  },
  {
    id: "12",
    name: "Moodle",
  },
  {
    id: "13",
    name: "Rollup",
  },
  {
    id: "14",
    name: "npm",
  },
  {
    id: "15",
    name: "dompurify",
  },
  {
    id: "16",
    name: "React Native",
  },
  {
    id: "17",
    name: "React Native Slider",
  },
  {
    id: "18",
    name: "React Native Camera Roll",
  },
  {
    id: "19",
    name: "React Native Screen Brightness",
  },
  {
    id: "20",
    name: "React Native Shake",
  },
  {
    id: "21",
    name: "React Native Torch",
  },
  {
    id: "22",
    name: "React Native Vector Icons",
  },
  {
    id: "23",
    name: "React Native Vision Camera",
  },
  {
    id: "24",
    name: "React Icons",
  },
  {
    id: "25",
    name: "Mock Service Worker",
  },
  {
    id: "26",
    name: "Axe Core",
  },
  {
    id: "27",
    name: "Font Awesome",
  },
  {
    id: "28",
    name: "No Framework",
  },
  {
    id: "29", 
    name: "In Production"
  },
  {
    id: "30", 
    name: "React Hook Form"
  },
  {
    id: "31", 
    name: "Yup"
  },
  {
    id: "32", 
    name: "Express"
  },
  {
    id: "33", 
    name: "NodeJs"
  },
  {
    id: "34", 
    name: "TypeORM"
  },
  {
    id: "35", 
    name: "Postgres"
  },
  {
    id: "36", 
    name: "MySQL"
  },
  {
    id: "37", 
    name: "JWT"
  },
  {
    id: "38", 
    name: "REST API"
  },
  {
    id: "39", 
    name: "Socket IO"
  },
  {
    id: "40", 
    name: "Audio Context API"
  },
];

