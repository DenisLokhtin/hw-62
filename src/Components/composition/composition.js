import React from 'react';
import './composition.css'

const composition = (props) => (
    <div>
        <h2>Состав</h2>
        <p>Компонентами «классического» варианта «Кока-колы» являются:</p>
        <div className="composition-list">
            <ol>
                <li>очищенная газированная вода</li>
                <li>Сахар</li>
                <li>натуральный краситель карамель</li>
                <li>регулятор кислотности ортофосфорная кислота</li>
                <li>натуральные ароматизаторы</li>
                <li>кофеин</li>
            </ol>
        </div>
        <p>
            По утверждениям производителя, на конец 2016 года для приготовления 1 литра «Кока-Колы» было необходимо 1,96
            литра воды.
        </p>
        <p>
            Точный состав натуральных специй «Кока-Колы» (помимо ингредиентов, указанных выше) является коммерческой
            тайной. Оригинальная копия состава хранится в главном хранилище банка SunTrust Banks в Атланте. Его
            предшественник, компания Trust Company, была страховщиком IPO The Coca-Cola Company в 1919 году.
        </p>
        <p>
            Популярный миф гласит, что только два руководителя могут иметь доступ к составу, при этом у каждого может
            быть доступ только к половине информации[17]. Правда в том, что хотя у Coca-Cola и есть правило,
            ограничивающее доступ лишь для двух руководителей, каждый из них знает состав целиком, и другим, в
            дополнение к установленным двум, был известен процесс изготовления[18].
        </p>
    </div>
);

export default composition;