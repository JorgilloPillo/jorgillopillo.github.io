// Datos y Lógica de la App de Física

// --- DATOS DE TEORÍA ---
const theoryData = `
<div class="theory-block">
    <h3>1. ¿Qué es Medir y qué es una Magnitud Física?</h3>
    <p><strong>Medir:</strong> Es comparar una magnitud con otra de la misma especie que se toma como patrón o unidad de medida. Al medir, siempre existe un margen de <strong>error</strong> o incertidumbre (absoluto o relativo), ya que ningún instrumento es perfecto ni ninguna medida es absolutamente exacta.</p>
    <p><strong>Magnitud Física:</strong> Es toda propiedad de los cuerpos o sistemas que puede ser medida de forma objetiva y expresada cuantitativamente mediante un número y una unidad. Por ejemplo: la longitud, la masa, el tiempo, la temperatura, la velocidad, etc.</p>
</div>
<div class="theory-block">
    <h3>2. Magnitudes Fundamentales vs Derivadas</h3>
    <p>Las magnitudes se clasifican según su origen en:</p>
    <ul>
        <li><strong>Magnitudes Fundamentales:</strong> Son aquellas que se definen por sí mismas, independientes de las demás. El Sistema Internacional reconoce 7 fundamentales: Longitud, Masa, Tiempo, Intensidad de Corriente Eléctrica, Temperatura Termodinámica, Cantidad de Sustancia e Intensidad Luminosa.</li>
        <li><strong>Magnitudes Derivadas:</strong> Se obtienen al combinar algebraicamente las magnitudes fundamentales. Ejemplos: Área (Longitud²), Volumen (Longitud³), Velocidad (Longitud/Tiempo), Densidad (Masa/Volumen), Fuerza (Masa × Aceleración).</li>
    </ul>
</div>
<div class="theory-block">
    <h3>3. Sistemas de Unidades en Profundidad</h3>
    <p>Un sistema de unidades es un conjunto consistente de unidades de medida:</p>
    <ul>
        <li><strong>S.I. (Sistema Internacional):</strong> Es el sistema moderno y estándar mundial, heredero del MKS. Unidades clave: Metro (m), Kilogramo (kg), Segundo (s), Kelvin (K), Amperio (A), Mol (mol) y Candela (cd).</li>
        <li><strong>Sistema C.G.S.:</strong> Sus unidades base son el Centímetro (cm), Gramo (g) y Segundo (s). Se utiliza mucho en física teórica y astronomía porque simplifica ecuaciones de electromagnetismo. En este sistema la fuerza se mide en Dinas y la energía en Ergios.</li>
        <li><strong>Sistema Inglés (Imperial):</strong> Sistema tradicional usado principalmente en Estados Unidos. Sus unidades de longitud, masa y tiempo son el Pie (ft), el Slug o Libra-masa (lb) y el Segundo (s). Las conversiones en este sistema suelen ser no decimales (1 pie = 12 pulgadas, 1 yarda = 3 pies).</li>
    </ul>
</div>
<div class="theory-block">
    <h3>4. Prefijos del Sistema Internacional (Múltiplos y Submúltiplos)</h3>
    <p>Para trabajar con números muy grandes o muy pequeños en la ciencia (Notación Científica), usamos prefijos que representan potencias de base 10:</p>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 10px;">
        <div>
            <p style="color:var(--primary); font-weight:bold; margin-bottom:5px;">Múltiplos (Grandes)</p>
            <ul style="font-size:0.9rem;">
                <li><strong>Tera (T):</strong> 10¹² = 1,000,000,000,000</li>
                <li><strong>Giga (G):</strong> 10⁹ = 1,000,000,000</li>
                <li><strong>Mega (M):</strong> 10⁶ = 1,000,000</li>
                <li><strong>Kilo (k):</strong> 10³ = 1,000</li>
                <li><strong>Hecto (h):</strong> 10² = 100</li>
                <li><strong>Deca (da):</strong> 10¹ = 10</li>
            </ul>
        </div>
        <div>
            <p style="color:var(--success); font-weight:bold; margin-bottom:5px;">Submúltiplos (Pequeños)</p>
            <ul style="font-size:0.9rem;">
                <li><strong>Deci (d):</strong> 10⁻¹ = 0.1</li>
                <li><strong>Centi (c):</strong> 10⁻² = 0.01</li>
                <li><strong>Mili (m):</strong> 10⁻³ = 0.001</li>
                <li><strong>Micro (µ):</strong> 10⁻⁶ = 0.000001</li>
                <li><strong>Nano (n):</strong> 10⁻⁹ = 0.000000001</li>
                <li><strong>Pico (p):</strong> 10⁻¹² = 0.000000000001</li>
            </ul>
        </div>
    </div>
</div>
<div class="theory-block">
    <h3>5. Análisis Dimensional</h3>
    <p>Es una herramienta matemática utilizada en física para verificar la veracidad de una ecuación y deducir fórmulas empíricas. Consiste en expresar las magnitudes derivadas en función de las fundamentales. Las dimensiones básicas son L (longitud), M (masa) y T (tiempo). Por ejemplo, la dimensión de la velocidad se escribe como [v] = LT⁻¹.</p>
</div>
`;

