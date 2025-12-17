// === КОНФИГУРАЦИЯ И ДАННЫЕ ===

const output = document.getElementById("output");
const input = document.getElementById("command-input");
const terminalContainer = document.getElementById("terminal-container");

const commands = {
  help: `
        <span class="header">SYSTEM COMMANDS:</span><br>
        <span class="highlight">about</span>       : Информация о разработчике<br>
        <span class="highlight">skills</span>      : Технический стек<br>
        <span class="highlight">projects</span>    : Мои проекты<br>
        <span class="highlight">education</span>   : Образование<br>
        <span class="highlight">contact</span>     : Контакты<br>
        <span class="highlight">social</span>      : Соцсети<br>
        <span class="highlight">clear</span>       : Очистить экран<br>
    `,

  about: `
        <span class="header">USER PROFILE:</span><br>
        Name: Vladimir Developer<br>
        Role: Junior Frontend Developer<br>
        Location: Планета Земля<br>
        <br>
        Привет! Я разрабатываю веб-интерфейсы, которые работают быстро и выглядят стильно.<br>
        Моя цель — превращать дизайн и код в удобные продукты для людей.<br>
        В данный момент ищу команду для работы над крутыми проектами.<br>
        <br>
        <em>"Код — это поэзия, которую исполняют машины."</em>
    `,

  skills: `
        <span class="header">FRONTEND CORE</span><br>
        [#] HTML5 (Semantic)<br>
        [#] CSS3 (Flexbox, Grid, Animation)<br>
        [#] JavaScript (ES6+)<br>
        <br>
        <span class="header">TOOLS & BASICS</span><br>
        [*] Git & GitHub (Pull Requests, Merging)<br>
        [*] VS Code (Extensions, Debugging)<br>
        [*] Figma (Pixel-perfect верстка)<br>
    `,

  projects: `
        <span class="dim">Загрузка списка проектов... [OK]</span><br>
        <br>
        <span class="header">1. Edu Platform (PSB Bank)</span><br>
        Обучающая платформа для банка ПСБ.<br>
        (Разработано в рамках хакатона Hack&Change)<br>
        <span class="dim">Tech:</span> HTML, CSS, JS<br>
        ➜ <a href="https://github.com/ShEVa15/zameshatelstvo/blob/main/src/main/resources/templates/course.html" target="_blank">View Code</a><br>
        <br>
        <span class="header">2. Auto Service UI (Figma)</span><br>
        Макет интерфейса приложения для автосервиса.<br>
        <span class="dim">Tech:</span> Figma Design<br>
        ➜ <a href="https://www.figma.com/design/AHrkQOzkApWZMfSWDZSWRk/Volga-IT?node-id=11-1833&t=EdKkbq0Yk9S6bSFQ-1" target="_blank">View Design</a><br>
        <br>
        <span class="header">3. Terminal Portfolio</span><br>
        Этот сайт. Реализован на Vanilla JS без библиотек.<br>
        <span class="dim">Tech:</span> HTML5, CSS3, JS<br>
        ➜ <a href="https://github.com/vz93712-debug/Portfolio_Terminal" target="_blank">View Source</a>
    `,

  education: `
        <span class="header">2023 - 2027</span><br>
        Краснодарский колледж электронного приборостроения<br>
        Факультет: Информационные системы и программирование<br>
        <br>
        <span class="header">2025</span><br>
        Курс "К2 Нейротех AI Boostcamp"<br>
        Сертификат: Разработка AI-агентов для бизнеса
    `,

  contact: `
        <span class="header">STATUS:</span> <span style="color: #0f0">Open to work</span><br>
        <br>
        Email: <a href="mailto:vz93712@gmail.com">vz93712@gmail.com</a><br>
        Telegram: <a href="https://t.me/V_P_Z07" target="_blank">@V_P_Z07</a><br>
        Phone: +7 (918) 215-90-93
    `,

  social: `
        GitHub: <a href="https://github.com/vz93712-debug" target="_blank">github.com/vz93712-debug</a><br>
        LinkedIn: <a href="#" target="_blank">linkedin.com/in/user</a><br>
        Habr: <a href="#" target="_blank">habr.com/users/user</a>
    `,

  sudo: `
        <span class="highlight" style="color: red">Nice try, admin.</span><br>
        <br>
        <pre>
⠀⠀⠀⠀⠀⠀⠀⢀⡔⠋⢉⠩⡉⠛⠛⠛⠉⣉⣉⠒⠒⡦⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠎⠀⠀⠠⢃⣉⣀⡀⠂⠀⠀⠄⠀⠀⠀⠀⢱⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡰⠟⣀⢀⣒⠐⠛⡛⠳⢭⠆⠀⠤⡶⠿⠛⠂⠀⢈⠳⡀⠀⠀⠀
⠀⠀⠀⠀⢸⢈⢘⢠⡶⢬⣉⠉⠀⠀⡤⠄⠀⠀⠣⣄⠐⠚⣍⠁⢘⡇⠀⠀⠀
⠀⠀⠀⠀⠈⢫⡊⠀⠹⡦⢼⣍⠓⢲⠥⢍⣁⣒⣊⣀⡬⢴⢿⠈⡜⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠹⡄⠀⠘⢾⡉⠙⡿⠶⢤⣷⣤⣧⣤⣷⣾⣿⠀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠦⡠⢀⠍⡒⠧⢄⣀⣈⣏⣏⣏⣹⠽⠊⢠⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠪⢔⡉⠂⠀⢀⣀⣀⣀⡠⠤⠲⠃⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
        </pre>
    `,

  matrix: `
        Wake up, Neo...<br>
        The Matrix has you.
    `,
};

// === ЛОГИКА ТЕРМИНАЛА ===

// Обработка ввода
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim().toLowerCase();

    if (command) {
      printOutput(`neo@portfolio:~$ ${command}`, "user-command");
      processCommand(command);
    }

    input.value = "";
  }
});

// Обработка команд
function processCommand(cmd) {
  if (cmd === "clear") {
    output.innerHTML = "";
  } else if (commands[cmd]) {
    printOutput(commands[cmd]);
  } else {
    printOutput(
      `Command not found: ${cmd}. Type <span class="highlight">help</span>.`,
      "error",
    );
  }
}

// Вывод текста с авто-скроллом
function printOutput(text, className = "") {
  const div = document.createElement("div");
  div.className = "line " + className;
  div.innerHTML = text;
  output.appendChild(div);

  // Прокрутка вниз к новому контенту
  if (terminalContainer) {
    terminalContainer.scrollTop = terminalContainer.scrollHeight;
  } else {
    window.scrollTo(0, document.body.scrollHeight);
  }
}

// Авто-фокус на поле ввода при клике
document.addEventListener("click", function () {
  input.focus();
});
window.onload = function () {
  input.focus();
};

// === ЭФФЕКТ МАТРИЦЫ (ФОН) ===
const canvas = document.getElementById("matrix-bg");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const katakana =
    "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン";
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const alphabet = katakana + latin + nums;

  const fontSize = 16;
  const columns = canvas.width / fontSize;
  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0F0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 30);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
