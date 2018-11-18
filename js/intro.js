import {
  makeElement
} from "./utils";

const introHtml = `<!-- Интро -->
  <section class="intro">
  <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
<p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
</section>`;

const intro = makeElement(introHtml);

export default intro;