// --- EJEMPLOS DE CONVERSIÓN ---
const examplesData = [
    { title: "Ejemplo 1: Metros a Centímetros", desc: "Convertir 5 m a cm", formula: "5 m × (100 cm / 1 m) = 500 cm" },
    { title: "Ejemplo 2: Kilómetros a Metros", desc: "Convertir 2.5 km a m", formula: "2.5 km × (1000 m / 1 km) = 2500 m" },
    { title: "Ejemplo 3: Horas a Segundos", desc: "Convertir 2 h a s", formula: "2 h × (3600 s / 1 h) = 7200 s" },
    { title: "Ejemplo 4: Kilogramos a Gramos", desc: "Convertir 0.5 kg a g", formula: "0.5 kg × (1000 g / 1 kg) = 500 g" },
    { title: "Ejemplo 5: Gramos a Kilogramos", desc: "Convertir 250 g a kg", formula: "250 g / 1000 = 0.25 kg" },
    { title: "Ejemplo 6: Centímetros a Metros", desc: "Convertir 80 cm a m", formula: "80 cm / 100 = 0.8 m" },
    { title: "Ejemplo 7: Pulgadas a Centímetros", desc: "Convertir 10 in a cm", formula: "10 in × (2.54 cm / 1 in) = 25.4 cm" },
    { title: "Ejemplo 8: Centímetros a Pulgadas", desc: "Convertir 50 cm a in", formula: "50 cm / 2.54 = 19.68 in" },
    { title: "Ejemplo 9: Pies a Metros", desc: "Convertir 5 ft a m", formula: "5 ft × 0.3048 = 1.524 m" },
    { title: "Ejemplo 10: Metros a Pies", desc: "Convertir 10 m a ft", formula: "10 m / 0.3048 = 32.81 ft" },
    { title: "Ejemplo 11: Libras a Kilogramos", desc: "Convertir 150 lb a kg", formula: "150 lb × 0.4536 = 68.04 kg" },
    { title: "Ejemplo 12: Kilogramos a Libras", desc: "Convertir 80 kg a lb", formula: "80 kg / 0.4536 = 176.37 lb" },
    { title: "Ejemplo 13: Mililitros a Litros", desc: "Convertir 500 ml a L", formula: "500 ml / 1000 = 0.5 L" },
    { title: "Ejemplo 14: Litros a Galones", desc: "Convertir 10 L a gal", formula: "10 L × 0.264 = 2.64 gal" },
    { title: "Ejemplo 15: km/h a m/s", desc: "Convertir 90 km/h a m/s", formula: "90 × (1000/3600) = 25 m/s" },
    { title: "Ejemplo 16: m/s a km/h", desc: "Convertir 20 m/s a km/h", formula: "20 × (3600/1000) = 72 km/h" },
    { title: "Ejemplo 17: Megabytes a Kilobytes", desc: "Convertir 2 MB a KB", formula: "2 MB × 1024 = 2048 KB" },
    { title: "Ejemplo 18: Toneladas a Kilogramos", desc: "Convertir 3 t a kg", formula: "3 t × 1000 = 3000 kg" },
    { title: "Ejemplo 19: Días a Horas", desc: "Convertir 3 días a h", formula: "3 días × 24 h = 72 h" },
    { title: "Ejemplo 20: Millas a Kilómetros", desc: "Convertir 50 mi a km", formula: "50 mi × 1.609 = 80.45 km" }
];

