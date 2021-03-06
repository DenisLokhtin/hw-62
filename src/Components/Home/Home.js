import './Home.css';
import React from 'react';
import colaImg from '../../images/coca-cola.png';

const Home = (props) => (
    <div>
        <h2>Главная</h2>
        <img src={colaImg} alt="Coca-cola"/>
        <p>
            Coca-Cola (кока-кола) — безалкогольный газированный напиток, производимый компанией «Кока-Кола» («The
            Coca-Cola Company»).
            «Кока-Кола» была признана одним из самых дорогих брендов в мире в 2005—2015 годах в рейтинге международного
            исследовательского агентства Interbrand.
            Напиток официально продаётся во всех странах мира, кроме Кубы и Северной Кореи (КНДР). Согласно
            некоторым[источник не указан 46 дней] статистическим данным, 94 % жителей всей планеты хоть раз слышали о
            бренде «Coca-Cola».
        </p>
        <p>
            Напиток кока-кола был придуман в Атланте (штат Джорджия, США) 8 мая 1886 года фармацевтом Джоном Ститом
            Пембертоном — бывшим офицером американской Армии конфедерации (есть легенда, что его придумал фермер,
            который продал свой рецепт Джону Ститу за 250 долларов, о чём Джон Стит якобы сказал в одном из своих
            интервью). Название для нового напитка придумал бухгалтер Пембертона — Фрэнк Робинсон, который также, владея
            каллиграфией, написал слова «Coca-Cola» фигурными буквами, до сих пор являющимися логотипом напитка.
        </p>
        <p>
            Основные ингредиенты кока-колы были таковы: три части листьев коки (из этих же листьев в 1859 году Альберт
            Ниман (нем. Albert Niemann) выделил особый компонент (наркотик) и назвал его кокаином) на одну часть орехов
            тропического дерева колы. Получившийся напиток был запатентован как лекарственное средство «от расстройств
            нервной системы»[источник не указан 1836 дней] и начал продаваться через автомат в крупнейшей городской
            аптеке Джекоба в Атланте. Пембертон также утверждал, что кока-кола исцеляет от импотенции и что на неё можно
            перейти тем, кто пристрастился к морфию (к морфию был неравнодушен и сам Пембертон). В то время кокаин не
            являлся запрещённым веществом. Поэтому кокаин свободно продавался, и его часто добавляли для удовольствия и
            тонуса в напитки взамен спирта — «Кока-Кола» в этом не была новинкой.
        </p>
    </div>
);

export default Home;