const scroll = (target, duration) => {
    const _target = document.querySelector(target);
    const targetPos = _target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPos - startPosition;
    let startTime = null;

    const ease = (t, b, c, d) => {
        t /= d / 2;
        if(t < 1)
        {
            return c / 2 * t * t + b;
        }
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    const animate = currentTime => {
        if(startTime === null)
        {
            startTime = currentTime;
        }
        let elapsedTime = currentTime - startTime;

        const run = ease(elapsedTime, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(elapsedTime < duration)
        {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener("keypress", () => scroll(".target", 2000));

const openZoom = event => {
    const src = event.currentTarget.src;
    const img = document.querySelector("#zoom");
    const back = document.querySelector("#zoom-background");
  
    if (img.classList.contains("zoom-show")) return false;
  
    img.src = src;
    img.classList.add("zoom-show");
    img.classList.remove("zoom-hide");
    back.style.display = "block";
    document.body.style.overflow = "hidden";
  };
  
  const closeZoom = async () => {
    const img = document.querySelector("#zoom");
    const back = document.querySelector("#zoom-background");
  
    if (img.classList.contains("zoom-hide")) return false;
    
    img.classList.add("zoom-hide");
    await zoomSleep(500);
    img.classList.remove("zoom-show");
    back.style.display = "";
    document.body.style.overflow = "";
  };
  
  const zoomImage = node => {
    const imgZoom = document.createElement("img");
    const backgroundZoom = document.createElement("div");
  
    imgZoom.setAttribute("onClick", "closeZoom()");
    imgZoom.id = "zoom";
  
    backgroundZoom.setAttribute("onClick", "closeZoom()");
    backgroundZoom.id = "zoom-background";
  
    
    document.body.appendChild(backgroundZoom);
    document.body.appendChild(imgZoom);
  
    document
      .querySelector(node)
      .querySelectorAll(".zoom-item")
      .forEach(element => element.setAttribute("onClick", "openZoom(event)"));
  };
  
  const zoomSleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  zoomImage(".zoom")
  /////////////uashuguahsuhsuahsuhasuhsua

  const openCaixa = event => {
    const src = event.currentTarget.src;
    const img = document.querySelector("#caixa");
    const back = document.querySelector("#caixa-background");
  
    if (img.classList.contains("caixa-show")) return false;
  
    img.src = src;
    img.classList.add("caixa-show");
    img.classList.remove("caixa-hide");
    back.style.display = "block";
    document.body.style.overflow = "hidden";
  };
  
  const closeCaixa = async () => {
    const img = document.querySelector("#caixa");
    const back = document.querySelector("#caixa-background");
  
    if (img.classList.contains("caixa-hide")) return false;
    
    img.classList.add("caixa-hide");
    await caixaSleep(500);
    img.classList.remove("caixa-show");
    back.style.display = "";
    document.body.style.overflow = "";
  };
  
  const caixaImage = node => {
    const imgCaixa = document.createElement("img");
    const backgroundCaixa = document.createElement("div");
  
    imgCaixa.setAttribute("onClick", "closeCaixa()");
    imgCaixa.id = "caixa";
  
    backgroundCaixa.setAttribute("onClick", "closeCaixa()");
    backgroundCaixa.id = "caixa-background";
  
    
    document.body.appendChild(backgroundCaixa);
    document.body.appendChild(imgCaixa);
  
    document
      .querySelector(node)
      .querySelectorAll(".caixa-item")
      .forEach(element => element.setAttribute("onClick", "openCaixa(event)"));
  };
  
  const caixaSleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  
  caixaImage(".caixa")
  