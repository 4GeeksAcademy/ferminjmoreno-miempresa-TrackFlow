(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=i(e);fetch(e.href,a)}})();const f=()=>`
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:p-3 focus:bg-secondary-emerald focus:text-white focus:rounded-lg focus:font-semibold">
    Saltar al contenido principal
  </a>

  <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-smooth">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2" aria-label="TrackFlow inicio">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" class="h-12 sm:h-14 w-auto transition-smooth" aria-hidden="true">
          <g stroke-linecap="round" stroke-linejoin="round">
            <path d="M5,24 C5,39 45,39 45,24 M37,16 L45,24 L37,32" stroke="#2563EB" stroke-width="4.5" fill="none" />
            <polygon points="25,9 37,15 25,21 13,15" fill="#FFFFFF" stroke="#059669" stroke-width="2" />
            <polygon points="13,15 13,32 25,38 25,21" fill="#F1F5F9" stroke="#059669" stroke-width="2" />
            <polygon points="25,21 25,38 37,32 37,15" fill="#FFFFFF" stroke="#059669" stroke-width="2" />
            <line x1="19" y1="12" x2="31" y2="18" stroke="#2563EB" stroke-width="2" />
            <line x1="25" y1="21" x2="25" y2="38" stroke="#2563EB" stroke-width="2" />
            <polygon points="28,24 33,26 33,29 28,27" fill="#059669" stroke="none" />
          </g>
          <text x="52" y="33" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="21" fill="#0F172A">
            Track<tspan fill="#059669">Flow</tspan>
          </text>
        </svg>
      </a>

      <nav class="hidden md:flex items-center gap-8" aria-label="Navegacion principal">
        <a href="#services" class="text-sm font-medium text-slate-600 hover:text-primary-navy transition-colors">Servicios</a>
        <a href="#coverage" class="text-sm font-medium text-slate-600 hover:text-primary-navy transition-colors">Cobertura</a>
        <a href="#why-us" class="text-sm font-medium text-slate-600 hover:text-primary-navy transition-colors">Por que TrackFlow</a>
        <a href="#contact" class="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-secondary-emerald text-white hover:bg-emerald-700 transition-colors shadow-sm">Solicitar info</a>
      </nav>

      <button id="hamburger-btn" type="button" class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menu">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="hamburger-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" id="close-icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white" aria-label="Navegacion movil">
      <div class="px-4 pt-2 pb-4 space-y-1">
        <a href="#services" class="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-navy transition-colors">Servicios</a>
        <a href="#coverage" class="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-navy transition-colors">Cobertura</a>
        <a href="#why-us" class="block px-3 py-2 rounded-lg text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-navy transition-colors">Por que TrackFlow</a>
        <a href="#contact" class="block w-full text-center px-4 py-2.5 mt-2 rounded-lg bg-secondary-emerald text-white text-base font-semibold hover:bg-emerald-700 transition-colors shadow-sm">Solicitar info</a>
      </div>
    </nav>
  </header>
`,h=()=>`
  <section class="relative overflow-hidden py-20 lg:py-28 text-white bg-primary-navy">
    <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_35%),radial-gradient(circle_at_80%_80%,#10b981,transparent_35%)]" aria-hidden="true"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="space-y-6 lg:col-span-7">
        <p class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold tracking-wide border border-white/10">Logistica binacional USA - Espana</p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Logistica que escala con tu e-commerce</h1>
        <p class="text-lg text-slate-300 max-w-2xl">Gestion de almacenes, ultima milla y devoluciones en Estados Unidos y Espana para marcas que necesitan crecer sin friccion operativa.</p>
        <div class="flex flex-col sm:flex-row gap-4 pt-2">
          <a href="#contact" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg bg-secondary-emerald text-white hover:bg-emerald-700 transition-smooth shadow-lg">Solicitar informacion</a>
          <a href="#services" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg border border-slate-600 text-slate-200 hover:text-white hover:border-slate-400 transition-smooth">Conocer servicios</a>
        </div>
      </div>
      <aside class="lg:col-span-5 rounded-2xl p-6 bg-slate-900/80 border border-slate-800 shadow-2xl">
        <p class="text-xs font-mono text-slate-400 mb-4">TRACKING SERVICE: ACTIVE</p>
        <div class="space-y-3">
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <h3 class="text-sm font-semibold">Centro Los Angeles <span class="text-emerald-400 font-mono">(LAX)</span></h3>
              <p class="text-xs text-slate-400">Cobertura nacional USA</p>
            </div>
            <span class="text-emerald-400 font-mono text-xs">99.8%</span>
          </div>
          <div class="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <h3 class="text-sm font-semibold">Centro Zaragoza <span class="text-blue-400 font-mono">(ZAZ)</span></h3>
              <p class="text-xs text-slate-400">Cobertura Europa</p>
            </div>
            <span class="text-blue-400 font-mono text-xs">99.9%</span>
          </div>
        </div>
      </aside>
    </div>
  </section>
`,y=[{title:"Gestion de almacenes",body:"Almacenamiento, picking y packing con inventario en tiempo real desde hubs en Los Angeles y Zaragoza.",tag:"Moda, electronica y cosmetica"},{title:"Entregas de ultima milla",body:"Integracion con carriers certificados y seguimiento unificado para reducir incidencias de transporte.",tag:"Carriers auditados"},{title:"Logistica inversa",body:"Devoluciones automatizadas, inspeccion, reacondicionamiento y reingreso a stock con API directa.",tag:"Operacion automatizada"}],w=()=>`
  <section id="services" class="py-20 lg:py-28 bg-white" aria-labelledby="services-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 id="services-heading" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-title">Servicios logisticos especializados</h2>
        <p class="text-base sm:text-lg text-neutral-text">Soluciones modulares para acelerar operaciones de e-commerce en dos continentes.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${y.map(t=>`
          <article class="bg-neutral-bg p-8 rounded-2xl border border-slate-200/80 card-shadow card-shadow-hover flex flex-col justify-between gap-4">
            <h3 class="text-xl font-bold text-neutral-title">${t.title}</h3>
            <p class="text-sm leading-relaxed text-neutral-text">${t.body}</p>
            <span class="text-xs font-semibold text-accent-blue uppercase tracking-wider">${t.tag}</span>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`,k=()=>`
  <section id="coverage" class="py-20 lg:py-28 bg-neutral-bg border-t border-slate-200" aria-labelledby="coverage-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 id="coverage-heading" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-title">Cobertura binacional</h2>
        <p class="text-base sm:text-lg text-neutral-text">Infraestructura propia y red de distribucion para cumplir plazos exigentes.</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article class="bg-white p-8 rounded-2xl border border-slate-200/80 card-shadow space-y-4">
          <h3 class="text-2xl font-bold text-neutral-title">Estados Unidos (LAX)</h3>
          <p class="text-sm text-neutral-text">Hub de Los Angeles con cobertura costa a costa y acuerdos premium con UPS, FedEx y DHL.</p>
        </article>
        <article class="bg-white p-8 rounded-2xl border border-slate-200/80 card-shadow space-y-4">
          <h3 class="text-2xl font-bold text-neutral-title">Espana (ZAZ)</h3>
          <p class="text-sm text-neutral-text">Hub de Zaragoza para envios peninsulares e insulares con MRW, SEUR y DHL.</p>
        </article>
      </div>
    </div>
  </section>
