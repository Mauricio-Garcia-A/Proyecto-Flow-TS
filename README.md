# Proyecto-Flow-TS

## Proyecto APP Clima - Challenge FronEnd Telecom FLOW  

Desarrollo de una aplicación de "Consulta de clima" en la que el usuario pueda visualizar el pronóstico actual, y el de los próximos 5 días de la ciudad en la que se encuentra, y a su vez un selector que permita cambiar entre 5 ciudades.

-  #### Para el desarrollo en cuestión se utilizo ReactJS con TS (creado con ViteJS)
```comando
 $ npm create vite@latest
```
   
-  #### Se Añade linter para (TypeScript + React):
```comando
 $ npx eslint --init
```
    
-  #### Se utilizar el servicio de API de "Open Weather Map":
    https://openweathermap.org/api


-  #### Se Utilizan las sigientes Librerias:
  - Graficos de Linea (temperatura por hora): 'react-chartjs-2'
    Mostar los datos de la temperatura de cada dia por hora, no es una tarea asignada en el challenge. Como esta funcionalidad agregada es un accion proactiva para aprobechar dicha informacion suminstrada por la API, se decide utilizar una libreria de graficos, en lugar de programarlos desde cero.
```comando
 $ npm install --save chart.js react-chartjs-2 -E
```
  - Selector Personalizado (Selector de ciudades): 'react-select'
    Debido a que el elemnto/etiqueta select propietario de HTML tiene limitaciones a la hora de customizar sus estilos personalizados, se opta por utilizar una libreria que facilite esta tarea, para lograr una armonia de diceño del SELECT de ciudades con el resto de la WebApp.
```comando
 $ npm i react-select -E
```
  - Git Page (Deploy de la WebApp en GitHub): 'gh-pages'
    Se eligió GitHub Pages, como opciones de hosting para alojar e implementar esta página web, ya que es una WebApp estatica, con poca interaccion dinamica.
```comando
 $ npm i gh-pages -D -E
```
<br/>  

## Decisiones tomadas
<table><tr><td valign="top" width="80%">

- ### Decisiones tomadas en el Diseño (UI/UX)
Para diseñar la interfaz usuario se aplicaron heurísticas y patrones de diseño UI. Buscando una app web minimalista, pero atractiva.

  
  
- ### Decisiones tomadas en el Desarrollo
Para el desarrollo se decidió hacerlo en ReactJs con TS (TypeScript), trabajando con archivos con extencion ‘.tsx’ <br/> 
La imagenes utilizadas por cuestion de performance son de extencion '.webp' las mas grandes, y '.png' las mas pequeñas que precisan mayor calidad de detalle.<br/>
Para los estilos se utilizo la librería de SASS.<br/> 
En lo que respecta a la "Arquitectura de código", se busco seguir una estructura parecida a "Atomic Design" para organizar el proyecto, basada en la funcionalidad de cada componente:<br/> 
```
/
├── public/
│   ├── favicon.ico
│   ├── icons/
│   │   ├── arrow.svg
│   │   └── ( ... )
│   ├──iconsWeather/
│   │   ├── 01d.png
│   │   └── ( ... )
│   └── images/
│       ├── fondoAPP.webp
│       ├── fondoHome.webp
│       └── ( ... )
├── src/
│   ├── components/
│   │   ├── NavBar/
│   │   │   ├── NavBar.tsx
│   │   │   ├── NavBar.scss
│   │   │   └── ( ... )
│   │   ├── ChartLineWeatherHours/
│   │   ├── ForecastSection/
│   │   ├── GeolocatedCity/
│   │   ├── Icons/
│   │   ├── ModalDaySelected/
│   │   ├── SearchCity/
│   │   ├── SelectorCity/
│   │   ├── WeatherSection/
│   │   └── ( ... )
│   ├── hooks/
│   │   ├── useSearchCityById.ts
│   │   ├── useSearchCityByName.ts
│   │   └── useWeatherCity.ts
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.tsx
│   │       └── Home.scss
│   ├── sevices/
│   │   ├── configAPI.ts
│   │   ├── getGeolocation.ts
│   │   └── getWeather.ts
│   ├── context/
│   │   └── ContextListCities.tsx
│   ├── assets/
│   ├── helper/
│   │   ├── BuildListTemperaturesHours.ts
│   │   ├── FormattedCurrentDate.ts
│   │   ├── formattedTimeError.ts
│   │   └── formatWindDirection.ts
│   ├── utils/
│   │   └── ListCities.ts.ts
│   ├── _tests_/
│   │   └── test01.ts
│   ├── types.d.ts
│   ├── index.css
│   ├── App.css
│   └── App.tsx
├── index.html
└── package.json
```

</td></tr></table>  

<br/>  


## Lenguajes y herramientas utilizadas 
<div align="center">  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://www.javascript.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg" alt="JavaScript" height="50" /></a>  
<a href="https://www.typescriptlang.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg" alt="TypeScript" height="50" /></a>
<a href="https://sass-lang.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/sass-original.svg" alt="Sass" height="50" /></a>  
<a href="https://github.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg" alt="Git" height="50" /></a>  
</div>  

<br/>  