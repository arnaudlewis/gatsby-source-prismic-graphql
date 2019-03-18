import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: white;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Hind Vadodara", "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 26px;
  margin-top: 20px;
`

const Logo = styled.div`
  @keyframes heart {
    0% {
      transform: scale(0.9)
    }
    50% {
      transform: scale(1)
    }
    100%{
      transform: scale(0.9)
    }
}

  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #3d3e8c;
  background-size: 36%;
  animation-name: heart;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  transition-timing-function: ease-in-out;
  transform-origin: center;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Loader = styled.div`
  background-color: rgba(20,19,56,0.9);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export default () =>
  <Loader>
    <Wrapper>
      <Logo>
        <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg"><path d="M35.616 18.74l-2.661-2.66a1.125 1.125 0 0 1-.33-.796v-3.256c0-3.009-.313-4.1-.902-5.2a6.133 6.133 0 0 0-2.551-2.551c-1.1-.589-2.191-.902-5.2-.902h-4.304a.225.225 0 0 1-.159-.384L22.17.33c.211-.211.498-.33.796-.33h1.497c4.011 0 5.466.418 6.933 1.202a8.178 8.178 0 0 1 3.402 3.402C35.582 6.071 36 7.526 36 11.537v7.045a.225.225 0 0 1-.384.159zM17.259 35.617l2.661-2.661c.211-.211.498-.33.796-.33h3.256c3.009 0 4.1-.313 5.2-.902a6.133 6.133 0 0 0 2.551-2.551c.589-1.1.902-2.191.902-5.2v-4.304a.225.225 0 0 1 .384-.159l2.661 2.661c.211.211.33.498.33.796v1.497c0 4.011-.418 5.466-1.202 6.933a8.178 8.178 0 0 1-3.402 3.402C29.929 35.582 28.474 36 24.463 36h-7.045a.225.225 0 0 1-.159-.384zM.384 17.259l2.661 2.661c.211.211.33.498.33.796v3.256c0 3.009.313 4.1.902 5.2a6.133 6.133 0 0 0 2.551 2.551c1.1.589 2.191.902 5.2.902h4.304a.225.225 0 0 1 .159.384L13.83 35.67c-.211.211-.498.33-.796.33h-1.497c-4.011 0-5.466-.418-6.933-1.202a8.178 8.178 0 0 1-3.402-3.402C.418 29.929 0 28.474 0 24.463v-7.045a.225.225 0 0 1 .384-.159zM18.741.384L16.08 3.045c-.211.211-.498.33-.796.33h-3.256c-3.009 0-4.1.313-5.2.902a6.133 6.133 0 0 0-2.551 2.551c-.589 1.1-.902 2.191-.902 5.2v4.304a.225.225 0 0 1-.384.159L.33 13.83a1.125 1.125 0 0 1-.33-.796v-1.497c0-4.011.418-5.466 1.202-6.933a8.178 8.178 0 0 1 3.402-3.402C6.071.418 7.526 0 11.537 0h7.045a.225.225 0 0 1 .159.384zm11.254 12.752l-3.63-3.468c-.24-.24-.52-.414-.82-.523A2.245 2.245 0 0 0 24.75 9H14.04a.225.225 0 0 1-.158-.384l2.664-2.662c.21-.21.497-.329.795-.329h8.534a4.5 4.5 0 0 1 4.5 4.5v2.849a.225.225 0 0 1-.38.162zm-7.131 16.861l3.468-3.629c.24-.24.414-.52.523-.82.094-.247.145-.515.145-.795v-10.71a.225.225 0 0 1 .384-.159l2.662 2.664c.21.211.329.497.329.796v8.534a4.5 4.5 0 0 1-4.5 4.5h-2.849a.225.225 0 0 1-.162-.38zM6.005 22.864l3.63 3.468c.24.24.52.414.82.523.247.094.515.145.795.145h10.71a.225.225 0 0 1 .158.384l-2.664 2.662c-.21.21-.497.329-.795.329h-8.534a4.5 4.5 0 0 1-4.5-4.5v-2.849a.225.225 0 0 1 .38-.162zm7.131-16.859l-3.468 3.63c-.24.24-.414.52-.523.82A2.245 2.245 0 0 0 9 11.25v10.71a.225.225 0 0 1-.384.158l-2.662-2.664a1.125 1.125 0 0 1-.329-.795v-8.534a4.5 4.5 0 0 1 4.5-4.5h2.849a.225.225 0 0 1 .162.38z" fill="#FFF" fillRule="evenodd"/></svg>
      </Logo>
      <Title>Loading Prismic Preview</Title>
      </Wrapper>
  </Loader>

// function displayLoading() {
//   return new Promise(resolve => {
//     const iframe = document.createElement('iframe');
//     iframe.setAttribute('src', `${Config.baseURL}/previews/loading`);
//     iframe.style.position = 'fixed';
//     iframe.style.right = 0;
//     iframe.style.left = 0;
//     iframe.style.top = 0;
//     iframe.style.bottom = 0;
//     iframe.style['z-index'] = 2147483000;
//     iframe.style.width = '100%';
//     iframe.style.height = '100%';
//     iframe.style.border = 'none';
//     iframe.style.opacity = 0;
//     iframe.style.transition = '.5s opacity';
//     document.body.appendChild(iframe);
//     window.setTimeout(() => {
//       iframe.style.opacity = 1;
//       window.setTimeout(() => resolve(), 1800);
//     }, 200);
//   });
// }