`,S=[{title:"Operacion binacional",text:"Equipos propios y procesos estandarizados en USA y Espana."},{title:"Equipo experto",text:"Especialistas en fulfillment, transporte y mejora continua."},{title:"Tecnologia propia",text:"Panel unico para inventario, pedidos y estados de entrega."},{title:"Verticales focus",text:"Experiencia real en moda, tecnologia y cosmetica."}],L=()=>`
  <section id="why-us" class="py-20 lg:py-28 bg-white" aria-labelledby="why-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-4">
        <h2 id="why-heading" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-title">La ventaja de TrackFlow</h2>
        <p class="text-base sm:text-lg text-neutral-text">Marcas internacionales confian en un modelo operativo medible y escalable.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        ${S.map(t=>`
          <article class="space-y-2">
            <h3 class="text-lg font-bold text-neutral-title">${t.title}</h3>
            <p class="text-sm text-neutral-text leading-relaxed">${t.text}</p>
          </article>
        `).join("")}
      </div>
    </div>
  </section>
`,A=()=>`
  <section id="contact" class="py-20 lg:py-28 bg-neutral-bg border-t border-slate-200" aria-labelledby="contact-heading">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div class="lg:col-span-5 space-y-5">
          <h2 id="contact-heading" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-title">Comienza a optimizar tu logistica</h2>
          <p class="text-sm sm:text-base text-neutral-text">Comparte tus datos y te contactamos en menos de 24 horas laborales.</p>
          <ul class="space-y-2 text-sm font-medium text-neutral-title">
            <li>Email: comercial@trackflow.com</li>
            <li>LA: +1 213 555 0147</li>
            <li>Zaragoza: +34 976 123 456</li>
          </ul>
        </div>

        <div class="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 card-shadow">
          <form id="lead-form" class="space-y-5" novalidate>
            <div>
              <label for="company-name" class="form-label">Nombre de la empresa *</label>
              <input id="company-name" name="company_name" type="text" class="form-input" required />
              <p id="company-name-error" class="form-error hidden">Ingresa un nombre valido.</p>
            </div>

            <div>
              <label for="contact-email" class="form-label">Email corporativo *</label>
              <input id="contact-email" name="contact_email" type="email" class="form-input" required />
              <p id="contact-email-error" class="form-error hidden">Ingresa un email corporativo valido.</p>
            </div>

            <div>
              <label for="monthly-volume" class="form-label">Volumen mensual *</label>
              <select id="monthly-volume" name="monthly_volume" class="form-input" required>
                <option value="" selected disabled>Selecciona una opcion</option>
                <option value="0-100">0-100 envios/mes</option>
                <option value="101-500">101-500 envios/mes</option>
                <option value="501-2000">501-2000 envios/mes</option>
                <option value="2000+">2000+ envios/mes</option>
              </select>
              <p id="monthly-volume-error" class="form-error hidden">Selecciona un volumen.</p>
              <p id="volume-warning" class="hidden mt-2 text-xs font-semibold text-warning-wcag">Para menos de 100 envios mensuales, evalua si el servicio ajusta a tu etapa actual.</p>
            </div>

            <fieldset>
              <legend class="form-label">Servicios de interes *</legend>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" name="services" value="almacenaje">Almacenaje</label>
                <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" name="services" value="ultima_milla">Ultima milla</label>
                <label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" name="services" value="logistica_inversa">Logistica inversa</label>
              </div>
              <p id="services-error" class="form-error hidden">Selecciona al menos un servicio.</p>
            </fieldset>

            <div>
              <div class="flex justify-between items-center mb-1">
                <label for="additional-comments" class="form-label m-0">Comentarios</label>
                <span id="char-counter" class="text-[11px] text-slate-400 font-mono">Quedan 500 caracteres</span>
              </div>
              <textarea id="additional-comments" name="additional_comments" maxlength="500" rows="4" class="form-input"></textarea>
            </div>

            <label class="inline-flex items-start gap-2 text-sm">
              <input id="privacy-agreement" name="privacy_agreement" type="checkbox" class="mt-1" required>
              <span>Acepto la politica de privacidad *</span>
            </label>
            <p id="privacy-agreement-error" class="form-error hidden">Debes aceptar la politica de privacidad.</p>

            <button type="submit" id="submit-btn" class="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold rounded-lg bg-secondary-emerald text-white hover:bg-emerald-700 transition-smooth shadow-md">Solicitar informacion personalizada</button>
            <p id="form-status" class="text-sm font-medium text-slate-600" aria-live="polite"></p>
          </form>
        </div>
      </div>
    </div>
  </section>
