* {
  margin: 0;
}
html,
body {
  --gray: #e1e1e6;
  --black: #202024;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
}

body {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgb(0, 0, 0) no-repeat center/cover;
}
main {
  position: relative;
  padding: 0px;
  display: flex;
  justify-content: center;
  background: #202024;
  width: 22.4rem;
  height: 43.5rem;
  color: var(--gray);
}
.vector {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 50%;
}
.hexaArea {
  width: 100%;
  height: 220%;
  margin: 0px;
  padding: 0px;
  display: grid;
  grid-template-columns: repeat(10, 10%);
  grid-template-rows: repeat(10, 10%);
  align-items: center;
  row-gap: 0px;
  column-gap: 0px;
}
.hexagons {
  margin: 0px;
  padding: 0px;
  width: 502.33%;
  height: 44.661%;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
.hexagonsMid {
  margin: 0px;
  padding: 0px;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
  width: 125.59%;
  height: 66.995%;
}
#hexa1 {
  top: -100vh;
  z-index: 4;
  align-self: center;
  justify-self: center;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 5;
  background: linear-gradient(to right, #ff3636 0%, #ff7913 50%, #ff930f 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 0s;
}
#hexa1Cube {
  z-index: 5;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: center;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 1;
  grid-row-end: 5;
  opacity: 0.1;
  background: linear-gradient(
    155.21deg,
    rgba(255, 0, 142, 0) 9.1%,
    #ffcd1e 89.46%
  );
  transform: matrix(1, 0, 0, -1, 0, 0);
}
#hexa2 {
  top: -100vh;
  height: 271.9%;
  z-index: 5;
  align-self: flex-end;
  justify-self: flex-start;
  grid-column-start: 1;
  grid-row-start: 4;
  background: linear-gradient(to right, #ff008e 0%, #ff3636 50%, #ff7913 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 0.2s;
}
#hexa2Cube {
  z-index: 6;
  width: 100%;
  height: 100%;
  align-self: flex-end;
  justify-self: flex-start;
  grid-column-start: 1;
  grid-row-start: 4;
  opacity: 0.1;
  background: linear-gradient(
    153deg,
    #d6c7d7 18.39%,
    rgba(255, 0, 142, 0) 84.08%
  );
  transform: rotate(-180deg);
}
#hexa3 {
  top: -100vh;
  height: 271.9%;
  z-index: 3;
  height: 250%;
  align-self: flex-end;
  justify-self: flex-end;
  grid-column-start: 10;
  grid-row-start: 4;
  background: linear-gradient(to right, #ff7913 0%, #ff930f 50%, #ffd749 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 0.4s;
}
#hexa3Cube {
  z-index: 5;
  width: 100%;
  height: 100%;
  align-self: flex-end;
  justify-self: flex-end;
  grid-column-start: 10;
  grid-row-start: 4;
  opacity: 0.1;
  background: linear-gradient(
    153.03deg,
    #ffd65a 18.39%,
    rgba(255, 251, 144, 0.795) 84.08%
  );
  transform: matrix(1, 0, 0, -1, 0, 0);
}
#hexa4 {
  top: -100vh;
  z-index: 6;
  align-self: center;
  justify-self: flex-start;
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 8;
  background: linear-gradient(to right, #ff008e 0%, #ff3636 50%, #ff7913 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 0.6s;
}
#hexa4Cube {
  z-index: 6;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: flex-start;
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 8;
  opacity: 0.1;
  background: linear-gradient(
    153.03deg,
    #8257e5 18.39%,
    rgba(255, 0, 142, 0) 84.08%
  );
  transform: rotate(-180deg);
}
#hexa5 {
  top: -100vh;
  z-index: 2;
  position: relative;
  align-self: center;
  justify-self: flex-end;
  grid-column-start: 10;
  grid-row-start: 2;
  grid-row-end: 8;
  background: linear-gradient(to right, #ff7913 0%, #ff930f 50%, #ffcd1e 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 0.8s;
}
#hexa5Cube {
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  align-self: center;
  justify-self: flex-end;
  grid-column-start: 10;
  grid-row-start: 2;
  grid-row-end: 8;
  opacity: 0.1;
  background: linear-gradient(
    55.21deg,
    rgba(255, 0, 140, 0.242) 9.1%,
    #ffcd1e 89.46%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
#hexa6 {
  top: -100vh;
  z-index: 1;
  align-self: flex-end;
  justify-self: center;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 3;
  grid-row-end: 7;
  background: linear-gradient(to right, #ff3636 0%, #ff7913 50%, #ff930f 100%);
  animation: goDown 1s ease-in-out reverse forwards;
  animation-delay: 1s;
}
#hexa6Cube {
  z-index: 2;
  width: 100%;
  height: 100%;
  align-self: flex-end;
  justify-self: center;
  grid-column-start: 4;
  grid-column-end: 8;
  grid-row-start: 3;
  grid-row-end: 7;
  opacity: 0.1;
  background: linear-gradient(
    153.03deg,
    #8257e5 18.39%,
    rgba(255, 0, 142, 0) 84.08%
  );
}

.container {
  text-align: center;
  margin-top: 46%;
  height: 54%;
  width: 100%;
}
.avatar {
  display: flex;
  justify-content: center;
  z-index: 9;
  position: relative;
  width: 100%;
  height: 49%;
  margin: 0 auto 0;
}
.avatar::before {
  content: '';
  float: left;
  height: 0;
}
.avatar span > img {
  z-index: 10;
  width: 20%;
  height: 100%;
  position: absolute;
  top: -40%;
}
.avatar > img {
  width: 45%;
  height: 100%;
  object-fit: cover;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  font-size: 1.5em;
  margin-top: 10%;
}

a {
  margin: top 0.25em;
  color: var(--gray);
  text-decoration: none;

  display: flex;
  gap: 0.75em;
  justify-content: center;
  align-items: center;
}
a > img {
  width: 1em;
  height: 1em;
}
p {
  margin-top: 2em;
}
ul {
  display: flex;
  align-items: center;
  margin-top: 4em;
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1em;
  justify-content: center;
}
li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #323238;
  width: 4em;
  height: 3.5em;
  clip-path: polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%);
  transition: background-color 0.05s;
}
li:hover {
  background-color: #414140;
}
#youtube {
  height: 4em;
  width: 3.5em;
  clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
}
.socials {
  position: absolute;
  width: 50%;
}
#socialYoutube {
  width: 55%;
}
@media only screen and (max-width: 899px) {
  main {
    width: 100vw;
    height: 100vh;
  }
  body {
    font-size: 16px;
  }
}
@media only screen and (min-width: 900px) {
  main {
    width: 15rem;
    height: 30rem;
  }
  body {
    font-size: 12px;
  }
}
@media only screen and (min-width: 1200px) {
  main {
    width: 21rem;
    height: 42rem;
  }
  body {
    font-size: 20px;
  }
}
@media only screen and (min-width: 1800px) {
  main {
    width: 31.5rem;
    height: 63rem;
  }
  body {
    font-size: 32px;
  }
}
@media only screen and (min-width: 2500px) {
  main {
    width: 55rem;
    height: 110rem;
  }
  body {
    font-size: 50px;
  }
}
@keyframes goDown {
  0% {
    transform: translateY(100vh);
  }
  15% {
    transform: translateY(103vh);
  }
  100% {
    transform: translateY(-130vh);
  }
}