// --- GENERADOR DE PREGUNTAS DEL BANCO ---
let questionBank = [];

// 20 Preguntas teóricas base
const theoryQuestions = [
    { q: "¿Cuál de las siguientes es una magnitud fundamental en el S.I.?", options: ["Velocidad", "Fuerza", "Masa", "Área"], correct: 2 },
    { q: "El Sistema MKS utiliza las siguientes unidades básicas:", options: ["Metro, Kilo, Segundo", "Milla, Kilo, Segundo", "Metro, Kelvin, Segundo", "Minuto, Kilo, Segundo"], correct: 0 },
    { q: "¿Qué prefijo del S.I. equivale a 1000 (10³)?", options: ["Mega", "Kilo", "Hecto", "Giga"], correct: 1 },
    { q: "La unidad de longitud en el Sistema CGS es:", options: ["Centímetro", "Metro", "Kilómetro", "Milímetro"], correct: 0 },
    { q: "1 pulgada (in) equivale exactamente a:", options: ["2.00 cm", "2.54 cm", "3.14 cm", "1.50 cm"], correct: 1 },
    { q: "¿Cuál es una magnitud derivada?", options: ["Tiempo", "Temperatura", "Velocidad", "Corriente eléctrica"], correct: 2 },
    { q: "1 Kilogramo equivale a:", options: ["100 gramos", "1000 gramos", "10 gramos", "10000 gramos"], correct: 1 },
    { q: "En el sistema inglés, la masa se suele medir en:", options: ["Kilogramos", "Libras (lb)", "Onzas", "Gramos"], correct: 1 },
    { q: "¿Qué significa el prefijo 'mili' (m)?", options: ["0.1", "0.01", "0.001", "1000"], correct: 2 },
    { q: "Un pie (ft) tiene aproximadamente:", options: ["12 pulgadas", "10 pulgadas", "100 centímetros", "2.54 centímetros"], correct: 0 },
    { q: "¿Cuál es la unidad de tiempo en todos los sistemas (MKS, CGS, Inglés)?", options: ["Minuto", "Hora", "Segundo", "Día"], correct: 2 },
    { q: "Para pasar de km/h a m/s se debe multiplicar por:", options: ["3.6", "10/36", "1000/3600", "Ambas B y C son correctas"], correct: 3 },
    { q: "La fuerza es una magnitud:", options: ["Fundamental", "Escalar", "Derivada", "Adimensional"], correct: 2 },
    { q: "Un litro equivale a:", options: ["100 ml", "1000 ml", "10000 ml", "10 ml"], correct: 1 },
    { q: "¿Qué instrumento mide la masa?", options: ["Dinamómetro", "Regla", "Cronómetro", "Balanza"], correct: 3 },
    { q: "¿Cuánto es 1 Tonelada?", options: ["100 kg", "1000 kg", "10000 kg", "10 kg"], correct: 1 },
    { q: "El micrómetro (µm) es la millonésima parte de un:", options: ["Milímetro", "Centímetro", "Metro", "Kilómetro"], correct: 2 },
    { q: "1 Milla (mi) equivale aproximadamente a:", options: ["1.609 km", "1.000 km", "2.54 km", "3.28 km"], correct: 0 },
    { q: "¿Cuál magnitud NO es fundamental?", options: ["Longitud", "Cantidad de sustancia", "Aceleración", "Masa"], correct: 2 },
    { q: "El Sistema Internacional (SI) fue establecido en base al sistema:", options: ["Inglés", "CGS", "MKS", "Técnico"], correct: 2 }
];