`,E=()=>`
  <footer class="bg-primary-navy text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
      <div class="flex items-center gap-2" aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="h-9 w-9 transition-smooth" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5,24 C5,39 45,39 45,24 M37,16 L45,24 L37,32" stroke="#94A3B8" stroke-width="4" fill="none" />
          <polygon points="25,9 37,15 25,21 13,15" fill="#334155" stroke="#94A3B8" stroke-width="2" />
          <polygon points="13,15 13,32 25,38 25,21" fill="#1E293B" stroke="#94A3B8" stroke-width="2" />
          <polygon points="25,21 25,38 37,32 37,16" fill="#334155" stroke="#94A3B8" stroke-width="2" />
          <line x1="19" y1="12" x2="31" y2="18" stroke="#94A3B8" stroke-width="2" />
          <line x1="25" y1="21" x2="25" y2="38" stroke="#94A3B8" stroke-width="2" />
        </svg>
        <span class="font-semibold text-white">Track<span class="text-slate-500">Flow</span></span>
      </div>
      <p>&copy; 2026 TrackFlow. Todos los derechos reservados.</p>
      <nav class="flex items-center gap-4">
        <a href="#" class="hover:text-white transition-colors">Privacidad</a>
        <a href="#" class="hover:text-white transition-colors">Cookies</a>
      </nav>
    </div>
  </footer>
