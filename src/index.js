import mainView from "./MainView.html";
import { createApp } from "vue";
import vueMainView from "./vue/vueMainView.vue";
import { ReactMainView } from "./react/reactMainView.jsx";
import ReactDOM from "react-dom/client";

function component() {
  const element = document.createElement("div");
  element.innerHTML = mainView;
  return element;
}

function addVueView() {
  createApp(vueMainView).mount("#vueArea");
}

function addReactView() {
  const domContainer = document.querySelector("#reactArea");
  const root = ReactDOM.createRoot(domContainer);
  root.render(<ReactMainView></ReactMainView>);
}

function initView() {
  document.body.appendChild(component());
  addVueView();
  addReactView();
}

initView();