questionBank.push(...theoryQuestions);

// Generar 100 preguntas prácticas dinámicamente para asegurar las 120+ preguntas
function generateMathQuestions() {
    const types = [
        { type: "m_to_cm", q: "Convierte {val} m a cm.", mult: 100, unit: "cm" },
        { type: "kg_to_g", q: "Convierte {val} kg a g.", mult: 1000, unit: "g" },
        { type: "cm_to_m", q: "Convierte {val} cm a m.", mult: 0.01, unit: "m" },
        { type: "h_to_s", q: "¿Cuántos segundos hay en {val} horas?", mult: 3600, unit: "s" },
        { type: "in_to_cm", q: "Convierte {val} pulgadas a cm.", mult: 2.54, unit: "cm" }
    ];

    for(let i=0; i<100; i++) {
        let t = types[Math.floor(Math.random() * types.length)];
        let val = Math.floor(Math.random() * 20) + 1;
        if(t.type === "cm_to_m") val = val * 100; // para que no de decimales feos
        
        let correctAns = +(val * t.mult).toFixed(2);
        
        // Generar 3 respuestas falsas
        let options = [
            correctAns + " " + t.unit,
            (correctAns * 10).toFixed(2) + " " + t.unit,
            (correctAns / 10).toFixed(2) + " " + t.unit,
            (correctAns + 15).toFixed(2) + " " + t.unit
        ];
        
        // Mezclar
        options.sort(() => Math.random() - 0.5);
        let correctIdx = options.indexOf(correctAns + " " + t.unit);
        
        questionBank.push({
            q: t.q.replace("{val}", val),
            options: options,
            correct: correctIdx
        });
    }
}
generateMathQuestions();

// --- ESTADO DE LA APLICACIÓN ---
let currentUser = localStorage.getItem('fisica_user') || null;
let activeScreen = 'screen-welcome';
let practiceScore = 0;
let practiceCount = 0;

// Variables Test
let testActive = false;
let testQuestions = [];
let testCurrentIdx = 0;
let testScore = 0;

// --- INICIALIZACIÓN ---
document.addEventListener("DOMContentLoaded", () => {
    initContent();
    setupNavigation();
    setupSimulations();
    setupSecurity();
    
    document.getElementById('db-q-count').innerText = questionBank.length;

    if (currentUser) {
        document.getElementById('display-name').innerText = currentUser;
        switchScreen('screen-menu');
    }

    // Input Nombre
    const nameInput = document.getElementById('student-name');
    const startBtn = document.getElementById('btn-start');
    nameInput.addEventListener('input', (e) => {
        startBtn.disabled = e.target.value.trim().length < 3;
    });

    startBtn.addEventListener('click', () => {
        currentUser = nameInput.value.trim();
        localStorage.setItem('fisica_user', currentUser);
        document.getElementById('display-name').innerText = currentUser;
        switchScreen('screen-menu');
    });

    // Reset
    document.getElementById('btn-reset-data').addEventListener('click', () => {
        localStorage.removeItem('fisica_user');
        location.reload();
    });
});

function initContent() {
    // Rellenar Teoría
    document.getElementById('theory-content').innerHTML = theoryData;

    // Rellenar Ejemplos
    const exContainer = document.getElementById('examples-content');
    let exHtml = '';
    examplesData.forEach(ex => {
        exHtml += `<div class="example-block">
            <h3>${ex.title}</h3>
            <p>${ex.desc}</p>
            <div class="formula">${ex.formula}</div>
        </div>`;
    });
    exContainer.innerHTML = exHtml;
}