`,q=()=>`
  ${f()}
  <main id="main-content" tabindex="-1" class="focus:outline-none">
    ${h()}
    ${w()}
    ${k()}
    ${L()}
    ${A()}
  </main>
  ${E()}
`,F=()=>{const t=document.querySelector("#hamburger-btn"),s=document.querySelector("#mobile-menu"),i=document.querySelector("#hamburger-icon"),o=document.querySelector("#close-icon");!t||!s||!i||!o||(t.addEventListener("click",()=>{const e=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",String(!e)),s.classList.toggle("hidden",e),i.classList.toggle("hidden",!e),o.classList.toggle("hidden",e)}),s.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{t.setAttribute("aria-expanded","false"),s.classList.add("hidden"),i.classList.remove("hidden"),o.classList.add("hidden")})}))},l=(t,s)=>{const i=document.querySelector(`#${t}`);i&&i.classList.toggle("hidden",!s)},C=()=>{const t=document.querySelector("#lead-form");if(!t)return;const s=document.querySelector("#additional-comments"),i=document.querySelector("#char-counter"),o=document.querySelector("#monthly-volume"),e=document.querySelector("#volume-warning"),a=document.querySelector("#form-status");s==null||s.addEventListener("input",()=>{const r=500-s.value.length;i&&(i.textContent=`Quedan ${r} caracteres`)}),o==null||o.addEventListener("change",()=>{e==null||e.classList.toggle("hidden",o.value!=="0-100")}),t.addEventListener("submit",r=>{r.preventDefault();const n=document.querySelector("#company-name"),c=document.querySelector("#contact-email"),d=document.querySelector("#privacy-agreement"),b=t.querySelectorAll('input[name="services"]:checked'),m=!(n!=null&&n.value)||n.value.trim().length<2,p=!(c!=null&&c.value)||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.value),u=!(o!=null&&o.value),x=b.length===0,g=!(d!=null&&d.checked);if(l("company-name-error",m),l("contact-email-error",p),l("monthly-volume-error",u),l("services-error",x),l("privacy-agreement-error",g),m||p||u||x||g){a&&(a.textContent="Revisa los campos marcados para continuar.");return}a&&(a.textContent="Solicitud enviada. Te contactaremos pronto."),t.reset(),i&&(i.textContent="Quedan 500 caracteres"),e==null||e.classList.add("hidden")})},v=document.querySelector("#app");if(!v)throw new Error("No se encontro el contenedor #app");v.innerHTML=q();F();C();
