// 1. Находим элементы на странице
const output = document.getElementById("output");
const input = document.getElementById("command-input");

// 2. База данных команд (Контент твоего портфолио)
const commands = {
  // === Справочная информация ===
  help: `
        <span class="highlight">Доступные команды системы:</span><br>
        ------------------------------------------<br>
        <span class="highlight">about</span>       : Информация о разработчике<br>
        <span class="highlight">skills</span>      : Технический стек и инструменты<br>
        <span class="highlight">projects</span>    : Избранные проекты<br>
        <span class="highlight">education</span>   : Образование и курсы<br>
        <span class="highlight">contact</span>     : Связаться со мной<br>
        <span class="highlight">social</span>      : Профили в соцсетях<br>
        <span class="highlight">clear</span>       : Очистить экран<br>
    `,

  // === О себе (Личность) ===
  about: `
        <span class="highlight">SYSTEM USER:</span> Alex Developer (замените на свое имя)<br>
        <span class="highlight">ROLE:</span> Junior Frontend Developer<br>
        <span class="highlight">LOCATION:</span> Планета Земля<br>
        <br>
        Привет! Я создаю разрабатываю и создаю веб-интерфейсы, которые работают быстро и выглядят стильно.<br>
        Моя цель — превращать дизайн и код в удобные продукты для людей.<br>
        В данный момент ищу команду для работы над крутыми проектами.<br>
        <br>
        <em>"Код — это поэзия, которую исполняют машины."</em>
    `,

  // === Навыки (Hard Skills) ===
  skills: `
        <span class="highlight">--- FRONTEND CORE ---</span><br>
        [#] HTML5 <br>
        [#] CSS3 (Flexbox, Grid, Animation)<br>
        [#] JavaScript <br>
        <br>
        <span class="highlight">--- TOOLS & BASICS ---</span><br>
        [*] Git & GitHub (Pull Requests, Merging)<br>
        [*] VS Code (Extensions, Debugging)<br>
        [*] Figma (Pixel-perfect верстка)<br>
    `,

  // === Проекты (Портфолио) ===
  projects: `
        <span class="highlight">Загрузка списка проектов... [OK]</span><br>
        <br>
        1. <span class="highlight">Landing Page "Travel"</span><br>
           > Обучающая платформа для банка ПСБ(разработано в рамках хакатона Hack&Change).<br>
           > Стек: HTML, CSS, JS<br>
           > <a href="https://github.com/ShEVa15/zameshatelstvo/blob/main/src/main/resources/templates/course.html" target="_blank">[Код на GitHub]</a> | <a href="#" target="_blank">[Демо]</a><br>
        <br>
        2. <span class="highlight">Weather App JS</span><br>
           > Макет интерфейса приложения автосервиса.<br>
           > Стек: Figma<br>
           > <a href="https://www.figma.com/design/AHrkQOzkApWZMfSWDZSWRk/Volga-IT?node-id=11-1833&t=EdKkbq0Yk9S6bSFQ-1" target="_blank">[Макет в Figma]</a> | <a href="#" target="_blank">[Демо]</a><br>
        <br>
        3. <span class="highlight">Terminal Portfolio</span><br>
           > Этот сайт. Реализован без фреймворков.<br>
           > Стек: HTML, CSS, JS<br>
           > <a href="#" target="_blank">[View Source]</a>
    `,

  // === Образование ===
  education: `
        <span class="highlight">2020 - 2024</span> : Краснодарский коллдж электронного приборостроения<br>
        Направление: Информационные системы и программирование<br>
        <br>
        <span class="highlight">2023</span> : Курс "К2 Нейротех AI Boostcamp"<br>
        Сертификат: Разработка AI-агентов для бизнеса
    `,

  // === Контакты ===
  contact: `
        <span class="highlight">STATUS:</span> Open to work (Готов к работе)<br>
        <br>
        Email: <a href="mailto:vz93712@gmail.com">vz93712@gmail.com</a><br>
        Telegram: <a href="https://t.me/@V_P_Z07" target="_blank">@V_P_Z07</a><br>
        Phone: +7 (918) 215-90-93
    `,

  // === Соцсети ===
  social: `
        GitHub: <a href="https://github.com/" target="_blank">github.com/user</a><br>
        LinkedIn: <a href="https://linkedin.com/" target="_blank">linkedin.com/in/user</a><br>
        Habr: <a href="#" target="_blank">habr.com/users/user</a>
    `,

  // === Пасхалка (Easter Egg) ===
  sudo: `
        <span style="color: red">PERMISSION DENIED.</span><br>
        Вы не администратор этой системы.<br>
        Но попытка хорошая :)
    `,
  // Секретная команда (Easter Egg)
  matrix: `
        Wake up, Neo...<br>
        The Matrix has you.
    `,
};

// 3. Обработка нажатия клавиш
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const command = input.value.trim().toLowerCase(); // Убираем пробелы, приводим к нижнему регистру

    if (command) {
      // Сначала выводим то, что ввел пользователь
      printOutput(`neo@portfolio:~$ ${command}`, "user-command");

      // Обрабатываем команду
      processCommand(command);
    }

    // Очищаем поле ввода
    input.value = "";
  }
});

// 4. Функция обработки команд
function processCommand(cmd) {
  if (cmd === "clear") {
    output.innerHTML = ""; // Очистка экрана
  } else if (commands[cmd]) {
    printOutput(commands[cmd]); // Вывод ответа из базы
  } else {
    printOutput(
      `Команда не найдена: ${cmd}. Введите <span class="highlight">help</span>.`,
      "error",
    );
  }
}

// 5. Функция вывода текста в терминал
function printOutput(text, className = "") {
  const div = document.createElement("div");
  div.className = "line " + className;
  div.innerHTML = text; // Используем innerHTML, чтобы работали теги <br> и <a>
  output.appendChild(div);

  // Прокрутка вниз, чтобы видеть последнее сообщение
  window.scrollTo(0, document.body.scrollHeight);
}

// 6. Фокус на поле ввода при клике в любом месте (для удобства)
document.addEventListener("click", function () {
  input.focus();
});