// --- NAVEGACIÓN ---
function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => {
        if(s.id === screenId) {
            s.classList.remove('hidden');
            s.classList.add('active');
        } else {
            s.classList.add('hidden');
            s.classList.remove('active');
        }
    });
    activeScreen = screenId;
}

function setupNavigation() {
    document.querySelectorAll('.menu-card').forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            switchScreen(target);
            if(target === 'screen-practice') startPractice();
        });
    });

    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', () => {
            if(!testActive) switchScreen('screen-menu');
        });
    });

    document.getElementById('btn-settings').addEventListener('click', () => {
        switchScreen('screen-settings');
    });
}

// --- SIMULACIONES ---
function setupSimulations() {
    const mInput = document.getElementById('sim-m');
    const rFill = document.getElementById('ruler-fill');
    mInput.addEventListener('input', (e) => {
        let m = parseFloat(e.target.value) || 0;
        document.getElementById('sim-cm').innerText = (m * 100).toFixed(1);
        document.getElementById('sim-mm').innerText = (m * 1000).toFixed(1);
        document.getElementById('sim-in').innerText = (m * 39.37).toFixed(2);
        document.getElementById('sim-ft').innerText = (m * 3.28).toFixed(2);
        
        let pct = Math.min(Math.max((m / 10) * 100, 0), 100);
        rFill.style.width = pct + '%';
    });

    const kgInput = document.getElementById('sim-kg');
    const pan = document.getElementById('scale-pan');
    kgInput.addEventListener('input', (e) => {
        let kg = parseFloat(e.target.value) || 0;
        document.getElementById('sim-g').innerText = (kg * 1000).toFixed(1);
        document.getElementById('sim-lb').innerText = (kg * 2.20462).toFixed(2);
        document.getElementById('sim-oz').innerText = (kg * 35.274).toFixed(2);
        
        let drop = Math.min(kg * 5, 50); // Visual sink effect
        pan.style.transform = `translateY(${drop}px)`;
        if(kg > 10) pan.innerText = "🐘";
        else if(kg > 1) pan.innerText = "📦";
        else pan.innerText = "🍎";
    });
}

// --- PRÁCTICA LIBRE ---
let currentPracticeQ = null;
function startPractice() {
    document.getElementById('btn-pract-next').classList.add('hidden');
    nextPracticeQ();
}

function nextPracticeQ() {
    let q = questionBank[Math.floor(Math.random() * questionBank.length)];
    currentPracticeQ = q;
    
    document.getElementById('pract-q-text').innerText = q.q;
    const optContainer = document.getElementById('pract-options');
    optContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handlePracticeAnswer(idx, btn);
        optContainer.appendChild(btn);
    });
}

function handlePracticeAnswer(idx, btn) {
    if(!btn.classList.contains('option-btn')) return; // Already answered
    
    const isCorrect = (idx === currentPracticeQ.correct);
    practiceCount++;
    
    // Disable all
    const allBtns = document.getElementById('pract-options').querySelectorAll('.option-btn');
    allBtns.forEach((b, i) => {
        b.onclick = null;
        if(i === currentPracticeQ.correct) b.classList.add('correct');
        else if (i === idx) b.classList.add('wrong');
    });

    if(isCorrect) practiceScore++;
    
    document.getElementById('pract-solved').innerText = practiceCount;
    document.getElementById('pract-correct').innerText = practiceScore;
    
    let nextBtn = document.getElementById('btn-pract-next');
    nextBtn.classList.remove('hidden');
    nextBtn.onclick = () => {
        nextBtn.classList.add('hidden');
        nextPracticeQ();
    };
}

// --- EVALUACIÓN OFICIAL (TEST) ---
document.getElementById('btn-start-test').addEventListener('click', () => {
    // Elegir 15 preguntas random
    let shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    testQuestions = shuffled.slice(0, 15);
    testCurrentIdx = 0;
    testScore = 0;
    testActive = true;
    
    switchScreen('screen-test-active');
    renderTestQ();
});

