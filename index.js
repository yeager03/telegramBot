const TgApi = require("node-telegram-bot-api");

const token = "1765338824:AAGm9WYtkADg2ax8bNxDpreBJogLuXOEdFQ";

const bot = new TgApi(token, {
    polling: true
});

const start = () => {
    bot.setMyCommands([{
        command: '/start',
        description: 'Канал'
    }, {
        command: '/java',
        description: 'Получить сегодняшний урок'
    }]);

    bot.addListener("message", async message => {
        const text = message.text;
        const chatID = message.chat.id;
        const firstName = message.chat.first_name;

        console.log(message);

        if (text === '/start') {
            await bot.sendSticker(chatID, "https://raw.githubusercontent.com/ZekeYeager1966/photosTG/main/java-hd-wallpaper-java-images.webp");
            return bot.sendMessage(chatID, `Java бағдарламау тіліндегі Практика каналына қош келдіңіз ${firstName}!`);
        } else if (text === '/java') {
            try {
                const db = {
                    // 1: [
                    //     'BQACAgIAAxkBAAICS2CRotNVpmAZuB5VDPeanXbu3-9YAAKDEAACGgABiUiWiVS_w_VStx8E', 'BQACAgIAAxkBAAICTWCRo2pI6TzB1dY4aHx7tSKAxtkrAAKHEAACGgABiUj00q3ScFAtdh8E', 'BQACAgIAAxkBAAICT2CRo-MDDdfoqeSAzHHMgCnfz9EeAAKIEAACGgABiUiYbRSTj_pHWR8E'
                    // ],
                    // 2: [
                    //     'BQACAgIAAxkBAAICUWCRpFcNhlIXVgvMWOJMckwNCdc9AAKMEAACGgABiUg0UzhH2pY36R8E', 'BQACAgIAAxkBAAICU2CRpQdZVTzD4l1GUOLS1ERqOx9jAAKQEAACGgABiUiHFYYPIDaX1B8E', 'BQACAgIAAxkBAAICVWCRpaEBr3rrPkTWGw2D0jp96_TsAAKTEAACGgABiUh4CAFFlQorKh8E'
                    // ],
                    // 3: [
                    //     'BQACAgIAAxkBAAICV2CRpjN6AAFhbOsGzXlyStmYI_2hmQAClxAAAhoAAYlIMp6-GhdHhmAfBA', 'BQACAgIAAxkBAAICWWCRpwl1td5JqvIV7bR22_QzSz1zAAKcEAACGgABiUgqpUJdmZ_0uR8E', 'BQACAgIAAxkBAAICW2CRp6iQWBA7Ap0ZdzVLA5C_oYJGAAKfEAACGgABiUhCfSkvgiJKbh8E'
                    // ],
                    1: [
                        'BQACAgIAAxkBAAICXWCRqBiHGBOQb0c5qcFDYCYR4uV3AAKgEAACGgABiUgvxcnXO6AC0h8E'
                    ]
                };

                let a = 0;

                const first = async () => {
                    const something = () => {
                        a++;

                        if (db[a]) {
                            db[a].forEach(item => {
                                bot.sendDocument(chatID, `${item}`);
                            });
                        }
                    };

                    // something();
                    setInterval(something, 1000 * 60 * 60 * 3);
                };

                first();

            } catch (e) {
                console.log(e);
            }

        }

    });
};

start();