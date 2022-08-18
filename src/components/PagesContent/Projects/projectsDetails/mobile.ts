import { Project } from "./data";
import flashlight from "../../../../assets/images/react-native-flashlight.png"

export const mobile: Project[] = [
    {
    id: "1",
    name: {
      "PT-BR": "Applicativo de Lanterna",
      EN: "Flashlight App",
    },
    image: flashlight,
    abstract: {
      "PT-BR": [
        "Esse projeto é um aplicativo de lanterna para Android com algumas funcionalidades extras:",
        "<ul>",
        "<li><strong>Modo Lanterna</strong>, em que a luz permanece ligada</li>",
        "<li><strong>Modo Câmera</strong>, em que a luz permanece ligada e os usuários podem tirar fotos e também podem acessar a galeria do smartphone</li>",
        "<li><strong>Modo SOS</strong>, em que a luz pisca conforme o código morse para SOS (. . .,- - -,. . .)</li>",
        "<li><strong>Modo Estroboscópio</strong>, em que a luz pisca numa frequência ajustável entre 0Hz e 10Hz</li>",
        "<li><strong>Modo Somente Tela</strong>, em que a luz permanece desligada, a tela tem seu brilho aumentado ao máximo e os usuários podem escolher a cor da tela</li>",
        "<li><strong>Ligar e Desligar Balançando o Aparelho</strong>, esta funcionalidade está presente nos modos Lanterna, SOS e Estroboscópio</li>",
        "</ul>",
        "Este projeto possui algumas limitações que podem ser melhoradas num futuro próximo:",
        "Não foi testado em IOS, portanto alguns ajustes serão necessários para rodar nesta plataforma.",
        "Os modos SOS and Estroboscópio mudam para o modo Lanterna quando o aplicativo roda em segundo plano. Isto ocorre pois estas funcionalidades foram implementadas com setInterval e setTimeout que param de rodar quando o aplicativo não está no primeiro plano.",
        "No modo Câmera a luz é desligada quando o aplicativo sai do primeiro plano. Isto ocorre porque o pacote React Native Vision Camera é quem controla a luz do flash e para evitar o gasto excessivo de bateria ele 'desliga' a câmera (e consequentemente a luz) quando não está em primeiro plano.",
        "E as requisições das permissões necessárias para o funcionamento do app podem apresentar erros, pois ainda não me dediquei muito a esta questão."
      ],
      EN: [
        "This project is an Android Flashlight App that has some extra functionalities:",
        "<ul>",
        "<li><strong>Torch mode</strong>, where light is on</li>",
        "<li><strong>Camera mode</strong>, where light is on and users can take photos and also access than from smartphone gallery</li>",
        "<li><strong>SOS mode</strong>, where light blinks an SOS morse code (. . .,- - -,. . .)</li>",
        "<li><strong>Stroboscope mode</strong>, where light blinks in an adjustable frequency, between 0Hz and 10Hz</li>",
        "<li><strong>Screen Only mode</strong>, where light is off, screen brigthness is set to maximum and users can choose screen color</li>",
        "<li><strong>Shake to turn on and off</strong>, when app is in Torch, SOS or Stroboscope mode</li>",
        "</ul>",
        "This project has some drawbacks that could be improved in the near future:",
        "It was not tested in IOS, some adjustments will be necessary if you want to run it in that platform.",
        "SOS and Stroboscope mode change to Torch mode when application is running in background. This happens because they were coded using setInterval and setTimeout that stop running when app is not in foreground.",
        "Camera mode light turns off when application is running in background. This happens because light is attached to camera, and, to save battery, camera gets in standy by when it is not in foreground.",
        "And permissions requests may not work properly, I did not put big efforts in it yet."
      ],
    },
    techs: ["1", "16", "17", "18", "19", "20", "21", "22", "23"],
    github: "https://github.com/tpabarbosa/react-native-flashlight",
    live: "https://www.youtube.com/watch?v=znWx-0OCPhA"
  },
]