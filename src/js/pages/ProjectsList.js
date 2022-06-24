import React from "react";
import {ProjectListItem} from "../components";

const projects = [
    {id: 1, type: "site", name: "Конструктор чат-ботов «ubots.ru»"},
    {id: 2, type: "chat", name: "4Bots — развлекательные чат-боты"},
    {id: 3, type: "chat", name: "GTA SA-MP в диалоге ВКонтакте"},
    {id: 4, type: "site", name: "Файлообменник «files.danilov.pw»"},
    {id: 6, type: "chat", name: "Пародия на VK Coin «Pins»"},
    {id: 7, type: "chat", name: "Бот для повышения активности «Coins»"},
    {id: 7, type: "chat", name: "Мем-бот «а вот всё тебе расскажи»"},
    {id: 8, type: "chat", name: "Конструктор чат-ботов «ubots»"},
    {id: 9, type: "chat", name: "Бот для повышения активности «Слоты»"},
    {id: 10, type: "chat", name: "«Танки Онлайн» в диалоге ВКонтакте"},
    {id: 11, type: "chat", name: "«CrateZone» симулятор CS:GO"},
    {id: 12, type: "chat", name: "Бот-рулетка для «Grand Russia»"},
    {id: 13, type: "chat", name: "«Монополия» в диалоге ВКонтакте"},
    {id: 14, type: "app", name: "Приложение для «Grand Russia»"},
    {id: 15, type: "app", name: "Маркетплейс «BLACK RUSSIA MARKET»"},
    {id: 16, type: "chat", name: "Бот для фриланс-биржи «GAME WORK»"},
].reverse();

function ProjectsList() {
    return (
        <main className="page-content">
            {projects.map(({id, type, name}) =>
                <ProjectListItem id={id} key={id} type={type} name={name} />
            )}
        </main>
    );
}

export default ProjectsList;