function renderTestQ() {
    if(testCurrentIdx >= testQuestions.length) {
        finishTest();
        return;
    }
    
    let q = testQuestions[testCurrentIdx];
    document.getElementById('test-current-q').innerText = (testCurrentIdx + 1);
    document.getElementById('test-q-text').innerText = q.q;
    
    const optContainer = document.getElementById('test-options');
    optContainer.innerHTML = '';
    
    q.options.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if(idx === q.correct) testScore++;
            testCurrentIdx++;
            renderTestQ();
        };
        optContainer.appendChild(btn);
    });
}

function finishTest() {
    testActive = false;
    document.getElementById('result-score').innerText = testScore;
    
    let msg = "";
    let icon = "🏆";
    if(testScore === 15) { msg = "¡Perfección Absoluta!"; icon = "⭐"; }
    else if(testScore >= 10) { msg = "¡Excelente trabajo!"; icon = "🎉"; }
    else if(testScore >= 7) { msg = "Aprobado, pero puedes mejorar."; icon = "👍"; }
    else { msg = "Necesitas estudiar más."; icon = "📚"; }
    
    document.getElementById('result-msg').innerText = msg;
    document.getElementById('result-icon').innerText = icon;
    switchScreen('screen-test-result');
}

document.getElementById('btn-finish-test').addEventListener('click', () => {
    switchScreen('screen-menu');
});

// --- SEGURIDAD: ALARMA Y BLOQUEO ANTI-TRAMPA ---
let audioCtx;
let oscillator;
let gainNode;
let alarmInterval;

function playLoudAlarm() {
    if(!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if(audioCtx.state === 'suspended') audioCtx.resume();
    
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch
    
    // Sirena effect
    alarmInterval = setInterval(() => {
        let freq = oscillator.frequency.value === 800 ? 1200 : 800;
        oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    }, 300);

    gainNode.gain.setValueAtTime(1, audioCtx.currentTime); // Max Volume
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    oscillator.start();
}

function stopAlarm() {
    if(oscillator) {
        oscillator.stop();
        oscillator.disconnect();
    }
    if(alarmInterval) clearInterval(alarmInterval);
}

function setupSecurity() {
    document.addEventListener("visibilitychange", () => {
        // Si el usuario cambia de pestaña/app mientras el test está activo
        if (document.hidden && testActive) {
            triggerCheatAlarm();
        }
    });
}

function triggerCheatAlarm() {
    testActive = false; // Cancela el examen
    playLoudAlarm();
    document.getElementById('alarm-overlay').classList.remove('hidden');
}

document.getElementById('btn-stop-alarm').addEventListener('click', () => {
    stopAlarm();
    document.getElementById('alarm-overlay').classList.add('hidden');
    switchScreen('screen-menu'); // Lo devuelve al menú, pierde el examen
});


// --- CARGA DE PREGUNTAS (JSON) ---
const fileInput = document.getElementById('file-upload');
fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
        try {
            const data = JSON.parse(ev.target.result);
            if(Array.isArray(data)) {
                questionBank.push(...data);
                document.getElementById('db-q-count').innerText = questionBank.length;
                document.getElementById('upload-status').innerText = "✅ " + data.length + " preguntas añadidas con éxito.";
                document.getElementById('upload-status').style.color = "var(--success)";
            } else {
                throw new Error("El archivo no es un arreglo de preguntas.");
            }
        } catch(err) {
            document.getElementById('upload-status').innerText = "❌ Error: El archivo JSON tiene formato incorrecto.";
            document.getElementById('upload-status').style.color = "var(--danger)";
        }
    };
    reader.readAsText(file);
});

// --- REGISTRO DEL SERVICE WORKER (OFFLINE) ---
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('ServiceWorker registrado con éxito:', reg.scope))
            .catch(err => console.log('Fallo al registrar el ServiceWorker:', err));
    });
}
