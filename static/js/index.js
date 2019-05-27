const menuCtrl = document.querySelector('ion-menu-controller');
const nav = document.querySelector('ion-nav');

class TabsPage extends HTMLElement {
  async connectedCallback(){
    this.innerHTML = `
<ion-tabs>

  <ion-tab tab="tab-schedule">
    <ion-nav id="schedule"></ion-nav>
  </ion-tab>

   <ion-tab-bar slot="bottom" selected-tab="tab-schedule">
    <ion-tab-button tab="tab-schedule">
      <ion-icon name="cart"></ion-icon>
      <ion-label>Productos</ion-label>
      <ion-badge>6</ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="tab-speaker">
      <ion-icon name="contacts"></ion-icon>
      <ion-label>Speakers</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-map">
      <ion-icon name="map"></ion-icon>
      <ion-label>Map</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab-about">
      <ion-icon name="information-circle"></ion-icon>
      <ion-label>About</ion-label>
    </ion-tab-button>
  </ion-tab-bar>

</ion-tabs>
    `
    const navschedule = document.getElementById('schedule')
    await navschedule.componentOnReady()
    navschedule.setRoot('tab-nav-schedule')
  }
}

class rootPage extends HTMLElement {
  connectedCallback(){
    this.innerHTML = `
    <ion-header>
    <ion-toolbar color="warning">
      <ion-buttons slot="start">
        <ion-menu-button></ion-menu-button>
      </ion-buttons>
      <ion-title>
        List
      </ion-title>
    </ion-toolbar>
  </ion-header>
    <ion-content padding>
      <ion-button expand="block" onclick="openFirst()">Open Start Menu</ion-button>
      <ion-button expand="block" onclick="openEnd()">Open End Menu</ion-button>
      <ion-button expand="block" onclick="openCustom()">Open Custom Menu</ion-button>
      <ion-button expand="block" href="/tabs/schedule">Change to tabs</ion-button>
    </ion-content>
    `
  }
}

class TabSchedule extends HTMLElement {
  constructor(){
    super()
    this.products = ['pelota','raqueta','botas','bicicleta']
  }

  connectedCallback(){
    this.innerHTML = `
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>
          Productos
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding><ion-list></ion-list></ion-content>
    `
    var content = this.querySelector('ion-list')
    this.products.forEach(function(item){
    content.insertAdjacentHTML('beforeend','<ion-item>'+item+'</ion-item>')
    })
  }
}

customElements.define('app-root',rootPage)
customElements.define('app-tabs',TabsPage)
customElements.define('tab-nav-schedule',TabSchedule)




